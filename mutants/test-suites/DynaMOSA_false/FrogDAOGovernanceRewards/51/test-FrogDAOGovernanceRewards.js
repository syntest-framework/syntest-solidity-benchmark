const FrogDAOGovernanceRewards = artifacts.require("FrogDAOGovernanceRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAOGovernanceRewards', (accounts) => {
	it('test for FrogDAOGovernanceRewards', async () => {
		const addressTwR6Iwc = "0x0000000000000000000000000000000000000001"
		const FrogDAOGovernanceRewardshYQwuBb = await FrogDAOGovernanceRewards.new(addressTwR6Iwc, {from: accounts[1]});
		const uintdh6EFJk = BigInt("681")
//		await FrogDAOGovernanceRewardshYQwuBb.checkStart.call({from: accounts[5]});
//		const uint256ijpP9wy = await FrogDAOGovernanceRewardshYQwuBb.rewardPerToken.call({from: accounts[1]});
//		const uint256jH8MJ4U = await FrogDAOGovernanceRewardshYQwuBb.withdraw.call(uintdh6EFJk, {from: accounts[0]});
//		await FrogDAOGovernanceRewardshYQwuBb.checkStart.call({from: accounts[2]});

		await expect(FrogDAOGovernanceRewardshYQwuBb.checkStart.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressUSDrYaO = accounts[0]
		const FrogDAOGovernanceRewardsSwFEuXH = await FrogDAOGovernanceRewards.new(addressUSDrYaO, {from: accounts[2]});
		const uintGlyMuSP = BigInt("689")
		const addressbj1V85H = accounts[4]
//		await FrogDAOGovernanceRewardsSwFEuXH.renounceDevAddr.call({from: accounts[3]});
//		await FrogDAOGovernanceRewardsSwFEuXH.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256lRATil0 = await FrogDAOGovernanceRewardsSwFEuXH.withdrawDevFund.call(uintGlyMuSP, {from: accounts[3]});
//		const uint256HVUbL72 = await FrogDAOGovernanceRewardsSwFEuXH.earned.call(addressbj1V85H, {from: accounts[1]});

		await expect(FrogDAOGovernanceRewardsSwFEuXH.renounceDevAddr.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressO1SbXBA = accounts[0]
		const FrogDAOGovernanceRewardsJhyTTNZ = await FrogDAOGovernanceRewards.new(addressO1SbXBA, {from: accounts[3]});
		const uintzaseuOG = BigInt("622")
		const uintMqsXRN = BigInt("484")
//		const uint256VpPwLs6 = await FrogDAOGovernanceRewardsJhyTTNZ.stake.call(uintzaseuOG, {from: accounts[3]});
//		await FrogDAOGovernanceRewardsJhyTTNZ.getReward.call({from: accounts[0]});
//		await FrogDAOGovernanceRewardsJhyTTNZ.exit.call({from: accounts[4]});
//		const uint256w7kMF8F = await FrogDAOGovernanceRewardsJhyTTNZ.stake.call(uintMqsXRN, {from: accounts[0]});
//		await FrogDAOGovernanceRewardsJhyTTNZ.checkhalve.call({from: accounts[4]});

		await expect(FrogDAOGovernanceRewardsJhyTTNZ.stake.call(uintzaseuOG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressnxHdkNq = accounts[0]
		const FrogDAOGovernanceRewardskmKlAMx = await FrogDAOGovernanceRewards.new(addressnxHdkNq, {from: accounts[3]});
		const addressLmsT1yS = accounts[4]
		const uintNTSsgB8 = BigInt("1781")
		const addressx5tpvAH = accounts[3]
		const addressia3Kx5J = accounts[0]
		const uint256ltUvi54 = await FrogDAOGovernanceRewardskmKlAMx.devFundAvailable.call({from: accounts[2]});
//		const addressXtr5xH = await FrogDAOGovernanceRewardskmKlAMx.updateReward.call(addressLmsT1yS, {from: accounts[3]});
//		const uint256deM1vZ = await FrogDAOGovernanceRewardskmKlAMx.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint256bZiI1fk = await FrogDAOGovernanceRewardskmKlAMx.withdrawDevFund.call(uintNTSsgB8, {from: accounts[0]});
//		const addresswlktTN = await FrogDAOGovernanceRewardskmKlAMx.transferDevAddr.call(addressx5tpvAH, {from: accounts[0]});
//		const uint256kDrEKmW = await FrogDAOGovernanceRewardskmKlAMx.earned.call(addressia3Kx5J, {from: accounts[3]});

		assert.equal(uint256ltUvi54, BigInt("0"))
		await expect(FrogDAOGovernanceRewardskmKlAMx.updateReward.call(addressLmsT1yS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressgIFBRgf = "0x0000000000000000000000000000000000000001"
		const FrogDAOGovernanceRewardsBrsKxcF = await FrogDAOGovernanceRewards.new(addressgIFBRgf, {from: accounts[5]});
		const uintWwD4jRc = BigInt("1458")
		const uintw6UncBK = BigInt("1346")
		const uinttz9vKvf = BigInt("976")
		const uintsV7fgtV = BigInt("62")
//		const uint256F8W6gdv = await FrogDAOGovernanceRewardsBrsKxcF.notifyRewardAmount.call(uintWwD4jRc, {from: accounts[1]});
//		const uint256NbcpGMu = await FrogDAOGovernanceRewardsBrsKxcF.notifyRewardAmount.call(uintw6UncBK, {from: accounts[0]});
//		const uint256etVSIaU = await FrogDAOGovernanceRewardsBrsKxcF.stake.call(uinttz9vKvf, {from: accounts[4]});
//		const uint256sfqdwS3 = await FrogDAOGovernanceRewardsBrsKxcF.stake.call(uintsV7fgtV, {from: accounts[5]});

		await expect(FrogDAOGovernanceRewardsBrsKxcF.notifyRewardAmount.call(uintWwD4jRc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressE1pDT2w = accounts[0]
		const FrogDAOGovernanceRewardskmKlAMx = await FrogDAOGovernanceRewards.new(addressE1pDT2w, {from: accounts[3]});
		const addresspHM186N = accounts[4]
		const uintDusG1Z0 = BigInt("1781")
		const addresscwb8NDS = accounts[3]
		const addressjN3Rn4l = accounts[0]
//		await FrogDAOGovernanceRewardskmKlAMx.exit.call({from: accounts[0]});
//		const uint256ltUvi54 = await FrogDAOGovernanceRewardskmKlAMx.devFundAvailable.call({from: accounts[2]});
//		const addressXtr5xH = await FrogDAOGovernanceRewardskmKlAMx.updateReward.call(addresspHM186N, {from: accounts[3]});
//		const uint256bZiI1fk = await FrogDAOGovernanceRewardskmKlAMx.withdrawDevFund.call(uintDusG1Z0, {from: accounts[0]});
//		const addresswlktTN = await FrogDAOGovernanceRewardskmKlAMx.transferDevAddr.call(addresscwb8NDS, {from: accounts[0]});
//		await FrogDAOGovernanceRewardskmKlAMx.renounceDevAddr.call({from: accounts[4]});
//		const uint256kDrEKmW = await FrogDAOGovernanceRewardskmKlAMx.earned.call(addressjN3Rn4l, {from: accounts[3]});
//		await FrogDAOGovernanceRewardskmKlAMx.exit.call({from: accounts[3]});

		await expect(FrogDAOGovernanceRewardskmKlAMx.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressYfzlNV5 = "0x0000000000000000000000000000000000000001"
		const FrogDAOGovernanceRewardsBrsKxcF = await FrogDAOGovernanceRewards.new(addressYfzlNV5, {from: accounts[5]});
		const uintlCBi6hE = BigInt("1829")
//		const uint256ymC7RVA = await FrogDAOGovernanceRewardsBrsKxcF.withdraw.call(uintlCBi6hE, {from: accounts[3]});
//		await FrogDAOGovernanceRewardsBrsKxcF.getReward.call({from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsBrsKxcF.withdraw.call(uintlCBi6hE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressvRx4d7Z = "0x0000000000000000000000000000000000000001"
		const FrogDAOGovernanceRewardsBrsKxcF = await FrogDAOGovernanceRewards.new(addressvRx4d7Z, {from: accounts[5]});
		const uintPH9TxIV = BigInt("259")
		const addressEaJ8ZQG = accounts[2]
		const uintV82UwX = BigInt("1346")
//		const uint256Lh59jU1 = await FrogDAOGovernanceRewardsBrsKxcF.withdrawDevFund.call(uintPH9TxIV, {from: accounts[1]});
//		await FrogDAOGovernanceRewardsBrsKxcF.getReward.call({from: accounts[3]});
//		const uint256am1lKyp = await FrogDAOGovernanceRewardsBrsKxcF.earned.call(addressEaJ8ZQG, {from: accounts[4]});
//		const uint256NbcpGMu = await FrogDAOGovernanceRewardsBrsKxcF.notifyRewardAmount.call(uintV82UwX, {from: accounts[0]});

		await expect(FrogDAOGovernanceRewardsBrsKxcF.withdrawDevFund.call(uintPH9TxIV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressVlB6A7n = "0x0000000000000000000000000000000000000001"
		const FrogDAOGovernanceRewardsBrsKxcF = await FrogDAOGovernanceRewards.new(addressVlB6A7n, {from: accounts[5]});
		const addressvLF6VRH = accounts[4]
		const uintFIbUgQE = BigInt("1340")
//		const addressrf861r = await FrogDAOGovernanceRewardsBrsKxcF.transferDevAddr.call(addressvLF6VRH, {from: accounts[4]});
//		const uint256xtaylcY = await FrogDAOGovernanceRewardsBrsKxcF.devFundAvailable.call({from: accounts[3]});
//		const uint256NbcpGMu = await FrogDAOGovernanceRewardsBrsKxcF.notifyRewardAmount.call(uintFIbUgQE, {from: accounts[0]});

		await expect(FrogDAOGovernanceRewardsBrsKxcF.transferDevAddr.call(addressvLF6VRH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressnYgUwfj = "0x0000000000000000000000000000000000000001"
		const FrogDAOGovernanceRewardsBrsKxcF = await FrogDAOGovernanceRewards.new(addressnYgUwfj, {from: accounts[5]});
		const uintkO2zK9D = BigInt("312")
		const uintdFGbs2o = BigInt("1346")
//		const uint256fMTNCA1 = await FrogDAOGovernanceRewardsBrsKxcF.notifyRewardAmount.call(uintkO2zK9D, {from: accounts[5]});
//		await FrogDAOGovernanceRewardsBrsKxcF.getReward.call({from: accounts[3]});
//		const uint256NbcpGMu = await FrogDAOGovernanceRewardsBrsKxcF.notifyRewardAmount.call(uintdFGbs2o, {from: accounts[0]});

		await expect(FrogDAOGovernanceRewardsBrsKxcF.notifyRewardAmount.call(uintkO2zK9D, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressTalTlve = accounts[2]
		const FrogDAOGovernanceRewardsjSjoiK = await FrogDAOGovernanceRewards.new(addressTalTlve, {from: "0x0000000000000000000000000000000000000001"});
		const uintVC5tGf = BigInt("1924")
		await FrogDAOGovernanceRewardsjSjoiK.checkhalve.call({from: "0x0000000000000000000000000000000000000001"});
		await FrogDAOGovernanceRewardsjSjoiK.checkStart.call({from: accounts[2]});
		const uint256smAcKGK = await FrogDAOGovernanceRewardsjSjoiK.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256lyn22DA = await FrogDAOGovernanceRewardsjSjoiK.stake.call(uintVC5tGf, {from: accounts[3]});
		await FrogDAOGovernanceRewardsjSjoiK.renounceDevAddr.call({from: accounts[1]});
		await FrogDAOGovernanceRewardsjSjoiK.exit.call({from: accounts[2]});
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresst32qOfK = accounts[4]
		const FrogDAOGovernanceRewardsrDqgZpu = await FrogDAOGovernanceRewards.new(addresst32qOfK, {from: accounts[2]});
		const uintjXUhrA = BigInt("308")
		const addressAByHZrw = accounts[3]
//		const uint256acTBhgH = await FrogDAOGovernanceRewardsrDqgZpu.withdrawDevFund.call(uintjXUhrA, {from: accounts[4]});
//		const addresseBSWvLb = await FrogDAOGovernanceRewardsrDqgZpu.transferDevAddr.call(addressAByHZrw, {from: accounts[0]});
//		const uint256gKUCrNW = await FrogDAOGovernanceRewardsrDqgZpu.rewardPerToken.call({from: accounts[4]});

		await expect(FrogDAOGovernanceRewardsrDqgZpu.withdrawDevFund.call(uintjXUhrA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})