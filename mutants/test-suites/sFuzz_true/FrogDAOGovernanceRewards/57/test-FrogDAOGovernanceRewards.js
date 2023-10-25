const FrogDAOGovernanceRewards = artifacts.require("FrogDAOGovernanceRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAOGovernanceRewards', (accounts) => {
	it('test for FrogDAOGovernanceRewards', async () => {
		const addressmbMta6l = accounts[0]
		const FrogDAOGovernanceRewardsZMRsQWh = await FrogDAOGovernanceRewards.new(addressmbMta6l, {from: accounts[2]});
		const addressYXISO3q = accounts[2]
		const uint256PJKziiG = await FrogDAOGovernanceRewardsZMRsQWh.devFundAvailable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256geVP27u = await FrogDAOGovernanceRewardsZMRsQWh.earned.call(addressYXISO3q, {from: accounts[4]});
		const uint256DOY4Ty = await FrogDAOGovernanceRewardsZMRsQWh.lastTimeRewardApplicable.call({from: accounts[4]});
//		await FrogDAOGovernanceRewardsZMRsQWh.checkStart.call({from: accounts[0]});

		assert.equal(uint256DOY4Ty, BigInt("0"))
		assert.equal(uint256PJKziiG, BigInt("0"))
		assert.equal(uint256geVP27u, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsZMRsQWh.checkStart.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressQSXvLCn = accounts[3]
		const FrogDAOGovernanceRewardsMsepEsj = await FrogDAOGovernanceRewards.new(addressQSXvLCn, {from: accounts[2]});
		const uintPj2K3af = BigInt("892")
		const addressEnJ1Wh = accounts[2]
		const addressakxdktN = accounts[5]
		const addressmlcL8Or = accounts[5]
//		const uint256iJdlABE = await FrogDAOGovernanceRewardsMsepEsj.withdraw.call(uintPj2K3af, {from: accounts[3]});
//		const addressUMM5Pa = await FrogDAOGovernanceRewardsMsepEsj.updateReward.call(addressEnJ1Wh, {from: accounts[4]});
//		const address2klwal = await FrogDAOGovernanceRewardsMsepEsj.transferDevAddr.call(addressakxdktN, {from: accounts[1]});
//		const addressEoatkhF = await FrogDAOGovernanceRewardsMsepEsj.updateReward.call(addressmlcL8Or, {from: accounts[4]});
//		await FrogDAOGovernanceRewardsMsepEsj.renounceDevAddr.call({from: accounts[5]});

		await expect(FrogDAOGovernanceRewardsMsepEsj.withdraw.call(uintPj2K3af, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressB1GHRn6 = accounts[3]
		const FrogDAOGovernanceRewardsF3VI99F = await FrogDAOGovernanceRewards.new(addressB1GHRn6, {from: "0x0000000000000000000000000000000000000001"});
		const uintVfWyts = BigInt("2020")
		const uint256s2wpZll = await FrogDAOGovernanceRewardsF3VI99F.lastTimeRewardApplicable.call({from: accounts[3]});
		await FrogDAOGovernanceRewardsF3VI99F.checkStart.call({from: accounts[5]});
		await FrogDAOGovernanceRewardsF3VI99F.renounceDevAddr.call({from: accounts[0]});
		const uint256KYB9wF0 = await FrogDAOGovernanceRewardsF3VI99F.withdraw.call(uintVfWyts, {from: accounts[2]});
		await FrogDAOGovernanceRewardsF3VI99F.checkhalve.call({from: accounts[4]});
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressdpIEVlp = accounts[0]
		const FrogDAOGovernanceRewardsxQa6IJc = await FrogDAOGovernanceRewards.new(addressdpIEVlp, {from: accounts[0]});
//		await FrogDAOGovernanceRewardsxQa6IJc.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		await FrogDAOGovernanceRewardsxQa6IJc.renounceDevAddr.call({from: accounts[1]});
//		await FrogDAOGovernanceRewardsxQa6IJc.checkStart.call({from: accounts[2]});
//		await FrogDAOGovernanceRewardsxQa6IJc.getReward.call({from: accounts[2]});
//		await FrogDAOGovernanceRewardsxQa6IJc.checkStart.call({from: accounts[0]});

		await expect(FrogDAOGovernanceRewardsxQa6IJc.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressO1p2pqV = accounts[5]
		const FrogDAOGovernanceRewardsQnGjArZ = await FrogDAOGovernanceRewards.new(addressO1p2pqV, {from: accounts[2]});
		const uintPsuKSQe = BigInt("1724")
		const uint256Cwvy2gP = await FrogDAOGovernanceRewardsQnGjArZ.rewardPerToken.call({from: accounts[0]});
//		const uint256CxTjZM9 = await FrogDAOGovernanceRewardsQnGjArZ.notifyRewardAmount.call(uintPsuKSQe, {from: accounts[4]});

		assert.equal(uint256Cwvy2gP, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsQnGjArZ.notifyRewardAmount.call(uintPsuKSQe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressRsgHvG9 = accounts[3]
		const FrogDAOGovernanceRewardsx0boc8T = await FrogDAOGovernanceRewards.new(addressRsgHvG9, {from: accounts[3]});
		const addressAHNUcJJ = accounts[4]
		const uinttHTY5XT = BigInt("2039")
		const uintRha79o = BigInt("1319")
//		const addressRMYoHfg = await FrogDAOGovernanceRewardsx0boc8T.transferDevAddr.call(addressAHNUcJJ, {from: accounts[2]});
//		const uint256YxFTv5 = await FrogDAOGovernanceRewardsx0boc8T.withdraw.call(uinttHTY5XT, {from: accounts[3]});
//		const uint256VncoC0B = await FrogDAOGovernanceRewardsx0boc8T.devFundAvailable.call({from: accounts[3]});
//		const uint256Akjw0yt = await FrogDAOGovernanceRewardsx0boc8T.stake.call(uintRha79o, {from: accounts[5]});

		await expect(FrogDAOGovernanceRewardsx0boc8T.transferDevAddr.call(addressAHNUcJJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressNjx0sLf = accounts[1]
		const FrogDAOGovernanceRewards8PiaZR = await FrogDAOGovernanceRewards.new(addressNjx0sLf, {from: accounts[0]});
		const uintJgwvxDz = BigInt("902")
		const uintypBzPU = BigInt("307")
		const uinthp9kYHA = BigInt("871")
		const uintUdHsNvG = BigInt("481")
//		const uint256w2VU6Be = await FrogDAOGovernanceRewards8PiaZR.withdrawDevFund.call(uintJgwvxDz, {from: accounts[3]});
//		const uint256G16LLwf = await FrogDAOGovernanceRewards8PiaZR.stake.call(uintypBzPU, {from: accounts[1]});
//		const uint2564okXcg = await FrogDAOGovernanceRewards8PiaZR.withdraw.call(uinthp9kYHA, {from: accounts[3]});
//		const uint25628jx2B = await FrogDAOGovernanceRewards8PiaZR.withdraw.call(uintUdHsNvG, {from: accounts[2]});

		await expect(FrogDAOGovernanceRewards8PiaZR.withdrawDevFund.call(uintJgwvxDz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressHXvy1RX = accounts[3]
		const FrogDAOGovernanceRewardsx0boc8T = await FrogDAOGovernanceRewards.new(addressHXvy1RX, {from: accounts[3]});
		const addressccJI3CO = accounts[5]
		const uinth9KPyrn = BigInt("1319")
		const uint256JFabtOK = await FrogDAOGovernanceRewardsx0boc8T.lastTimeRewardApplicable.call({from: accounts[3]});
//		await FrogDAOGovernanceRewardsx0boc8T.getReward.call({from: accounts[3]});
//		const addressRMYoHfg = await FrogDAOGovernanceRewardsx0boc8T.transferDevAddr.call(addressccJI3CO, {from: accounts[2]});
//		const uint256VncoC0B = await FrogDAOGovernanceRewardsx0boc8T.devFundAvailable.call({from: accounts[3]});
//		await FrogDAOGovernanceRewardsx0boc8T.checkhalve.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256Akjw0yt = await FrogDAOGovernanceRewardsx0boc8T.stake.call(uinth9KPyrn, {from: accounts[5]});

		assert.equal(uint256JFabtOK, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsx0boc8T.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressDIvgGa = accounts[2]
		const FrogDAOGovernanceRewardsHhM79pW = await FrogDAOGovernanceRewards.new(addressDIvgGa, {from: accounts[5]});
		const addressQQCVid5 = accounts[2]
		const addressEf143qe = accounts[3]
//		await FrogDAOGovernanceRewardsHhM79pW.renounceDevAddr.call({from: accounts[4]});
//		const uint256LKegq85 = await FrogDAOGovernanceRewardsHhM79pW.earned.call(addressQQCVid5, {from: accounts[3]});
//		await FrogDAOGovernanceRewardsHhM79pW.checkhalve.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256AVvxo7F = await FrogDAOGovernanceRewardsHhM79pW.earned.call(addressEf143qe, {from: accounts[0]});
//		const uint256HhBW37d = await FrogDAOGovernanceRewardsHhM79pW.rewardPerToken.call({from: accounts[3]});
//		const uint256CTTJzFH = await FrogDAOGovernanceRewardsHhM79pW.rewardPerToken.call({from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsHhM79pW.renounceDevAddr.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressf0NDl0z = accounts[5]
		const FrogDAOGovernanceRewardsQnGjArZ = await FrogDAOGovernanceRewards.new(addressf0NDl0z, {from: accounts[2]});
		const uintSHEKvG = BigInt("478")
		const uintVPbqZA6 = BigInt("1718")
//		const uint256CBIyIPu = await FrogDAOGovernanceRewardsQnGjArZ.notifyRewardAmount.call(uintSHEKvG, {from: accounts[2]});
//		const uint256CxTjZM9 = await FrogDAOGovernanceRewardsQnGjArZ.notifyRewardAmount.call(uintVPbqZA6, {from: accounts[4]});
//		await FrogDAOGovernanceRewardsQnGjArZ.getReward.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(FrogDAOGovernanceRewardsQnGjArZ.notifyRewardAmount.call(uintSHEKvG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressWuSgNVG = accounts[1]
		const FrogDAOGovernanceRewards8PiaZR = await FrogDAOGovernanceRewards.new(addressWuSgNVG, {from: accounts[0]});
		const addressrpyFvCN = accounts[2]
		const uinthhkxKBo = BigInt("273")
		const addressFvigqe = await FrogDAOGovernanceRewards8PiaZR.transferDevAddr.call(addressrpyFvCN, {from: accounts[1]});
//		const uint256G16LLwf = await FrogDAOGovernanceRewards8PiaZR.stake.call(uinthhkxKBo, {from: accounts[1]});

		await expect(FrogDAOGovernanceRewards8PiaZR.stake.call(uinthhkxKBo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresszPy8V4S = accounts[4]
		const FrogDAOGovernanceRewardsV8TMoL = await FrogDAOGovernanceRewards.new(addresszPy8V4S, {from: accounts[0]});
		const uintxvcaph = BigInt("1314")
//		const uint256HaUMfIA = await FrogDAOGovernanceRewardsV8TMoL.withdrawDevFund.call(uintxvcaph, {from: accounts[4]});
//		const uint256YHfMYOm = await FrogDAOGovernanceRewardsV8TMoL.lastTimeRewardApplicable.call({from: accounts[1]});
//		const uint256d794KtP = await FrogDAOGovernanceRewardsV8TMoL.rewardPerToken.call({from: accounts[1]});

		await expect(FrogDAOGovernanceRewardsV8TMoL.withdrawDevFund.call(uintxvcaph, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})