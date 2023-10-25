const FrogDAOGovernanceRewards = artifacts.require("FrogDAOGovernanceRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAOGovernanceRewards', (accounts) => {
	it('test for FrogDAOGovernanceRewards', async () => {
		const addresscOu4rnU = accounts[4]
		const FrogDAOGovernanceRewardsRMx1NIC = await FrogDAOGovernanceRewards.new(addresscOu4rnU, {from: accounts[0]});
		const addressiADqZoP = accounts[1]
		const uint256c9Zosr = await FrogDAOGovernanceRewardsRMx1NIC.earned.call(addressiADqZoP, {from: accounts[4]});
		const uint256tm5jxK = await FrogDAOGovernanceRewardsRMx1NIC.devFundAvailable.call({from: accounts[2]});
//		await FrogDAOGovernanceRewardsRMx1NIC.checkhalve.call({from: accounts[3]});

		assert.equal(uint256c9Zosr, BigInt("0"))
		assert.equal(uint256tm5jxK, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsRMx1NIC.checkhalve.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressiIRFOEI = accounts[1]
		const FrogDAOGovernanceRewardsuQqwKwb = await FrogDAOGovernanceRewards.new(addressiIRFOEI, {from: accounts[1]});
		const address1I6iLu = accounts[4]
		const uint256Q7zsZgC = await FrogDAOGovernanceRewardsuQqwKwb.lastTimeRewardApplicable.call({from: accounts[2]});
//		const addressDG8jUW8 = await FrogDAOGovernanceRewardsuQqwKwb.updateReward.call(address1I6iLu, {from: accounts[3]});
//		await FrogDAOGovernanceRewardsuQqwKwb.checkhalve.call({from: accounts[3]});
//		await FrogDAOGovernanceRewardsuQqwKwb.checkhalve.call({from: accounts[0]});

		assert.equal(uint256Q7zsZgC, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsuQqwKwb.updateReward.call(address1I6iLu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresstCa99WC = accounts[3]
		const FrogDAOGovernanceRewardsTELlBU1 = await FrogDAOGovernanceRewards.new(addresstCa99WC, {from: accounts[3]});
		const uintNEFR3Mp = BigInt("569")
		const uintpuld1CA = BigInt("291")
//		const uint256NIhtpqD = await FrogDAOGovernanceRewardsTELlBU1.stake.call(uintNEFR3Mp, {from: accounts[2]});
//		await FrogDAOGovernanceRewardsTELlBU1.checkStart.call({from: accounts[2]});
//		const uint256zYL4SWM = await FrogDAOGovernanceRewardsTELlBU1.devFundAvailable.call({from: accounts[1]});
//		await FrogDAOGovernanceRewardsTELlBU1.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		await FrogDAOGovernanceRewardsTELlBU1.exit.call({from: accounts[3]});
//		const uint256O7m9zz6 = await FrogDAOGovernanceRewardsTELlBU1.notifyRewardAmount.call(uintpuld1CA, {from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsTELlBU1.stake.call(uintNEFR3Mp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressdyr1II = accounts[4]
		const FrogDAOGovernanceRewardsqxVQ84v = await FrogDAOGovernanceRewards.new(addressdyr1II, {from: accounts[2]});
		const addressKjcRqoW = accounts[4]
		const uintZQg7p1 = BigInt("1176")
		const uinty06Ifae = BigInt("398")
//		const addressZoWRmI1 = await FrogDAOGovernanceRewardsqxVQ84v.transferDevAddr.call(addressKjcRqoW, {from: accounts[0]});
//		const uint256xxHbumb = await FrogDAOGovernanceRewardsqxVQ84v.withdraw.call(uintZQg7p1, {from: accounts[2]});
//		const uint256wr3p88o = await FrogDAOGovernanceRewardsqxVQ84v.notifyRewardAmount.call(uinty06Ifae, {from: accounts[4]});

		await expect(FrogDAOGovernanceRewardsqxVQ84v.transferDevAddr.call(addressKjcRqoW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressu9jlfVT = accounts[4]
		const FrogDAOGovernanceRewardsxBblagn = await FrogDAOGovernanceRewards.new(addressu9jlfVT, {from: accounts[2]});
		const addressTJiPlou = accounts[3]
		const addressDjbS57n = await FrogDAOGovernanceRewardsxBblagn.transferDevAddr.call(addressTJiPlou, {from: accounts[4]});
//		await FrogDAOGovernanceRewardsxBblagn.checkhalve.call({from: accounts[0]});
//		const uint256p4XxMeh = await FrogDAOGovernanceRewardsxBblagn.rewardPerToken.call({from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsxBblagn.checkhalve.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressY4QDslL = accounts[0]
		const FrogDAOGovernanceRewardsYJhF5W = await FrogDAOGovernanceRewards.new(addressY4QDslL, {from: accounts[5]});
		const uintNwIsf0z = BigInt("810")
		const addressnP6gavS = accounts[0]
//		const uint256Mg9DVbu = await FrogDAOGovernanceRewardsYJhF5W.withdraw.call(uintNwIsf0z, {from: accounts[3]});
//		const addressGSEc6ym = await FrogDAOGovernanceRewardsYJhF5W.updateReward.call(addressnP6gavS, {from: accounts[1]});
//		await FrogDAOGovernanceRewardsYJhF5W.getReward.call({from: accounts[0]});

		await expect(FrogDAOGovernanceRewardsYJhF5W.withdraw.call(uintNwIsf0z, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressYMRrL91 = accounts[0]
		const FrogDAOGovernanceRewardsuxwoUkB = await FrogDAOGovernanceRewards.new(addressYMRrL91, {from: accounts[4]});
		const uint1gO4Tz = BigInt("936")
		const uint9YhWQV = BigInt("1517")
		const addressZTjH1Z3 = "0x0000000000000000000000000000000000000001"
		const addressuEs41K4 = accounts[2]
//		const uint256wnP1xiS = await FrogDAOGovernanceRewardsuxwoUkB.notifyRewardAmount.call(uint1gO4Tz, {from: accounts[4]});
//		const uint256l4WSnnl = await FrogDAOGovernanceRewardsuxwoUkB.stake.call(uint9YhWQV, {from: accounts[3]});
//		const addressor6RLVl = await FrogDAOGovernanceRewardsuxwoUkB.updateReward.call(addressZTjH1Z3, {from: accounts[1]});
//		const addresscAfFxai = await FrogDAOGovernanceRewardsuxwoUkB.updateReward.call(addressuEs41K4, {from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsuxwoUkB.notifyRewardAmount.call(uint1gO4Tz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressVZR93eT = accounts[1]
		const FrogDAOGovernanceRewardsET6Lnrd = await FrogDAOGovernanceRewards.new(addressVZR93eT, {from: accounts[0]});
		const addressemzQzFN = accounts[0]
		const uintswm7fAo = BigInt("1525")
//		await FrogDAOGovernanceRewardsET6Lnrd.renounceDevAddr.call({from: accounts[4]});
//		const addressepmu5iV = await FrogDAOGovernanceRewardsET6Lnrd.transferDevAddr.call(addressemzQzFN, {from: accounts[1]});
//		const uint256EID1qxX = await FrogDAOGovernanceRewardsET6Lnrd.withdrawDevFund.call(uintswm7fAo, {from: accounts[4]});
//		await FrogDAOGovernanceRewardsET6Lnrd.checkhalve.call({from: accounts[1]});
//		const uint256LFBoMEe = await FrogDAOGovernanceRewardsET6Lnrd.devFundAvailable.call({from: accounts[1]});

		await expect(FrogDAOGovernanceRewardsET6Lnrd.renounceDevAddr.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressoglrPtq = accounts[0]
		const FrogDAOGovernanceRewardsu7k4sqi = await FrogDAOGovernanceRewards.new(addressoglrPtq, {from: "0x0000000000000000000000000000000000000001"});
		const uintSCgPBsD = BigInt("383")
		const addressqXQ2k6w = accounts[2]
		const addressVPCZ27 = "0x0000000000000000000000000000000000000001"
		const uint256Rnlv9VA = await FrogDAOGovernanceRewardsu7k4sqi.withdraw.call(uintSCgPBsD, {from: accounts[3]});
		const uint256M9f8I1C = await FrogDAOGovernanceRewardsu7k4sqi.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256KTVuAI6 = await FrogDAOGovernanceRewardsu7k4sqi.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256zxPcvX9 = await FrogDAOGovernanceRewardsu7k4sqi.earned.call(addressqXQ2k6w, {from: accounts[2]});
		const addressMsKxQyG = await FrogDAOGovernanceRewardsu7k4sqi.updateReward.call(addressVPCZ27, {from: accounts[2]});
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresszBZ29aC = accounts[4]
		const FrogDAOGovernanceRewardsRMx1NIC = await FrogDAOGovernanceRewards.new(addresszBZ29aC, {from: accounts[0]});
		const uintQA7KDaH = BigInt("141")
		const addressO0pg0oP = accounts[1]
//		const uint256nZUhRJ = await FrogDAOGovernanceRewardsRMx1NIC.withdrawDevFund.call(uintQA7KDaH, {from: accounts[2]});
//		const uint256c9Zosr = await FrogDAOGovernanceRewardsRMx1NIC.earned.call(addressO0pg0oP, {from: accounts[4]});
//		const uint256tm5jxK = await FrogDAOGovernanceRewardsRMx1NIC.devFundAvailable.call({from: accounts[2]});
//		await FrogDAOGovernanceRewardsRMx1NIC.checkhalve.call({from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsRMx1NIC.withdrawDevFund.call(uintQA7KDaH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressAjoU70G = "0x0000000000000000000000000000000000000001"
		const FrogDAOGovernanceRewardsnMNQmJ4 = await FrogDAOGovernanceRewards.new(addressAjoU70G, {from: accounts[0]});
		const uintPmHzWR = BigInt("796")
		const uintQPMqX1F = BigInt("622")
//		const uint256LLC5bjD = await FrogDAOGovernanceRewardsnMNQmJ4.notifyRewardAmount.call(uintPmHzWR, {from: accounts[1]});
//		const uint256okX9uG = await FrogDAOGovernanceRewardsnMNQmJ4.stake.call(uintQPMqX1F, {from: accounts[3]});
//		const uint256zMifhRt = await FrogDAOGovernanceRewardsnMNQmJ4.devFundAvailable.call({from: accounts[1]});

		await expect(FrogDAOGovernanceRewardsnMNQmJ4.notifyRewardAmount.call(uintPmHzWR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressN41cXOV = accounts[4]
		const FrogDAOGovernanceRewardsRMx1NIC = await FrogDAOGovernanceRewards.new(addressN41cXOV, {from: accounts[0]});
		const addressD1o1UM = accounts[2]
		const uint256c9Zosr = await FrogDAOGovernanceRewardsRMx1NIC.earned.call(addressD1o1UM, {from: accounts[4]});
		const uint256tm5jxK = await FrogDAOGovernanceRewardsRMx1NIC.devFundAvailable.call({from: accounts[2]});
//		await FrogDAOGovernanceRewardsRMx1NIC.exit.call({from: accounts[1]});
//		await FrogDAOGovernanceRewardsRMx1NIC.checkhalve.call({from: accounts[3]});

		assert.equal(uint256c9Zosr, BigInt("0"))
		assert.equal(uint256tm5jxK, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsRMx1NIC.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressor3sMSu = accounts[4]
		const FrogDAOGovernanceRewardsRMx1NIC = await FrogDAOGovernanceRewards.new(addressor3sMSu, {from: accounts[0]});
		const addressqV0r9RF = accounts[2]
		const uintvTq4Lv = BigInt("458")
		const uintwboTLe = BigInt("260")
		const uint256c9Zosr = await FrogDAOGovernanceRewardsRMx1NIC.earned.call(addressqV0r9RF, {from: accounts[4]});
//		const uint256hbERyf = await FrogDAOGovernanceRewardsRMx1NIC.withdrawDevFund.call(uintvTq4Lv, {from: accounts[4]});
//		const uint256a7O7EJg = await FrogDAOGovernanceRewardsRMx1NIC.withdraw.call(uintwboTLe, {from: accounts[4]});

		assert.equal(uint256c9Zosr, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsRMx1NIC.withdrawDevFund.call(uintvTq4Lv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})