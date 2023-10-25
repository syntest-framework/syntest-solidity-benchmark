const FrogDAOGovernanceRewards = artifacts.require("FrogDAOGovernanceRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAOGovernanceRewards', (accounts) => {
	it('test for FrogDAOGovernanceRewards', async () => {
		const addressKWKNhQR = accounts[1]
		const FrogDAOGovernanceRewardsFOvCkgI = await FrogDAOGovernanceRewards.new(addressKWKNhQR, {from: accounts[4]});
		const uintgD6AD3A = BigInt("576")
		await FrogDAOGovernanceRewardsFOvCkgI.getReward.call({from: accounts[3]});
		await FrogDAOGovernanceRewardsFOvCkgI.getReward.call({from: accounts[3]});
		await FrogDAOGovernanceRewardsFOvCkgI.renounceDevAddr.call({from: accounts[4]});
		const uint256FQiql1v = await FrogDAOGovernanceRewardsFOvCkgI.stake.call(uintgD6AD3A, {from: accounts[2]});

		await expect(FrogDAOGovernanceRewardsFOvCkgI.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressza7S2ME = accounts[4]
		const FrogDAOGovernanceRewardsTpjBp2Y = await FrogDAOGovernanceRewards.new(addressza7S2ME, {from: accounts[4]});
		const addressKmS3iL = accounts[2]
		const uint256ecnqyd0 = await FrogDAOGovernanceRewardsTpjBp2Y.devFundAvailable.call({from: accounts[5]});
		const addressoGpXDlR = await FrogDAOGovernanceRewardsTpjBp2Y.updateReward.call(addressKmS3iL, {from: accounts[2]});
		await FrogDAOGovernanceRewardsTpjBp2Y.exit.call({from: accounts[0]});
		const uint256chSwOwk = await FrogDAOGovernanceRewardsTpjBp2Y.lastTimeRewardApplicable.call({from: accounts[4]});

		assert.equal(uint256ecnqyd0, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsTpjBp2Y.updateReward.call(addressKmS3iL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressinplEf1 = accounts[2]
		const FrogDAOGovernanceRewardsCA3lHI9 = await FrogDAOGovernanceRewards.new(addressinplEf1, {from: accounts[2]});
		await FrogDAOGovernanceRewardsCA3lHI9.exit.call({from: accounts[2]});
		await FrogDAOGovernanceRewardsCA3lHI9.getReward.call({from: accounts[0]});
		await FrogDAOGovernanceRewardsCA3lHI9.checkhalve.call({from: accounts[1]});
		await FrogDAOGovernanceRewardsCA3lHI9.checkStart.call({from: accounts[4]});

		await expect(FrogDAOGovernanceRewardsCA3lHI9.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressZv5W63o = accounts[1]
		const FrogDAOGovernanceRewardsfvI057 = await FrogDAOGovernanceRewards.new(addressZv5W63o, {from: accounts[3]});
		const uintMd8c0ut = BigInt("1142")
		const uint256BulOf7R = await FrogDAOGovernanceRewardsfvI057.rewardPerToken.call({from: accounts[5]});
		const uint256mbKCAWK = await FrogDAOGovernanceRewardsfvI057.notifyRewardAmount.call(uintMd8c0ut, {from: accounts[3]});
		const uint256mfJCexo = await FrogDAOGovernanceRewardsfvI057.devFundAvailable.call({from: accounts[2]});

		assert.equal(uint256BulOf7R, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsfvI057.notifyRewardAmount.call(uintMd8c0ut, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressdPcjswQ = "0x0000000000000000000000000000000000000001"
		const FrogDAOGovernanceRewardsYqZSbYO = await FrogDAOGovernanceRewards.new(addressdPcjswQ, {from: accounts[2]});
		const addressMrxDxV = accounts[0]
		const uintd6gcyiH = BigInt("1169")
		const addressTsjB3CI = accounts[2]
		const addressttLH1zX = await FrogDAOGovernanceRewardsYqZSbYO.transferDevAddr.call(addressMrxDxV, {from: accounts[4]});
		const uint256MS7545 = await FrogDAOGovernanceRewardsYqZSbYO.rewardPerToken.call({from: accounts[3]});
		const uint256FdWtdBD = await FrogDAOGovernanceRewardsYqZSbYO.withdrawDevFund.call(uintd6gcyiH, {from: accounts[3]});
		const uint256WSmMglf = await FrogDAOGovernanceRewardsYqZSbYO.earned.call(addressTsjB3CI, {from: accounts[5]});

		await expect(FrogDAOGovernanceRewardsYqZSbYO.transferDevAddr.call(addressMrxDxV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresssGJQGP = accounts[4]
		const FrogDAOGovernanceRewardsQPtyQzi = await FrogDAOGovernanceRewards.new(addresssGJQGP, {from: accounts[4]});
		const uintkH3hZvh = BigInt("1783")
		const uint2r70q0 = BigInt("866")
		const uint256Uc65Yt0 = await FrogDAOGovernanceRewardsQPtyQzi.withdrawDevFund.call(uintkH3hZvh, {from: accounts[2]});
		const uint256y9ZKdxU = await FrogDAOGovernanceRewardsQPtyQzi.notifyRewardAmount.call(uint2r70q0, {from: accounts[1]});
		await FrogDAOGovernanceRewardsQPtyQzi.exit.call({from: accounts[4]});
		await FrogDAOGovernanceRewardsQPtyQzi.exit.call({from: accounts[1]});

		await expect(FrogDAOGovernanceRewardsQPtyQzi.withdrawDevFund.call(uintkH3hZvh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressikO1Y8c = accounts[0]
		const FrogDAOGovernanceRewardsj66o8Cy = await FrogDAOGovernanceRewards.new(addressikO1Y8c, {from: accounts[4]});
		const uintAshQtp = BigInt("1008")
		const uint256yDBjOp = await FrogDAOGovernanceRewardsj66o8Cy.notifyRewardAmount.call(uintAshQtp, {from: accounts[3]});
		await FrogDAOGovernanceRewardsj66o8Cy.getReward.call({from: accounts[2]});

		await expect(FrogDAOGovernanceRewardsj66o8Cy.notifyRewardAmount.call(uintAshQtp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressU3yPOFg = accounts[2]
		const FrogDAOGovernanceRewardsvoHLTQ5 = await FrogDAOGovernanceRewards.new(addressU3yPOFg, {from: accounts[4]});
		const uint256hI33srA = await FrogDAOGovernanceRewardsvoHLTQ5.devFundAvailable.call({from: accounts[5]});
		await FrogDAOGovernanceRewardsvoHLTQ5.renounceDevAddr.call({from: accounts[3]});
		await FrogDAOGovernanceRewardsvoHLTQ5.checkhalve.call({from: accounts[4]});

		assert.equal(uint256hI33srA, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsvoHLTQ5.renounceDevAddr.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresslSA3Ay = accounts[1]
		const FrogDAOGovernanceRewardsfvI057 = await FrogDAOGovernanceRewards.new(addresslSA3Ay, {from: accounts[3]});
		const uintFN8qRsN = BigInt("785")
		const uinte948iQ = BigInt("982")
		const addressz7KvM7M = accounts[4]
		const uint256BulOf7R = await FrogDAOGovernanceRewardsfvI057.rewardPerToken.call({from: accounts[5]});
		const uint256mOjNlUH = await FrogDAOGovernanceRewardsfvI057.withdraw.call(uintFN8qRsN, {from: accounts[3]});
		const uint256mbKCAWK = await FrogDAOGovernanceRewardsfvI057.notifyRewardAmount.call(uinte948iQ, {from: accounts[3]});
		const addressfg5JRes = await FrogDAOGovernanceRewardsfvI057.transferDevAddr.call(addressz7KvM7M, {from: "0x0000000000000000000000000000000000000001"});
		const uint256mfJCexo = await FrogDAOGovernanceRewardsfvI057.devFundAvailable.call({from: accounts[2]});

		assert.equal(uint256BulOf7R, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsfvI057.withdraw.call(uintFN8qRsN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressgGXIjuh = accounts[4]
		const FrogDAOGovernanceRewardsVYQqOL = await FrogDAOGovernanceRewards.new(addressgGXIjuh, {from: "0x0000000000000000000000000000000000000001"});
		const uintWXcywqS = BigInt("981")
		const uintWQbtN01 = BigInt("665")
		const addressEEFc5Q = accounts[0]
		const uint256LF0VZS2 = await FrogDAOGovernanceRewardsVYQqOL.stake.call(uintWXcywqS, {from: accounts[1]});
		const uint256MAAZVr5 = await FrogDAOGovernanceRewardsVYQqOL.withdraw.call(uintWQbtN01, {from: accounts[3]});
		await FrogDAOGovernanceRewardsVYQqOL.renounceDevAddr.call({from: accounts[2]});
		await FrogDAOGovernanceRewardsVYQqOL.checkStart.call({from: accounts[4]});
		await FrogDAOGovernanceRewardsVYQqOL.checkhalve.call({from: accounts[4]});
		const addresssXRT0uQ = await FrogDAOGovernanceRewardsVYQqOL.transferDevAddr.call(addressEEFc5Q, {from: accounts[4]});
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressr5N2YtX = accounts[1]
		const FrogDAOGovernanceRewardsfvI057 = await FrogDAOGovernanceRewards.new(addressr5N2YtX, {from: accounts[3]});
		const uintViuNZZo = BigInt("2035")
		const uintnQRyygz = BigInt("1141")
		const uint256iFw8fx3 = await FrogDAOGovernanceRewardsfvI057.withdrawDevFund.call(uintViuNZZo, {from: accounts[1]});
		const uint256mbKCAWK = await FrogDAOGovernanceRewardsfvI057.notifyRewardAmount.call(uintnQRyygz, {from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsfvI057.withdrawDevFund.call(uintViuNZZo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})