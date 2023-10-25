const FrogDAOGovernanceRewards = artifacts.require("FrogDAOGovernanceRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAOGovernanceRewards', (accounts) => {
	it('test for FrogDAOGovernanceRewards', async () => {
		const addressIJncXAI = accounts[4]
		const FrogDAOGovernanceRewardsvRQhlSK = await FrogDAOGovernanceRewards.new(addressIJncXAI, {from: "0x0000000000000000000000000000000000000001"});
		await FrogDAOGovernanceRewardsvRQhlSK.checkhalve.call({from: accounts[1]});
		await FrogDAOGovernanceRewardsvRQhlSK.checkStart.call({from: accounts[0]});
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressVTzGpF4 = accounts[4]
		const FrogDAOGovernanceRewardsv3vjAKb = await FrogDAOGovernanceRewards.new(addressVTzGpF4, {from: accounts[4]});
		const uint256kwALGOR = await FrogDAOGovernanceRewardsv3vjAKb.rewardPerToken.call({from: accounts[4]});
		const uint256NDHcmPH = await FrogDAOGovernanceRewardsv3vjAKb.devFundAvailable.call({from: accounts[1]});
		const uint256fH5U4rE = await FrogDAOGovernanceRewardsv3vjAKb.devFundAvailable.call({from: accounts[2]});

		assert.equal(uint256NDHcmPH, BigInt("0"))
		assert.equal(uint256fH5U4rE, BigInt("0"))
		assert.equal(uint256kwALGOR, BigInt("0"))
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressdbevOZG = accounts[3]
		const FrogDAOGovernanceRewardsjkblDl3 = await FrogDAOGovernanceRewards.new(addressdbevOZG, {from: accounts[4]});
		const uintGfLVggl = BigInt("594")
		const uinta1ssZmJ = BigInt("1230")
		await FrogDAOGovernanceRewardsjkblDl3.checkhalve.call({from: accounts[5]});
		const uint2561Fv8Ak = await FrogDAOGovernanceRewardsjkblDl3.stake.call(uintGfLVggl, {from: accounts[0]});
		const uint256cviqezA = await FrogDAOGovernanceRewardsjkblDl3.withdrawDevFund.call(uinta1ssZmJ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FrogDAOGovernanceRewardsjkblDl3.checkhalve.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressy3hw24W = "0x0000000000000000000000000000000000000001"
		const FrogDAOGovernanceRewardspgpWyd = await FrogDAOGovernanceRewards.new(addressy3hw24W, {from: accounts[5]});
		const uint42PeRZ = BigInt("685")
		const uint256Qq3O7wF = await FrogDAOGovernanceRewardspgpWyd.rewardPerToken.call({from: accounts[2]});
		await FrogDAOGovernanceRewardspgpWyd.exit.call({from: accounts[2]});
		const uint256klMeGjG = await FrogDAOGovernanceRewardspgpWyd.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256j3H8wka = await FrogDAOGovernanceRewardspgpWyd.withdraw.call(uint42PeRZ, {from: accounts[4]});

		assert.equal(uint256Qq3O7wF, BigInt("0"))
		await expect(FrogDAOGovernanceRewardspgpWyd.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressD66c3RP = accounts[3]
		const FrogDAOGovernanceRewardsqK6u2L8 = await FrogDAOGovernanceRewards.new(addressD66c3RP, {from: accounts[5]});
		const uintjMNgrbk = BigInt("866")
		const addressOkhFTD0 = accounts[3]
		const uint256nLCIXF = await FrogDAOGovernanceRewardsqK6u2L8.withdraw.call(uintjMNgrbk, {from: accounts[1]});
		const uint256kTooduo = await FrogDAOGovernanceRewardsqK6u2L8.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256hdGbc4 = await FrogDAOGovernanceRewardsqK6u2L8.earned.call(addressOkhFTD0, {from: accounts[0]});

		await expect(FrogDAOGovernanceRewardsqK6u2L8.withdraw.call(uintjMNgrbk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresshEL5gBL = accounts[0]
		const FrogDAOGovernanceRewardsGnM9bbk = await FrogDAOGovernanceRewards.new(addresshEL5gBL, {from: accounts[4]});
		const uintKlw5J2n = BigInt("1363")
		const addressOOAwpk9 = accounts[0]
		const uint256Xy7NVgS = await FrogDAOGovernanceRewardsGnM9bbk.stake.call(uintKlw5J2n, {from: accounts[1]});
		await FrogDAOGovernanceRewardsGnM9bbk.checkhalve.call({from: accounts[1]});
		const uint256jIYDC2C = await FrogDAOGovernanceRewardsGnM9bbk.earned.call(addressOOAwpk9, {from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsGnM9bbk.stake.call(uintKlw5J2n, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressqXyhflI = accounts[4]
		const FrogDAOGovernanceRewardspIaSsim = await FrogDAOGovernanceRewards.new(addressqXyhflI, {from: accounts[1]});
		await FrogDAOGovernanceRewardspIaSsim.renounceDevAddr.call({from: accounts[4]});
		await FrogDAOGovernanceRewardspIaSsim.checkhalve.call({from: accounts[1]});
		await FrogDAOGovernanceRewardspIaSsim.exit.call({from: accounts[3]});

		await expect(FrogDAOGovernanceRewardspIaSsim.renounceDevAddr.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresssahiZSj = accounts[4]
		const FrogDAOGovernanceRewardsv3vjAKb = await FrogDAOGovernanceRewards.new(addresssahiZSj, {from: accounts[4]});
		const uintrpLNYF = BigInt("0")
		const uint256kwALGOR = await FrogDAOGovernanceRewardsv3vjAKb.rewardPerToken.call({from: accounts[4]});
		const uint256EDhtbOS = await FrogDAOGovernanceRewardsv3vjAKb.withdrawDevFund.call(uintrpLNYF, {from: accounts[1]});
		await FrogDAOGovernanceRewardsv3vjAKb.checkhalve.call({from: accounts[2]});

		assert.equal(uint256kwALGOR, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsv3vjAKb.withdrawDevFund.call(uintrpLNYF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresshFo6Ai6 = accounts[4]
		const FrogDAOGovernanceRewardsv3vjAKb = await FrogDAOGovernanceRewards.new(addresshFo6Ai6, {from: accounts[4]});
		const addresslYdK23t = accounts[2]
		const uintjCegRGs = BigInt("15")
		const addressoHLObIs = await FrogDAOGovernanceRewardsv3vjAKb.transferDevAddr.call(addresslYdK23t, {from: accounts[5]});
		const uint256QiQ5EQB = await FrogDAOGovernanceRewardsv3vjAKb.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256kwALGOR = await FrogDAOGovernanceRewardsv3vjAKb.rewardPerToken.call({from: accounts[4]});
		const uint256EDhtbOS = await FrogDAOGovernanceRewardsv3vjAKb.withdrawDevFund.call(uintjCegRGs, {from: accounts[1]});
		await FrogDAOGovernanceRewardsv3vjAKb.checkhalve.call({from: accounts[2]});
		const uint256Uk75plj = await FrogDAOGovernanceRewardsv3vjAKb.rewardPerToken.call({from: accounts[5]});

		await expect(FrogDAOGovernanceRewardsv3vjAKb.transferDevAddr.call(addresslYdK23t, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const address6hUB6x = accounts[4]
		const FrogDAOGovernanceRewardsv3vjAKb = await FrogDAOGovernanceRewards.new(address6hUB6x, {from: accounts[4]});
		const uintE9eg55m = BigInt("1491")
		const addressqkJADlg = accounts[2]
		const uintUSHqnWF = BigInt("15")
		const uint256hmHqUHH = await FrogDAOGovernanceRewardsv3vjAKb.notifyRewardAmount.call(uintE9eg55m, {from: accounts[2]});
		await FrogDAOGovernanceRewardsv3vjAKb.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const addressoHLObIs = await FrogDAOGovernanceRewardsv3vjAKb.transferDevAddr.call(addressqkJADlg, {from: accounts[5]});
		const uint256QiQ5EQB = await FrogDAOGovernanceRewardsv3vjAKb.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256kwALGOR = await FrogDAOGovernanceRewardsv3vjAKb.rewardPerToken.call({from: accounts[4]});
		const uint256EDhtbOS = await FrogDAOGovernanceRewardsv3vjAKb.withdrawDevFund.call(uintUSHqnWF, {from: accounts[1]});
		await FrogDAOGovernanceRewardsv3vjAKb.checkhalve.call({from: accounts[2]});
		const uint256Uk75plj = await FrogDAOGovernanceRewardsv3vjAKb.rewardPerToken.call({from: accounts[5]});

		await expect(FrogDAOGovernanceRewardsv3vjAKb.notifyRewardAmount.call(uintE9eg55m, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressht5SN9 = accounts[4]
		const FrogDAOGovernanceRewardsv3vjAKb = await FrogDAOGovernanceRewards.new(addressht5SN9, {from: accounts[4]});
		const uintT0EScwZ = BigInt("387")
		const uint256kwALGOR = await FrogDAOGovernanceRewardsv3vjAKb.rewardPerToken.call({from: accounts[4]});
		const uint256ie74Nph = await FrogDAOGovernanceRewardsv3vjAKb.withdrawDevFund.call(uintT0EScwZ, {from: accounts[4]});
		await FrogDAOGovernanceRewardsv3vjAKb.checkStart.call({from: accounts[4]});

		assert.equal(uint256kwALGOR, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsv3vjAKb.withdrawDevFund.call(uintT0EScwZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressAezzfbH = accounts[4]
		const FrogDAOGovernanceRewardsv3vjAKb = await FrogDAOGovernanceRewards.new(addressAezzfbH, {from: accounts[4]});
		const uintS4tpaiw = BigInt("1432")
		const uintS1ueUv2 = BigInt("1696")
		const uintft7cbGP = BigInt("0")
		const uint256kwALGOR = await FrogDAOGovernanceRewardsv3vjAKb.rewardPerToken.call({from: accounts[4]});
		const uint256J7aXyj = await FrogDAOGovernanceRewardsv3vjAKb.notifyRewardAmount.call(uintS4tpaiw, {from: accounts[4]});
		const uint256fTAybmR = await FrogDAOGovernanceRewardsv3vjAKb.withdrawDevFund.call(uintS1ueUv2, {from: accounts[3]});
		const uint256EDhtbOS = await FrogDAOGovernanceRewardsv3vjAKb.withdrawDevFund.call(uintft7cbGP, {from: accounts[1]});
		const uint256asVN15 = await FrogDAOGovernanceRewardsv3vjAKb.lastTimeRewardApplicable.call({from: accounts[1]});

		assert.equal(uint256kwALGOR, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsv3vjAKb.notifyRewardAmount.call(uintS4tpaiw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresscDdgWuV = accounts[4]
		const FrogDAOGovernanceRewardsv3vjAKb = await FrogDAOGovernanceRewards.new(addresscDdgWuV, {from: accounts[4]});
		const address31Fnps = accounts[4]
		const addressRHcwW6X = accounts[4]
		const uint256kwALGOR = await FrogDAOGovernanceRewardsv3vjAKb.rewardPerToken.call({from: accounts[4]});
		const addressMnEpsG = await FrogDAOGovernanceRewardsv3vjAKb.transferDevAddr.call(address31Fnps, {from: accounts[4]});
		const addressrTpxNTv = await FrogDAOGovernanceRewardsv3vjAKb.updateReward.call(addressRHcwW6X, {from: accounts[0]});

		assert.equal(uint256kwALGOR, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsv3vjAKb.updateReward.call(addressRHcwW6X, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})