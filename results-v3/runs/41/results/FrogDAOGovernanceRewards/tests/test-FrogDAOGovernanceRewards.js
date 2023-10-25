const FrogDAOGovernanceRewards = artifacts.require("FrogDAOGovernanceRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAOGovernanceRewards', (accounts) => {
	it('test for FrogDAOGovernanceRewards', async () => {
		const addressvO8oCzw = accounts[2]
		const FrogDAOGovernanceRewardsLIRt3AG = await FrogDAOGovernanceRewards.new(addressvO8oCzw, {from: accounts[4]});
		const uint5d6NWr = BigInt("985")
		const uint256UiIlkJu = await FrogDAOGovernanceRewardsLIRt3AG.rewardPerToken.call({from: accounts[3]});
		await FrogDAOGovernanceRewardsLIRt3AG.checkStart.call({from: accounts[5]});
		const uint256QUZwuWk = await FrogDAOGovernanceRewardsLIRt3AG.stake.call(uint5d6NWr, {from: accounts[5]});

		assert.equal(uint256UiIlkJu, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsLIRt3AG.checkStart.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresstrb1R3u = "0x0000000000000000000000000000000000000001"
		const FrogDAOGovernanceRewardsrsrTVFe = await FrogDAOGovernanceRewards.new(addresstrb1R3u, {from: accounts[3]});
		const uintt23z8b = BigInt("3")
		const uintg576Zre = BigInt("1480")
		const uint256M1xYliI = await FrogDAOGovernanceRewardsrsrTVFe.rewardPerToken.call({from: accounts[5]});
		const uint256AJ4fSqn = await FrogDAOGovernanceRewardsrsrTVFe.rewardPerToken.call({from: accounts[0]});
		const uint256WT08POe = await FrogDAOGovernanceRewardsrsrTVFe.notifyRewardAmount.call(uintt23z8b, {from: accounts[0]});
		const uint256b4vBQNc = await FrogDAOGovernanceRewardsrsrTVFe.notifyRewardAmount.call(uintg576Zre, {from: accounts[3]});

		assert.equal(uint256AJ4fSqn, BigInt("0"))
		assert.equal(uint256M1xYliI, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsrsrTVFe.notifyRewardAmount.call(uintt23z8b, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressTYYrY2P = accounts[1]
		const FrogDAOGovernanceRewardsPgScfra = await FrogDAOGovernanceRewards.new(addressTYYrY2P, {from: accounts[4]});
		const uintwJXAcoC = BigInt("1341")
		const uintKu1Osi = BigInt("406")
		const addresskHQGX6 = accounts[0]
		await FrogDAOGovernanceRewardsPgScfra.renounceDevAddr.call({from: accounts[4]});
		const uint25650FkpM = await FrogDAOGovernanceRewardsPgScfra.notifyRewardAmount.call(uintwJXAcoC, {from: accounts[3]});
		const uint256pwqczO7 = await FrogDAOGovernanceRewardsPgScfra.devFundAvailable.call({from: accounts[5]});
		const uint256omJdcrd = await FrogDAOGovernanceRewardsPgScfra.stake.call(uintKu1Osi, {from: accounts[3]});
		const uint256sdA8Z1d = await FrogDAOGovernanceRewardsPgScfra.earned.call(addresskHQGX6, {from: accounts[2]});

		await expect(FrogDAOGovernanceRewardsPgScfra.renounceDevAddr.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressugWhht = accounts[1]
		const FrogDAOGovernanceRewardspYI1u0F = await FrogDAOGovernanceRewards.new(addressugWhht, {from: accounts[0]});
		const uintUzn8zIz = BigInt("1752")
		const addressKvrSn2Q = accounts[3]
		const addressJb3acQf = accounts[3]
		const uint256vQkXXqD = await FrogDAOGovernanceRewardspYI1u0F.withdrawDevFund.call(uintUzn8zIz, {from: accounts[0]});
		const addressv88g9TN = await FrogDAOGovernanceRewardspYI1u0F.transferDevAddr.call(addressKvrSn2Q, {from: accounts[3]});
		const uint256bSvNP8m = await FrogDAOGovernanceRewardspYI1u0F.earned.call(addressJb3acQf, {from: accounts[2]});

		await expect(FrogDAOGovernanceRewardspYI1u0F.withdrawDevFund.call(uintUzn8zIz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressUEwU7Jp = accounts[1]
		const FrogDAOGovernanceRewardsX8nunWZ = await FrogDAOGovernanceRewards.new(addressUEwU7Jp, {from: accounts[2]});
		const addressCEvSspZ = accounts[1]
		const addressShFXtcq = accounts[4]
		const addressqET6ZUB = accounts[3]
		const uint256HmtMUAg = await FrogDAOGovernanceRewardsX8nunWZ.earned.call(addressCEvSspZ, {from: accounts[0]});
		const uint256NqkCrrj = await FrogDAOGovernanceRewardsX8nunWZ.devFundAvailable.call({from: accounts[4]});
		await FrogDAOGovernanceRewardsX8nunWZ.getReward.call({from: accounts[1]});
		const uint256t1dw3st = await FrogDAOGovernanceRewardsX8nunWZ.earned.call(addressShFXtcq, {from: accounts[1]});
		const addressBuaYCo = await FrogDAOGovernanceRewardsX8nunWZ.updateReward.call(addressqET6ZUB, {from: accounts[5]});

		assert.equal(uint256HmtMUAg, BigInt("0"))
		assert.equal(uint256NqkCrrj, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsX8nunWZ.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressOwfCsA0 = accounts[1]
		const FrogDAOGovernanceRewardspYI1u0F = await FrogDAOGovernanceRewards.new(addressOwfCsA0, {from: accounts[0]});
		const addressW5uZUa8 = accounts[3]
		const addressxjiPNn = accounts[3]
		const uint256XVfkC74 = await FrogDAOGovernanceRewardspYI1u0F.devFundAvailable.call({from: accounts[5]});
		const addressv88g9TN = await FrogDAOGovernanceRewardspYI1u0F.transferDevAddr.call(addressW5uZUa8, {from: accounts[3]});
		const uint256bSvNP8m = await FrogDAOGovernanceRewardspYI1u0F.earned.call(addressxjiPNn, {from: accounts[2]});
		const uint256TB7fBGe = await FrogDAOGovernanceRewardspYI1u0F.lastTimeRewardApplicable.call({from: accounts[2]});

		assert.equal(uint256XVfkC74, BigInt("0"))
		await expect(FrogDAOGovernanceRewardspYI1u0F.transferDevAddr.call(addressW5uZUa8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresspj3BYdB = accounts[2]
		const FrogDAOGovernanceRewardsLIRt3AG = await FrogDAOGovernanceRewards.new(addresspj3BYdB, {from: accounts[4]});
		await FrogDAOGovernanceRewardsLIRt3AG.exit.call({from: accounts[1]});
		const uint256UiIlkJu = await FrogDAOGovernanceRewardsLIRt3AG.rewardPerToken.call({from: accounts[3]});
		const uint256GGrM7FQ = await FrogDAOGovernanceRewardsLIRt3AG.lastTimeRewardApplicable.call({from: accounts[1]});

		await expect(FrogDAOGovernanceRewardsLIRt3AG.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressp0TLLRg = accounts[2]
		const FrogDAOGovernanceRewardsLIRt3AG = await FrogDAOGovernanceRewards.new(addressp0TLLRg, {from: accounts[4]});
		const addressFLevpNQ = "0x0000000000000000000000000000000000000001"
		const uintGPK53qx = BigInt("965")
		const addressvdCOlCT = await FrogDAOGovernanceRewardsLIRt3AG.transferDevAddr.call(addressFLevpNQ, {from: accounts[2]});
		const uint256UiIlkJu = await FrogDAOGovernanceRewardsLIRt3AG.rewardPerToken.call({from: accounts[3]});
		const uint256QUZwuWk = await FrogDAOGovernanceRewardsLIRt3AG.stake.call(uintGPK53qx, {from: accounts[5]});

		assert.equal(uint256UiIlkJu, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsLIRt3AG.stake.call(uintGPK53qx, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressXBrbyu1 = accounts[2]
		const FrogDAOGovernanceRewardsLIRt3AG = await FrogDAOGovernanceRewards.new(addressXBrbyu1, {from: accounts[4]});
		const uintIi76zOD = BigInt("1080")
		const uintONTF2pW = BigInt("985")
		const uint256UiIlkJu = await FrogDAOGovernanceRewardsLIRt3AG.rewardPerToken.call({from: accounts[3]});
		const uint256bD7xtTc = await FrogDAOGovernanceRewardsLIRt3AG.rewardPerToken.call({from: accounts[2]});
		const uint256pMmV1A = await FrogDAOGovernanceRewardsLIRt3AG.withdraw.call(uintIi76zOD, {from: accounts[1]});
		const uint256QUZwuWk = await FrogDAOGovernanceRewardsLIRt3AG.stake.call(uintONTF2pW, {from: accounts[5]});
		await FrogDAOGovernanceRewardsLIRt3AG.checkhalve.call({from: accounts[0]});

		assert.equal(uint256UiIlkJu, BigInt("0"))
		assert.equal(uint256bD7xtTc, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsLIRt3AG.withdraw.call(uintIi76zOD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressEPo78yb = accounts[2]
		const FrogDAOGovernanceRewardsLIRt3AG = await FrogDAOGovernanceRewards.new(addressEPo78yb, {from: accounts[4]});
		const uintePux1W2 = BigInt("83")
		const addressFCHtNvW = accounts[2]
		const uint256oFKrzTg = await FrogDAOGovernanceRewardsLIRt3AG.notifyRewardAmount.call(uintePux1W2, {from: accounts[4]});
		const uint256UiIlkJu = await FrogDAOGovernanceRewardsLIRt3AG.rewardPerToken.call({from: accounts[3]});
		const addressiHJZZQ5 = await FrogDAOGovernanceRewardsLIRt3AG.updateReward.call(addressFCHtNvW, {from: accounts[0]});

		await expect(FrogDAOGovernanceRewardsLIRt3AG.notifyRewardAmount.call(uintePux1W2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressUFQU17a = accounts[1]
		const FrogDAOGovernanceRewardspYI1u0F = await FrogDAOGovernanceRewards.new(addressUFQU17a, {from: accounts[0]});
		const uintUSgC2lA = BigInt("985")
		const uintburTQC = BigInt("1752")
		const uint256qZrwLM9 = await FrogDAOGovernanceRewardspYI1u0F.withdrawDevFund.call(uintUSgC2lA, {from: accounts[1]});
		const uint256vQkXXqD = await FrogDAOGovernanceRewardspYI1u0F.withdrawDevFund.call(uintburTQC, {from: accounts[0]});

		await expect(FrogDAOGovernanceRewardspYI1u0F.withdrawDevFund.call(uintUSgC2lA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressE0YF3T9 = accounts[3]
		const FrogDAOGovernanceRewardswLpYdTh = await FrogDAOGovernanceRewards.new(addressE0YF3T9, {from: "0x0000000000000000000000000000000000000001"});
		await FrogDAOGovernanceRewardswLpYdTh.exit.call({from: accounts[0]});
		await FrogDAOGovernanceRewardswLpYdTh.checkhalve.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256bGfPTdy = await FrogDAOGovernanceRewardswLpYdTh.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
	});
})