const FrogDAOGovernanceRewards = artifacts.require("FrogDAOGovernanceRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAOGovernanceRewards', (accounts) => {
	it('test for FrogDAOGovernanceRewards', async () => {
		const addresslGrbRHY = accounts[2]
		const FrogDAOGovernanceRewardsfQPdqRe = await FrogDAOGovernanceRewards.new(addresslGrbRHY, {from: accounts[2]});
		const uint7Ch8KY = BigInt("1056")
		const uintHIHSZIw = BigInt("1892")
		const uint2569J6wUr = await FrogDAOGovernanceRewardsfQPdqRe.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256gVTlwp2 = await FrogDAOGovernanceRewardsfQPdqRe.notifyRewardAmount.call(uint7Ch8KY, {from: accounts[2]});
		const uint256UmLpge1 = await FrogDAOGovernanceRewardsfQPdqRe.withdraw.call(uintHIHSZIw, {from: accounts[4]});
		await FrogDAOGovernanceRewardsfQPdqRe.getReward.call({from: accounts[1]});

		assert.equal(uint2569J6wUr, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsfQPdqRe.notifyRewardAmount.call(uint7Ch8KY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressUk1DjZ8 = accounts[4]
		const FrogDAOGovernanceRewardsawUUFqO = await FrogDAOGovernanceRewards.new(addressUk1DjZ8, {from: accounts[0]});
		await FrogDAOGovernanceRewardsawUUFqO.exit.call({from: accounts[0]});
		const uint256gFv3PS = await FrogDAOGovernanceRewardsawUUFqO.rewardPerToken.call({from: accounts[2]});
		await FrogDAOGovernanceRewardsawUUFqO.exit.call({from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsawUUFqO.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressf3zCyaC = accounts[0]
		const FrogDAOGovernanceRewardsYQh4e6 = await FrogDAOGovernanceRewards.new(addressf3zCyaC, {from: accounts[5]});
		const addressMkzWtos = accounts[1]
		const uintqSiKkuc = BigInt("61")
		await FrogDAOGovernanceRewardsYQh4e6.checkStart.call({from: accounts[2]});
		const addresszCjG3ay = await FrogDAOGovernanceRewardsYQh4e6.updateReward.call(addressMkzWtos, {from: accounts[1]});
		await FrogDAOGovernanceRewardsYQh4e6.exit.call({from: accounts[0]});
		const uint256b9DRs9u = await FrogDAOGovernanceRewardsYQh4e6.withdraw.call(uintqSiKkuc, {from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsYQh4e6.checkStart.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressUyH7b6K = accounts[4]
		const FrogDAOGovernanceRewardsI6dXQcS = await FrogDAOGovernanceRewards.new(addressUyH7b6K, {from: accounts[3]});
		const uintURJBq6x = BigInt("1651")
		const uint256i18bqAd = await FrogDAOGovernanceRewardsI6dXQcS.devFundAvailable.call({from: accounts[2]});
		const uint256Ed0C1S = await FrogDAOGovernanceRewardsI6dXQcS.devFundAvailable.call({from: accounts[0]});
		await FrogDAOGovernanceRewardsI6dXQcS.checkhalve.call({from: accounts[3]});
		const uint256hbm7NUf = await FrogDAOGovernanceRewardsI6dXQcS.withdrawDevFund.call(uintURJBq6x, {from: accounts[0]});

		assert.equal(uint256Ed0C1S, BigInt("0"))
		assert.equal(uint256i18bqAd, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsI6dXQcS.checkhalve.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressEID9VRS = accounts[4]
		const FrogDAOGovernanceRewardsD0C1U4o = await FrogDAOGovernanceRewards.new(addressEID9VRS, {from: "0x0000000000000000000000000000000000000001"});
		const uintwoKwO4 = BigInt("1374")
		const addressIiuedg2 = accounts[2]
		const uint256wky1DYu = await FrogDAOGovernanceRewardsD0C1U4o.withdrawDevFund.call(uintwoKwO4, {from: accounts[1]});
		const uint256Ss7tQzK = await FrogDAOGovernanceRewardsD0C1U4o.rewardPerToken.call({from: accounts[0]});
		const uint256WHNOEZW = await FrogDAOGovernanceRewardsD0C1U4o.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256QkwcNKn = await FrogDAOGovernanceRewardsD0C1U4o.earned.call(addressIiuedg2, {from: accounts[4]});
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressxmSiqYH = accounts[2]
		const FrogDAOGovernanceRewardskQhutSo = await FrogDAOGovernanceRewards.new(addressxmSiqYH, {from: accounts[2]});
		const uintRhIOAXW = BigInt("1989")
		const uintqL3dJ5f = BigInt("724")
		const uint256cnGDlWh = await FrogDAOGovernanceRewardskQhutSo.withdrawDevFund.call(uintRhIOAXW, {from: accounts[0]});
		const uint256Yu4pxQ5 = await FrogDAOGovernanceRewardskQhutSo.withdrawDevFund.call(uintqL3dJ5f, {from: accounts[4]});
		const uint256nSzFB5u = await FrogDAOGovernanceRewardskQhutSo.rewardPerToken.call({from: accounts[5]});

		await expect(FrogDAOGovernanceRewardskQhutSo.withdrawDevFund.call(uintRhIOAXW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressAvbooSL = accounts[3]
		const FrogDAOGovernanceRewardsfR6XN4X = await FrogDAOGovernanceRewards.new(addressAvbooSL, {from: accounts[3]});
		const uintcFBVqqd = BigInt("136")
		const uintHbecnKo = BigInt("1088")
		const uint256ZDBQVTD = await FrogDAOGovernanceRewardsfR6XN4X.notifyRewardAmount.call(uintcFBVqqd, {from: accounts[0]});
		const uint256vGOM1B3 = await FrogDAOGovernanceRewardsfR6XN4X.stake.call(uintHbecnKo, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FrogDAOGovernanceRewardsfR6XN4X.notifyRewardAmount.call(uintcFBVqqd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressgYSEOux = accounts[4]
		const FrogDAOGovernanceRewardsawUUFqO = await FrogDAOGovernanceRewards.new(addressgYSEOux, {from: accounts[0]});
		await FrogDAOGovernanceRewardsawUUFqO.renounceDevAddr.call({from: accounts[3]});
		await FrogDAOGovernanceRewardsawUUFqO.exit.call({from: accounts[0]});
		await FrogDAOGovernanceRewardsawUUFqO.getReward.call({from: accounts[0]});
		const uint256gFv3PS = await FrogDAOGovernanceRewardsawUUFqO.rewardPerToken.call({from: accounts[2]});
		await FrogDAOGovernanceRewardsawUUFqO.exit.call({from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsawUUFqO.renounceDevAddr.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressZdJLuMJ = accounts[2]
		const FrogDAOGovernanceRewardskQhutSo = await FrogDAOGovernanceRewards.new(addressZdJLuMJ, {from: accounts[2]});
		const uintSzPWX9t = BigInt("747")
		const addressr1wcTMj = accounts[2]
		const uintSUqSvg = BigInt("691")
		const uint256DS9Au5h = await FrogDAOGovernanceRewardskQhutSo.withdraw.call(uintSzPWX9t, {from: accounts[3]});
		const addressZZqWffv = await FrogDAOGovernanceRewardskQhutSo.updateReward.call(addressr1wcTMj, {from: accounts[0]});
		const uint256Yu4pxQ5 = await FrogDAOGovernanceRewardskQhutSo.withdrawDevFund.call(uintSUqSvg, {from: accounts[4]});
		await FrogDAOGovernanceRewardskQhutSo.checkhalve.call({from: accounts[3]});
		const uint256nSzFB5u = await FrogDAOGovernanceRewardskQhutSo.rewardPerToken.call({from: accounts[5]});

		await expect(FrogDAOGovernanceRewardskQhutSo.withdraw.call(uintSzPWX9t, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressSPlGcw9 = accounts[2]
		const FrogDAOGovernanceRewardskQhutSo = await FrogDAOGovernanceRewards.new(addressSPlGcw9, {from: accounts[2]});
		const addressMfYV9MP = accounts[0]
		const addressfJrM0Ds = await FrogDAOGovernanceRewardskQhutSo.transferDevAddr.call(addressMfYV9MP, {from: accounts[3]});
		const uint256grpbG0B = await FrogDAOGovernanceRewardskQhutSo.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256nSzFB5u = await FrogDAOGovernanceRewardskQhutSo.rewardPerToken.call({from: accounts[5]});

		await expect(FrogDAOGovernanceRewardskQhutSo.transferDevAddr.call(addressMfYV9MP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressHAb34yq = accounts[2]
		const FrogDAOGovernanceRewardskQhutSo = await FrogDAOGovernanceRewards.new(addressHAb34yq, {from: accounts[2]});
		const uintSHQPFnV = BigInt("986")
		const uintDwJ9O4K = BigInt("1133")
		const uintAaAu8J6 = BigInt("1988")
		const uintkgO1K8w = BigInt("195")
		const uint256DTjlc5 = await FrogDAOGovernanceRewardskQhutSo.withdrawDevFund.call(uintSHQPFnV, {from: accounts[2]});
		const uint256ylq1aSn = await FrogDAOGovernanceRewardskQhutSo.withdrawDevFund.call(uintDwJ9O4K, {from: accounts[2]});
		const uint256cnGDlWh = await FrogDAOGovernanceRewardskQhutSo.withdrawDevFund.call(uintAaAu8J6, {from: accounts[0]});
		await FrogDAOGovernanceRewardskQhutSo.renounceDevAddr.call({from: accounts[2]});
		const uint256Ae69UdH = await FrogDAOGovernanceRewardskQhutSo.withdraw.call(uintkgO1K8w, {from: accounts[3]});

		await expect(FrogDAOGovernanceRewardskQhutSo.withdrawDevFund.call(uintSHQPFnV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})