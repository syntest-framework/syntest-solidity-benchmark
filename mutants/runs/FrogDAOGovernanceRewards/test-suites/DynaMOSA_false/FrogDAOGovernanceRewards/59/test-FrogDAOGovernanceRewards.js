const FrogDAOGovernanceRewards = artifacts.require("FrogDAOGovernanceRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAOGovernanceRewards', (accounts) => {
	it('test for FrogDAOGovernanceRewards', async () => {
		const addressAZAIi1 = accounts[2]
		const FrogDAOGovernanceRewardsXPxiPZU = await FrogDAOGovernanceRewards.new(addressAZAIi1, {from: accounts[4]});
		const uintdhtyL4J = BigInt("1416")
		const uintQTkljqb = BigInt("313")
		await FrogDAOGovernanceRewardsXPxiPZU.checkStart.call({from: accounts[2]});
		await FrogDAOGovernanceRewardsXPxiPZU.checkStart.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256NTkHMtK = await FrogDAOGovernanceRewardsXPxiPZU.withdrawDevFund.call(uintdhtyL4J, {from: accounts[0]});
		const uint256VkKre0P = await FrogDAOGovernanceRewardsXPxiPZU.withdraw.call(uintQTkljqb, {from: accounts[4]});
		await FrogDAOGovernanceRewardsXPxiPZU.renounceDevAddr.call({from: accounts[4]});
		await FrogDAOGovernanceRewardsXPxiPZU.renounceDevAddr.call({from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsXPxiPZU.checkStart.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressOjsbP6c = accounts[2]
		const FrogDAOGovernanceRewardshMmG9Em = await FrogDAOGovernanceRewards.new(addressOjsbP6c, {from: accounts[1]});
		const uintOvbwUl0 = BigInt("1064")
		const addresskRVRSkp = accounts[1]
		const uintLHJfOTl = BigInt("188")
		const uint256llwzQuf = await FrogDAOGovernanceRewardshMmG9Em.stake.call(uintOvbwUl0, {from: accounts[2]});
		const addresszMGY7nP = await FrogDAOGovernanceRewardshMmG9Em.updateReward.call(addresskRVRSkp, {from: accounts[4]});
		await FrogDAOGovernanceRewardshMmG9Em.getReward.call({from: accounts[3]});
		await FrogDAOGovernanceRewardshMmG9Em.renounceDevAddr.call({from: accounts[0]});
		const uint2561RMcwO = await FrogDAOGovernanceRewardshMmG9Em.notifyRewardAmount.call(uintLHJfOTl, {from: accounts[4]});

		await expect(FrogDAOGovernanceRewardshMmG9Em.stake.call(uintOvbwUl0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressNDOkJGx = accounts[3]
		const FrogDAOGovernanceRewardsnp9UjBF = await FrogDAOGovernanceRewards.new(addressNDOkJGx, {from: accounts[1]});
		const uintpNlgy9Z = BigInt("241")
		await FrogDAOGovernanceRewardsnp9UjBF.exit.call({from: accounts[3]});
		const uint256vZNKeZ8 = await FrogDAOGovernanceRewardsnp9UjBF.notifyRewardAmount.call(uintpNlgy9Z, {from: accounts[5]});
		await FrogDAOGovernanceRewardsnp9UjBF.exit.call({from: accounts[2]});
		await FrogDAOGovernanceRewardsnp9UjBF.exit.call({from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsnp9UjBF.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresspjvdcP = accounts[2]
		const FrogDAOGovernanceRewardsXInhrcF = await FrogDAOGovernanceRewards.new(addresspjvdcP, {from: accounts[5]});
		const uintB4Q7Zb5 = BigInt("878")
		const uint256GwYdT0 = await FrogDAOGovernanceRewardsXInhrcF.notifyRewardAmount.call(uintB4Q7Zb5, {from: accounts[2]});
		await FrogDAOGovernanceRewardsXInhrcF.checkStart.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256dnltHNg = await FrogDAOGovernanceRewardsXInhrcF.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		await FrogDAOGovernanceRewardsXInhrcF.checkhalve.call({from: accounts[2]});

		await expect(FrogDAOGovernanceRewardsXInhrcF.notifyRewardAmount.call(uintB4Q7Zb5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressUK4Dag = accounts[4]
		const FrogDAOGovernanceRewardsnOoiQAY = await FrogDAOGovernanceRewards.new(addressUK4Dag, {from: "0x0000000000000000000000000000000000000001"});
		const uintReS3Wb = BigInt("178")
		const uint256F4tI6pW = await FrogDAOGovernanceRewardsnOoiQAY.stake.call(uintReS3Wb, {from: accounts[4]});
		await FrogDAOGovernanceRewardsnOoiQAY.renounceDevAddr.call({from: "0x0000000000000000000000000000000000000001"});
		await FrogDAOGovernanceRewardsnOoiQAY.checkhalve.call({from: accounts[4]});
		await FrogDAOGovernanceRewardsnOoiQAY.exit.call({from: accounts[4]});
		await FrogDAOGovernanceRewardsnOoiQAY.renounceDevAddr.call({from: accounts[3]});
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressvW3dE0P = accounts[3]
		const FrogDAOGovernanceRewardsnp9UjBF = await FrogDAOGovernanceRewards.new(addressvW3dE0P, {from: accounts[1]});
		const uintPdEDAuh = BigInt("1950")
		const uintTwJlg8q = BigInt("241")
		const uint256Pmof7e = await FrogDAOGovernanceRewardsnp9UjBF.withdraw.call(uintPdEDAuh, {from: accounts[4]});
		await FrogDAOGovernanceRewardsnp9UjBF.exit.call({from: accounts[3]});
		const uint256vZNKeZ8 = await FrogDAOGovernanceRewardsnp9UjBF.notifyRewardAmount.call(uintTwJlg8q, {from: accounts[5]});
		const uint2560bYMUi = await FrogDAOGovernanceRewardsnp9UjBF.devFundAvailable.call({from: accounts[3]});
		await FrogDAOGovernanceRewardsnp9UjBF.exit.call({from: accounts[2]});
		await FrogDAOGovernanceRewardsnp9UjBF.renounceDevAddr.call({from: accounts[2]});
		await FrogDAOGovernanceRewardsnp9UjBF.exit.call({from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsnp9UjBF.withdraw.call(uintPdEDAuh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressPcDbI8P = "0x0000000000000000000000000000000000000001"
		const FrogDAOGovernanceRewardsPnfuHda = await FrogDAOGovernanceRewards.new(addressPcDbI8P, {from: accounts[0]});
		const addresslKCGGT = accounts[3]
		const addressywF150 = accounts[3]
		const uint256gmt1G4I = await FrogDAOGovernanceRewardsPnfuHda.earned.call(addresslKCGGT, {from: accounts[4]});
		const uint256FuTT1JM = await FrogDAOGovernanceRewardsPnfuHda.earned.call(addressywF150, {from: accounts[5]});
		await FrogDAOGovernanceRewardsPnfuHda.renounceDevAddr.call({from: accounts[3]});
		await FrogDAOGovernanceRewardsPnfuHda.checkhalve.call({from: accounts[1]});
		await FrogDAOGovernanceRewardsPnfuHda.checkhalve.call({from: accounts[2]});

		assert.equal(uint256FuTT1JM, BigInt("0"))
		assert.equal(uint256gmt1G4I, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsPnfuHda.renounceDevAddr.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresshkFGoSF = accounts[0]
		const FrogDAOGovernanceRewardsr98zeeS = await FrogDAOGovernanceRewards.new(addresshkFGoSF, {from: accounts[5]});
		const addressBEYfeS = accounts[0]
		const uintkxjyldl = BigInt("995")
		const addressL4GOI7L = accounts[3]
		const addressklxWUk1 = await FrogDAOGovernanceRewardsr98zeeS.transferDevAddr.call(addressBEYfeS, {from: accounts[4]});
		const uint256Uu6LHLs = await FrogDAOGovernanceRewardsr98zeeS.notifyRewardAmount.call(uintkxjyldl, {from: accounts[4]});
		const uint256stz8MLf = await FrogDAOGovernanceRewardsr98zeeS.earned.call(addressL4GOI7L, {from: accounts[1]});

		await expect(FrogDAOGovernanceRewardsr98zeeS.transferDevAddr.call(addressBEYfeS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresstAvAN2c = accounts[2]
		const FrogDAOGovernanceRewardsCdcm9O5 = await FrogDAOGovernanceRewards.new(addresstAvAN2c, {from: accounts[2]});
		const uintpq4bmca = BigInt("1729")
		const addressUkRju1X = accounts[0]
		const uint256DzAX14H = await FrogDAOGovernanceRewardsCdcm9O5.withdrawDevFund.call(uintpq4bmca, {from: accounts[1]});
		await FrogDAOGovernanceRewardsCdcm9O5.checkhalve.call({from: accounts[1]});
		const uint256bVe8P4d = await FrogDAOGovernanceRewardsCdcm9O5.lastTimeRewardApplicable.call({from: accounts[1]});
		const addressmwE0oCb = await FrogDAOGovernanceRewardsCdcm9O5.updateReward.call(addressUkRju1X, {from: accounts[5]});

		await expect(FrogDAOGovernanceRewardsCdcm9O5.withdrawDevFund.call(uintpq4bmca, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressfDUAYJV = accounts[2]
		const FrogDAOGovernanceRewardsCdcm9O5 = await FrogDAOGovernanceRewards.new(addressfDUAYJV, {from: accounts[2]});
		const uintDr91Pp = BigInt("345")
		const addressj7AGUhp = accounts[0]
		const uint256bVe8P4d = await FrogDAOGovernanceRewardsCdcm9O5.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256pstq6US = await FrogDAOGovernanceRewardsCdcm9O5.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256jO8yjzS = await FrogDAOGovernanceRewardsCdcm9O5.devFundAvailable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint2560f4aMF = await FrogDAOGovernanceRewardsCdcm9O5.stake.call(uintDr91Pp, {from: accounts[1]});
		await FrogDAOGovernanceRewardsCdcm9O5.getReward.call({from: accounts[2]});
		const addressmwE0oCb = await FrogDAOGovernanceRewardsCdcm9O5.updateReward.call(addressj7AGUhp, {from: accounts[5]});

		assert.equal(uint256bVe8P4d, BigInt("0"))
		assert.equal(uint256jO8yjzS, BigInt("0"))
		assert.equal(uint256pstq6US, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsCdcm9O5.stake.call(uintDr91Pp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressfdvpj3D = accounts[5]
		const FrogDAOGovernanceRewardsvsVqi2 = await FrogDAOGovernanceRewards.new(addressfdvpj3D, {from: accounts[1]});
		const uintxXPJ1YJ = BigInt("2015")
		await FrogDAOGovernanceRewardsvsVqi2.renounceDevAddr.call({from: accounts[5]});
		const uint256frNylw = await FrogDAOGovernanceRewardsvsVqi2.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256xAvvQ88 = await FrogDAOGovernanceRewardsvsVqi2.notifyRewardAmount.call(uintxXPJ1YJ, {from: accounts[1]});

		await expect(FrogDAOGovernanceRewardsvsVqi2.renounceDevAddr.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressKLc1ZVm = accounts[5]
		const FrogDAOGovernanceRewardsvsVqi2 = await FrogDAOGovernanceRewards.new(addressKLc1ZVm, {from: accounts[1]});
		const uinttR0GQn0 = BigInt("1596")
		const uint256jzHHSf0 = await FrogDAOGovernanceRewardsvsVqi2.withdrawDevFund.call(uinttR0GQn0, {from: accounts[5]});
		const uint256R4EupXK = await FrogDAOGovernanceRewardsvsVqi2.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256S1TGF0J = await FrogDAOGovernanceRewardsvsVqi2.rewardPerToken.call({from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsvsVqi2.withdrawDevFund.call(uinttR0GQn0, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})