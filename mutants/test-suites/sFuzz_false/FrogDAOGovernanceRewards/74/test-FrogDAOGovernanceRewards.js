const FrogDAOGovernanceRewards = artifacts.require("FrogDAOGovernanceRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAOGovernanceRewards', (accounts) => {
	it('test for FrogDAOGovernanceRewards', async () => {
		const addressD9m0DPe = accounts[0]
		const FrogDAOGovernanceRewardspMnwb7E = await FrogDAOGovernanceRewards.new(addressD9m0DPe, {from: accounts[3]});
		const addressPLa0MS = accounts[2]
		const uint256sP6zUsb = await FrogDAOGovernanceRewardspMnwb7E.rewardPerToken.call({from: accounts[4]});
//		const addressFDqjbrV = await FrogDAOGovernanceRewardspMnwb7E.transferDevAddr.call(addressPLa0MS, {from: accounts[1]});
//		await FrogDAOGovernanceRewardspMnwb7E.getReward.call({from: accounts[4]});
//		await FrogDAOGovernanceRewardspMnwb7E.exit.call({from: accounts[4]});
//		const uint256RHRWNrM = await FrogDAOGovernanceRewardspMnwb7E.lastTimeRewardApplicable.call({from: accounts[4]});

		assert.equal(uint256sP6zUsb, BigInt("0"))
		await expect(FrogDAOGovernanceRewardspMnwb7E.transferDevAddr.call(addressPLa0MS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresskQgU7fW = accounts[0]
		const FrogDAOGovernanceRewardseMravq = await FrogDAOGovernanceRewards.new(addresskQgU7fW, {from: accounts[1]});
		const addressfOzcDhM = accounts[2]
//		await FrogDAOGovernanceRewardseMravq.exit.call({from: accounts[5]});
//		await FrogDAOGovernanceRewardseMravq.checkStart.call({from: accounts[1]});
//		const uint256Bp6GgUS = await FrogDAOGovernanceRewardseMravq.earned.call(addressfOzcDhM, {from: accounts[3]});

		await expect(FrogDAOGovernanceRewardseMravq.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressf18bRm4 = accounts[4]
		const FrogDAOGovernanceRewardshLj1Ymh = await FrogDAOGovernanceRewards.new(addressf18bRm4, {from: accounts[3]});
		const uintkbYt9vN = BigInt("1520")
//		await FrogDAOGovernanceRewardshLj1Ymh.renounceDevAddr.call({from: accounts[3]});
//		const uint256mzwx2F = await FrogDAOGovernanceRewardshLj1Ymh.withdrawDevFund.call(uintkbYt9vN, {from: accounts[5]});

		await expect(FrogDAOGovernanceRewardshLj1Ymh.renounceDevAddr.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresscZ5m3u = accounts[1]
		const FrogDAOGovernanceRewardsEB1YrHn = await FrogDAOGovernanceRewards.new(addresscZ5m3u, {from: accounts[3]});
		const uintSeJ8fi7 = BigInt("1352")
//		await FrogDAOGovernanceRewardsEB1YrHn.checkStart.call({from: accounts[3]});
//		await FrogDAOGovernanceRewardsEB1YrHn.getReward.call({from: accounts[0]});
//		await FrogDAOGovernanceRewardsEB1YrHn.exit.call({from: accounts[3]});
//		const uint256gQBCN3e = await FrogDAOGovernanceRewardsEB1YrHn.withdraw.call(uintSeJ8fi7, {from: accounts[2]});

		await expect(FrogDAOGovernanceRewardsEB1YrHn.checkStart.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressryNjc21 = accounts[4]
		const FrogDAOGovernanceRewardsWHmwbXn = await FrogDAOGovernanceRewards.new(addressryNjc21, {from: accounts[5]});
		const uintsgmo3sh = BigInt("937")
		const uintdwyZD8 = BigInt("176")
		const uintcKCNbST = BigInt("427")
		const addressGMlbWvZ = accounts[1]
//		const uint256uLY6hqU = await FrogDAOGovernanceRewardsWHmwbXn.withdraw.call(uintsgmo3sh, {from: accounts[2]});
//		const uint256kmQVJxM = await FrogDAOGovernanceRewardsWHmwbXn.notifyRewardAmount.call(uintdwyZD8, {from: accounts[4]});
//		const uint256dJrDKcU = await FrogDAOGovernanceRewardsWHmwbXn.devFundAvailable.call({from: accounts[2]});
//		const uint256omCAVeI = await FrogDAOGovernanceRewardsWHmwbXn.notifyRewardAmount.call(uintcKCNbST, {from: accounts[4]});
//		await FrogDAOGovernanceRewardsWHmwbXn.checkhalve.call({from: accounts[0]});
//		const addressGDAyKYs = await FrogDAOGovernanceRewardsWHmwbXn.transferDevAddr.call(addressGMlbWvZ, {from: accounts[1]});

		await expect(FrogDAOGovernanceRewardsWHmwbXn.withdraw.call(uintsgmo3sh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresscBNaCsF = accounts[2]
		const FrogDAOGovernanceRewardsoT44do = await FrogDAOGovernanceRewards.new(addresscBNaCsF, {from: accounts[4]});
		const uint256nrfkxax = await FrogDAOGovernanceRewardsoT44do.devFundAvailable.call({from: accounts[1]});
//		await FrogDAOGovernanceRewardsoT44do.checkStart.call({from: accounts[3]});

		assert.equal(uint256nrfkxax, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsoT44do.checkStart.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresstl2e3K3 = accounts[3]
		const FrogDAOGovernanceRewards3CeGJ4 = await FrogDAOGovernanceRewards.new(addresstl2e3K3, {from: "0x0000000000000000000000000000000000000001"});
		const uintNgRhXmN = BigInt("371")
		await FrogDAOGovernanceRewards3CeGJ4.getReward.call({from: accounts[1]});
		await FrogDAOGovernanceRewards3CeGJ4.getReward.call({from: accounts[0]});
		const uint256cDAzLrX = await FrogDAOGovernanceRewards3CeGJ4.notifyRewardAmount.call(uintNgRhXmN, {from: accounts[2]});
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressvlGlPWh = accounts[4]
		const FrogDAOGovernanceRewardshLj1Ymh = await FrogDAOGovernanceRewards.new(addressvlGlPWh, {from: accounts[3]});
		const uintTRcbepP = BigInt("1224")
		const addressV4W2yBl = accounts[4]
//		const uint2562nHhOT = await FrogDAOGovernanceRewardshLj1Ymh.stake.call(uintTRcbepP, {from: accounts[1]});
//		const addressSH7UIC = await FrogDAOGovernanceRewardshLj1Ymh.updateReward.call(addressV4W2yBl, {from: accounts[3]});
//		await FrogDAOGovernanceRewardshLj1Ymh.renounceDevAddr.call({from: accounts[3]});

		await expect(FrogDAOGovernanceRewardshLj1Ymh.stake.call(uintTRcbepP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressb1pQz2t = accounts[0]
		const FrogDAOGovernanceRewardsBnrfmc5 = await FrogDAOGovernanceRewards.new(addressb1pQz2t, {from: accounts[2]});
		const uintiIXH4l3 = BigInt("770")
		const addressFXkQNFa = accounts[2]
//		const uint256lvbEmUQ = await FrogDAOGovernanceRewardsBnrfmc5.notifyRewardAmount.call(uintiIXH4l3, {from: accounts[3]});
//		const addresscTTSHEw = await FrogDAOGovernanceRewardsBnrfmc5.transferDevAddr.call(addressFXkQNFa, {from: accounts[3]});
//		await FrogDAOGovernanceRewardsBnrfmc5.checkhalve.call({from: accounts[0]});
//		await FrogDAOGovernanceRewardsBnrfmc5.getReward.call({from: accounts[1]});
//		const uint256WTbCgZM = await FrogDAOGovernanceRewardsBnrfmc5.rewardPerToken.call({from: accounts[5]});

		await expect(FrogDAOGovernanceRewardsBnrfmc5.notifyRewardAmount.call(uintiIXH4l3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressOg6X3qa = accounts[0]
		const FrogDAOGovernanceRewardseMravq = await FrogDAOGovernanceRewards.new(addressOg6X3qa, {from: accounts[1]});
		const uintOTpOfUf = BigInt("790")
		const addressUw5Kxx6 = accounts[5]
//		const uint256zdZKKH = await FrogDAOGovernanceRewardseMravq.withdrawDevFund.call(uintOTpOfUf, {from: accounts[2]});
//		const uint256Bp6GgUS = await FrogDAOGovernanceRewardseMravq.earned.call(addressUw5Kxx6, {from: accounts[3]});

		await expect(FrogDAOGovernanceRewardseMravq.withdrawDevFund.call(uintOTpOfUf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresssvGRzHH = accounts[4]
		const FrogDAOGovernanceRewardsw3uBW5y = await FrogDAOGovernanceRewards.new(addresssvGRzHH, {from: accounts[5]});
		const uintgElnH7I = BigInt("1133")
		const addresscpD9bm4 = accounts[1]
		const uintfIgaoD = BigInt("872")
		const uint256x0iLpyY = await FrogDAOGovernanceRewardsw3uBW5y.rewardPerToken.call({from: accounts[2]});
//		const uint256uycZKY2 = await FrogDAOGovernanceRewardsw3uBW5y.notifyRewardAmount.call(uintgElnH7I, {from: accounts[5]});
//		const addressY7dRXHZ = await FrogDAOGovernanceRewardsw3uBW5y.transferDevAddr.call(addresscpD9bm4, {from: accounts[2]});
//		const uint256hFM4XjK = await FrogDAOGovernanceRewardsw3uBW5y.notifyRewardAmount.call(uintfIgaoD, {from: accounts[2]});

		assert.equal(uint256x0iLpyY, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsw3uBW5y.notifyRewardAmount.call(uintgElnH7I, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressqiwkV8u = accounts[0]
		const FrogDAOGovernanceRewardseMravq = await FrogDAOGovernanceRewards.new(addressqiwkV8u, {from: accounts[1]});
		const addressMMNOQJL = accounts[5]
		const uintNU12mec = BigInt("1085")
		const uint256Bp6GgUS = await FrogDAOGovernanceRewardseMravq.earned.call(addressMMNOQJL, {from: accounts[3]});
//		const uint256eUwC4r4 = await FrogDAOGovernanceRewardseMravq.withdrawDevFund.call(uintNU12mec, {from: accounts[0]});
//		await FrogDAOGovernanceRewardseMravq.exit.call({from: accounts[1]});

		assert.equal(uint256Bp6GgUS, BigInt("0"))
		await expect(FrogDAOGovernanceRewardseMravq.withdrawDevFund.call(uintNU12mec, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})