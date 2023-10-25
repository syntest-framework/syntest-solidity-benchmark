const FrogDAOGovernanceRewards = artifacts.require("FrogDAOGovernanceRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAOGovernanceRewards', (accounts) => {
	it('test for FrogDAOGovernanceRewards', async () => {
		const address0qkqOs = accounts[4]
		const FrogDAOGovernanceRewardsCve8lj3 = await FrogDAOGovernanceRewards.new(address0qkqOs, {from: accounts[0]});
		const uintNsccYN3 = BigInt("52")
		const addresser1S0GS = accounts[1]
		const uintFZyFVHz = BigInt("61")
//		const uint256fuXUmb9 = await FrogDAOGovernanceRewardsCve8lj3.withdraw.call(uintNsccYN3, {from: accounts[1]});
//		const addressPcVeCK = await FrogDAOGovernanceRewardsCve8lj3.updateReward.call(addresser1S0GS, {from: accounts[0]});
//		const uint256bn02h4m = await FrogDAOGovernanceRewardsCve8lj3.withdrawDevFund.call(uintFZyFVHz, {from: accounts[0]});
//		await FrogDAOGovernanceRewardsCve8lj3.getReward.call({from: accounts[1]});
//		const uint256lO6SjKG = await FrogDAOGovernanceRewardsCve8lj3.rewardPerToken.call({from: accounts[4]});
//		await FrogDAOGovernanceRewardsCve8lj3.renounceDevAddr.call({from: accounts[0]});

		await expect(FrogDAOGovernanceRewardsCve8lj3.withdraw.call(uintNsccYN3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressyiaT6eb = accounts[3]
		const FrogDAOGovernanceRewardshlNMjsc = await FrogDAOGovernanceRewards.new(addressyiaT6eb, {from: "0x0000000000000000000000000000000000000001"});
		const uintKeChuHo = BigInt("90")
		const addressT7n2wi = accounts[0]
		await FrogDAOGovernanceRewardshlNMjsc.getReward.call({from: accounts[4]});
		const uint256WUmJVWN = await FrogDAOGovernanceRewardshlNMjsc.notifyRewardAmount.call(uintKeChuHo, {from: accounts[4]});
		const uint256YJnwWqa = await FrogDAOGovernanceRewardshlNMjsc.devFundAvailable.call({from: accounts[3]});
		const addressxkbvasX = await FrogDAOGovernanceRewardshlNMjsc.transferDevAddr.call(addressT7n2wi, {from: accounts[2]});
		await FrogDAOGovernanceRewardshlNMjsc.checkhalve.call({from: accounts[5]});
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressNf4T2qY = accounts[2]
		const FrogDAOGovernanceRewardsN3FfL45 = await FrogDAOGovernanceRewards.new(addressNf4T2qY, {from: accounts[3]});
		const addresslwAkrLp = accounts[1]
		const addressHy5uFOh = accounts[1]
		const uint256ABVTIJk = await FrogDAOGovernanceRewardsN3FfL45.earned.call(addresslwAkrLp, {from: accounts[2]});
//		const addresshumG2qH = await FrogDAOGovernanceRewardsN3FfL45.transferDevAddr.call(addressHy5uFOh, {from: accounts[3]});
//		const uint256nPWPVc = await FrogDAOGovernanceRewardsN3FfL45.devFundAvailable.call({from: accounts[1]});

		assert.equal(uint256ABVTIJk, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsN3FfL45.transferDevAddr.call(addressHy5uFOh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressWN6jvBW = "0x0000000000000000000000000000000000000001"
		const FrogDAOGovernanceRewardsWnf9Zv5 = await FrogDAOGovernanceRewards.new(addressWN6jvBW, {from: accounts[1]});
		const uintt70WSqB = BigInt("797")
		const addressK4hne5Y = accounts[4]
		const uintjQIZx0 = BigInt("1601")
//		const uint256xMYU9ga = await FrogDAOGovernanceRewardsWnf9Zv5.stake.call(uintt70WSqB, {from: accounts[4]});
//		await FrogDAOGovernanceRewardsWnf9Zv5.checkStart.call({from: accounts[2]});
//		await FrogDAOGovernanceRewardsWnf9Zv5.renounceDevAddr.call({from: accounts[3]});
//		const addressXV2HE4U = await FrogDAOGovernanceRewardsWnf9Zv5.updateReward.call(addressK4hne5Y, {from: accounts[4]});
//		const uint256kplogoB = await FrogDAOGovernanceRewardsWnf9Zv5.withdrawDevFund.call(uintjQIZx0, {from: accounts[2]});
//		await FrogDAOGovernanceRewardsWnf9Zv5.exit.call({from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsWnf9Zv5.stake.call(uintt70WSqB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresscfPnJVT = accounts[2]
		const FrogDAOGovernanceRewardsrO80urw = await FrogDAOGovernanceRewards.new(addresscfPnJVT, {from: accounts[1]});
//		await FrogDAOGovernanceRewardsrO80urw.exit.call({from: accounts[1]});
//		const uint256oMzkgKk = await FrogDAOGovernanceRewardsrO80urw.rewardPerToken.call({from: accounts[1]});
//		await FrogDAOGovernanceRewardsrO80urw.checkStart.call({from: accounts[3]});
//		await FrogDAOGovernanceRewardsrO80urw.renounceDevAddr.call({from: accounts[0]});
//		const uint256UMcMvf = await FrogDAOGovernanceRewardsrO80urw.rewardPerToken.call({from: accounts[4]});

		await expect(FrogDAOGovernanceRewardsrO80urw.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressRQ6jXF = accounts[3]
		const FrogDAOGovernanceRewardscgP0IpD = await FrogDAOGovernanceRewards.new(addressRQ6jXF, {from: accounts[0]});
		const uintowiTBEh = BigInt("1602")
		const uintxgIgVC9 = BigInt("1881")
		const addressEPEQdJR = "0x0000000000000000000000000000000000000001"
//		const uint256K6k2cDd = await FrogDAOGovernanceRewardscgP0IpD.withdrawDevFund.call(uintowiTBEh, {from: "0x0000000000000000000000000000000000000001"});
//		await FrogDAOGovernanceRewardscgP0IpD.renounceDevAddr.call({from: accounts[3]});
//		const uint256BPDhS7 = await FrogDAOGovernanceRewardscgP0IpD.withdrawDevFund.call(uintxgIgVC9, {from: accounts[2]});
//		const addresspVe2wWX = await FrogDAOGovernanceRewardscgP0IpD.updateReward.call(addressEPEQdJR, {from: accounts[3]});
//		await FrogDAOGovernanceRewardscgP0IpD.checkStart.call({from: accounts[3]});

		await expect(FrogDAOGovernanceRewardscgP0IpD.withdrawDevFund.call(uintowiTBEh, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressr6cg3Jw = accounts[3]
		const FrogDAOGovernanceRewardswsJDWin = await FrogDAOGovernanceRewards.new(addressr6cg3Jw, {from: accounts[4]});
		const addressKGITMF3 = accounts[0]
//		const addressSREAN3 = await FrogDAOGovernanceRewardswsJDWin.updateReward.call(addressKGITMF3, {from: accounts[3]});
//		const uint256nVxt9dX = await FrogDAOGovernanceRewardswsJDWin.rewardPerToken.call({from: accounts[2]});
//		await FrogDAOGovernanceRewardswsJDWin.renounceDevAddr.call({from: accounts[1]});

		await expect(FrogDAOGovernanceRewardswsJDWin.updateReward.call(addressKGITMF3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressbJzQ7ZW = accounts[2]
		const FrogDAOGovernanceRewardsN3FfL45 = await FrogDAOGovernanceRewards.new(addressbJzQ7ZW, {from: accounts[3]});
		const addressCZuELOQ = accounts[1]
		const uintURr3TK9 = BigInt("1475")
		const addressygHM1vQ = accounts[3]
		const addresssG1PfII = accounts[1]
		const uint256ABVTIJk = await FrogDAOGovernanceRewardsN3FfL45.earned.call(addressCZuELOQ, {from: accounts[2]});
		const uint256XHbC0lG = await FrogDAOGovernanceRewardsN3FfL45.lastTimeRewardApplicable.call({from: accounts[2]});
//		const uint256BBQzQ4W = await FrogDAOGovernanceRewardsN3FfL45.notifyRewardAmount.call(uintURr3TK9, {from: accounts[3]});
//		const uint256R1Zdhbg = await FrogDAOGovernanceRewardsN3FfL45.earned.call(addressygHM1vQ, {from: accounts[3]});
//		const uint256eZQS4d7 = await FrogDAOGovernanceRewardsN3FfL45.rewardPerToken.call({from: accounts[4]});
//		const addresshumG2qH = await FrogDAOGovernanceRewardsN3FfL45.transferDevAddr.call(addresssG1PfII, {from: accounts[3]});

		assert.equal(uint256ABVTIJk, BigInt("0"))
		assert.equal(uint256XHbC0lG, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsN3FfL45.notifyRewardAmount.call(uintURr3TK9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressKMNdRI9 = accounts[4]
		const FrogDAOGovernanceRewards6GOBhf = await FrogDAOGovernanceRewards.new(addressKMNdRI9, {from: accounts[1]});
		const addresskaYI09b = accounts[4]
		const uintnBF2mb = BigInt("32")
		const uintmC8b5HY = BigInt("1706")
//		await FrogDAOGovernanceRewards6GOBhf.renounceDevAddr.call({from: accounts[4]});
//		await FrogDAOGovernanceRewards6GOBhf.exit.call({from: accounts[3]});
//		const addressoGKfOCX = await FrogDAOGovernanceRewards6GOBhf.updateReward.call(addresskaYI09b, {from: accounts[5]});
//		const uint256FYKgQXF = await FrogDAOGovernanceRewards6GOBhf.stake.call(uintnBF2mb, {from: accounts[5]});
//		const uint256k91XOXX = await FrogDAOGovernanceRewards6GOBhf.lastTimeRewardApplicable.call({from: accounts[0]});
//		const uint256NCtBzBU = await FrogDAOGovernanceRewards6GOBhf.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint256m2UW3ef = await FrogDAOGovernanceRewards6GOBhf.devFundAvailable.call({from: accounts[4]});
//		const uint256vDp3Mow = await FrogDAOGovernanceRewards6GOBhf.devFundAvailable.call({from: accounts[4]});
//		const uint256T1UNnvc = await FrogDAOGovernanceRewards6GOBhf.notifyRewardAmount.call(uintmC8b5HY, {from: accounts[0]});

		await expect(FrogDAOGovernanceRewards6GOBhf.renounceDevAddr.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressojMR5Et = "0x0000000000000000000000000000000000000001"
		const FrogDAOGovernanceRewardse6VstpL = await FrogDAOGovernanceRewards.new(addressojMR5Et, {from: accounts[0]});
		const uint256PKdS5y = await FrogDAOGovernanceRewardse6VstpL.devFundAvailable.call({from: accounts[3]});
//		await FrogDAOGovernanceRewardse6VstpL.getReward.call({from: accounts[0]});
//		await FrogDAOGovernanceRewardse6VstpL.checkStart.call({from: accounts[1]});
//		await FrogDAOGovernanceRewardse6VstpL.exit.call({from: accounts[2]});

		assert.equal(uint256PKdS5y, BigInt("0"))
		await expect(FrogDAOGovernanceRewardse6VstpL.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressQNJd0G7 = accounts[2]
		const FrogDAOGovernanceRewardsN3FfL45 = await FrogDAOGovernanceRewards.new(addressQNJd0G7, {from: accounts[3]});
		const uintPDjJSFu = BigInt("920")
		const addressDLlr8N8 = accounts[2]
//		const uint2569Qnkz1 = await FrogDAOGovernanceRewardsN3FfL45.notifyRewardAmount.call(uintPDjJSFu, {from: "0x0000000000000000000000000000000000000001"});
//		const addresshumG2qH = await FrogDAOGovernanceRewardsN3FfL45.transferDevAddr.call(addressDLlr8N8, {from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsN3FfL45.notifyRewardAmount.call(uintPDjJSFu, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressbvBBs1P = accounts[2]
		const FrogDAOGovernanceRewardsN3FfL45 = await FrogDAOGovernanceRewards.new(addressbvBBs1P, {from: accounts[3]});
		const addressIUlR7BZ = accounts[3]
		const uintUdBRafC = BigInt("2040")
		const uint256ABVTIJk = await FrogDAOGovernanceRewardsN3FfL45.earned.call(addressIUlR7BZ, {from: accounts[2]});
//		const uint256WYk6TiM = await FrogDAOGovernanceRewardsN3FfL45.withdrawDevFund.call(uintUdBRafC, {from: accounts[2]});

		assert.equal(uint256ABVTIJk, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsN3FfL45.withdrawDevFund.call(uintUdBRafC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})