const FrogDAOGovernanceRewards = artifacts.require("FrogDAOGovernanceRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAOGovernanceRewards', (accounts) => {
	it('test for FrogDAOGovernanceRewards', async () => {
		const addressSQzn6fY = accounts[3]
		const FrogDAOGovernanceRewardsp5awPVx = await FrogDAOGovernanceRewards.new(addressSQzn6fY, {from: accounts[4]});
		const uintJ9KyJO = BigInt("1223")
		const addressepo27Xo = accounts[0]
		const uint256O0xFERo = await FrogDAOGovernanceRewardsp5awPVx.rewardPerToken.call({from: accounts[3]});
		await FrogDAOGovernanceRewardsp5awPVx.checkhalve.call({from: accounts[2]});
		const uint256Y8ZrUfa = await FrogDAOGovernanceRewardsp5awPVx.withdraw.call(uintJ9KyJO, {from: accounts[2]});
		await FrogDAOGovernanceRewardsp5awPVx.getReward.call({from: accounts[4]});
		const uint256jMFNXz = await FrogDAOGovernanceRewardsp5awPVx.earned.call(addressepo27Xo, {from: accounts[2]});

		assert.equal(uint256O0xFERo, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsp5awPVx.checkhalve.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressZbLIay9 = accounts[1]
		const FrogDAOGovernanceRewardsbaLBkkn = await FrogDAOGovernanceRewards.new(addressZbLIay9, {from: accounts[1]});
		const addressY9d2hC = accounts[0]
		const uint256YXqlMhD = await FrogDAOGovernanceRewardsbaLBkkn.lastTimeRewardApplicable.call({from: accounts[1]});
		await FrogDAOGovernanceRewardsbaLBkkn.renounceDevAddr.call({from: accounts[3]});
		await FrogDAOGovernanceRewardsbaLBkkn.renounceDevAddr.call({from: accounts[3]});
		const addresskRogR7n = await FrogDAOGovernanceRewardsbaLBkkn.updateReward.call(addressY9d2hC, {from: accounts[1]});
		const uint256f8Gwdwj = await FrogDAOGovernanceRewardsbaLBkkn.rewardPerToken.call({from: accounts[1]});
		await FrogDAOGovernanceRewardsbaLBkkn.checkStart.call({from: accounts[0]});

		assert.equal(uint256YXqlMhD, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsbaLBkkn.renounceDevAddr.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressrfpss5z = accounts[1]
		const FrogDAOGovernanceRewardsxIuIrSf = await FrogDAOGovernanceRewards.new(addressrfpss5z, {from: accounts[4]});
		const addressf7FOnrN = accounts[1]
		const uintRg8WpLA = BigInt("299")
		const addressggRsWvi = await FrogDAOGovernanceRewardsxIuIrSf.transferDevAddr.call(addressf7FOnrN, {from: accounts[4]});
		const uint256ZB8KtqX = await FrogDAOGovernanceRewardsxIuIrSf.notifyRewardAmount.call(uintRg8WpLA, {from: accounts[0]});

		await expect(FrogDAOGovernanceRewardsxIuIrSf.transferDevAddr.call(addressf7FOnrN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressa2OasWa = accounts[2]
		const FrogDAOGovernanceRewardspWTSAN9 = await FrogDAOGovernanceRewards.new(addressa2OasWa, {from: accounts[1]});
		const uintcwdHj3C = BigInt("112")
		const addressTBFNoBC = accounts[5]
		const addresssnPygmO = accounts[5]
		const uint256eLbXYtB = await FrogDAOGovernanceRewardspWTSAN9.withdraw.call(uintcwdHj3C, {from: accounts[3]});
		await FrogDAOGovernanceRewardspWTSAN9.exit.call({from: accounts[3]});
		const uint256rbIXkx1 = await FrogDAOGovernanceRewardspWTSAN9.earned.call(addressTBFNoBC, {from: accounts[0]});
		const addressDM37VLF = await FrogDAOGovernanceRewardspWTSAN9.updateReward.call(addresssnPygmO, {from: accounts[4]});

		await expect(FrogDAOGovernanceRewardspWTSAN9.withdraw.call(uintcwdHj3C, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressIDSbDjm = accounts[4]
		const FrogDAOGovernanceRewardsWe2rsWO = await FrogDAOGovernanceRewards.new(addressIDSbDjm, {from: accounts[0]});
		const addressqldasZK = accounts[0]
		const uint256EQpPtU0 = await FrogDAOGovernanceRewardsWe2rsWO.devFundAvailable.call({from: accounts[3]});
		const uint256AqnsgiD = await FrogDAOGovernanceRewardsWe2rsWO.devFundAvailable.call({from: accounts[3]});
		await FrogDAOGovernanceRewardsWe2rsWO.renounceDevAddr.call({from: accounts[2]});
		const addresskgmgpAl = await FrogDAOGovernanceRewardsWe2rsWO.updateReward.call(addressqldasZK, {from: accounts[3]});
		await FrogDAOGovernanceRewardsWe2rsWO.getReward.call({from: accounts[4]});

		assert.equal(uint256AqnsgiD, BigInt("0"))
		assert.equal(uint256EQpPtU0, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsWe2rsWO.renounceDevAddr.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressVUGTRu3 = "0x0000000000000000000000000000000000000001"
		const FrogDAOGovernanceRewardsTRQwBBW = await FrogDAOGovernanceRewards.new(addressVUGTRu3, {from: accounts[2]});
		const addresssN3Wkyw = accounts[1]
		await FrogDAOGovernanceRewardsTRQwBBW.getReward.call({from: accounts[3]});
		const uint256gnFDYHQ = await FrogDAOGovernanceRewardsTRQwBBW.rewardPerToken.call({from: accounts[2]});
		const uint256vVlKRoL = await FrogDAOGovernanceRewardsTRQwBBW.devFundAvailable.call({from: accounts[0]});
		await FrogDAOGovernanceRewardsTRQwBBW.getReward.call({from: accounts[5]});
		const uint256QOdJNgj = await FrogDAOGovernanceRewardsTRQwBBW.earned.call(addresssN3Wkyw, {from: "0x0000000000000000000000000000000000000001"});
		await FrogDAOGovernanceRewardsTRQwBBW.renounceDevAddr.call({from: accounts[2]});

		await expect(FrogDAOGovernanceRewardsTRQwBBW.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressIUx0DRU = accounts[2]
		const FrogDAOGovernanceRewardspWTSAN9 = await FrogDAOGovernanceRewards.new(addressIUx0DRU, {from: accounts[1]});
		const uintLMk15tb = BigInt("1938")
		const uintNQSEB8I = BigInt("108")
		const addresspcXx25U = accounts[2]
		const addressMw43dyG = accounts[5]
		await FrogDAOGovernanceRewardspWTSAN9.exit.call({from: accounts[3]});
		const uint256f4aaEy5 = await FrogDAOGovernanceRewardspWTSAN9.stake.call(uintLMk15tb, {from: accounts[4]});
		const uint256Tk29WFM = await FrogDAOGovernanceRewardspWTSAN9.stake.call(uintNQSEB8I, {from: accounts[1]});
		const uint256rbIXkx1 = await FrogDAOGovernanceRewardspWTSAN9.earned.call(addresspcXx25U, {from: accounts[0]});
		const addressDM37VLF = await FrogDAOGovernanceRewardspWTSAN9.updateReward.call(addressMw43dyG, {from: accounts[4]});

		await expect(FrogDAOGovernanceRewardspWTSAN9.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressZDZ6gM1 = accounts[1]
		const FrogDAOGovernanceRewardsxIuIrSf = await FrogDAOGovernanceRewards.new(addressZDZ6gM1, {from: accounts[4]});
		const uintdsiB6Z0 = BigInt("216")
		const addressJhGZBYE = accounts[2]
		const uint256prDlPZm = await FrogDAOGovernanceRewardsxIuIrSf.rewardPerToken.call({from: accounts[2]});
		const uint256OK2bHfv = await FrogDAOGovernanceRewardsxIuIrSf.withdrawDevFund.call(uintdsiB6Z0, {from: accounts[4]});
		const uint256CnmAbWX = await FrogDAOGovernanceRewardsxIuIrSf.rewardPerToken.call({from: accounts[4]});
		const addressggRsWvi = await FrogDAOGovernanceRewardsxIuIrSf.transferDevAddr.call(addressJhGZBYE, {from: accounts[4]});

		assert.equal(uint256prDlPZm, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsxIuIrSf.withdrawDevFund.call(uintdsiB6Z0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressakz8krx = accounts[1]
		const FrogDAOGovernanceRewardsnPaeowy = await FrogDAOGovernanceRewards.new(addressakz8krx, {from: accounts[1]});
		const uintMkpm3M8 = BigInt("1776")
		const uint256fK1ZKI5 = await FrogDAOGovernanceRewardsnPaeowy.rewardPerToken.call({from: accounts[3]});
		const uint256XoZIsMQ = await FrogDAOGovernanceRewardsnPaeowy.notifyRewardAmount.call(uintMkpm3M8, {from: "0x0000000000000000000000000000000000000001"});
		const uint256jd8hAnk = await FrogDAOGovernanceRewardsnPaeowy.devFundAvailable.call({from: accounts[1]});

		assert.equal(uint256fK1ZKI5, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsnPaeowy.notifyRewardAmount.call(uintMkpm3M8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressvYOekD = accounts[2]
		const FrogDAOGovernanceRewardsnQgnqko = await FrogDAOGovernanceRewards.new(addressvYOekD, {from: "0x0000000000000000000000000000000000000001"});
		const uintKrpWIpO = BigInt("1384")
		const uints5SKBz = BigInt("14")
		const uint256MAZkCR = await FrogDAOGovernanceRewardsnQgnqko.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256bHeGyoH = await FrogDAOGovernanceRewardsnQgnqko.withdraw.call(uintKrpWIpO, {from: accounts[2]});
		const uint256MNEh7s = await FrogDAOGovernanceRewardsnQgnqko.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256AGiiyR8 = await FrogDAOGovernanceRewardsnQgnqko.lastTimeRewardApplicable.call({from: accounts[1]});
		await FrogDAOGovernanceRewardsnQgnqko.getReward.call({from: accounts[0]});
		const uint256GUfQDnG = await FrogDAOGovernanceRewardsnQgnqko.notifyRewardAmount.call(uints5SKBz, {from: accounts[0]});
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressfgNqy4w = accounts[1]
		const FrogDAOGovernanceRewardsnPaeowy = await FrogDAOGovernanceRewards.new(addressfgNqy4w, {from: accounts[1]});
		const uintlnuV6t = BigInt("1839")
		const uintCFlsVDc = BigInt("1249")
		const uint256k88wxJm = await FrogDAOGovernanceRewardsnPaeowy.notifyRewardAmount.call(uintlnuV6t, {from: accounts[1]});
		const uint256DlmDPuk = await FrogDAOGovernanceRewardsnPaeowy.stake.call(uintCFlsVDc, {from: accounts[0]});
		const uint256fK1ZKI5 = await FrogDAOGovernanceRewardsnPaeowy.rewardPerToken.call({from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsnPaeowy.notifyRewardAmount.call(uintlnuV6t, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const address8PSnqj = accounts[3]
		const FrogDAOGovernanceRewardsWuD6o5C = await FrogDAOGovernanceRewards.new(address8PSnqj, {from: accounts[2]});
		const addressEreEa4o = accounts[2]
		const uintXbvRs9x = BigInt("1593")
		const addresshBlSIK4 = await FrogDAOGovernanceRewardsWuD6o5C.transferDevAddr.call(addressEreEa4o, {from: accounts[3]});
		const uint256Yw1fScy = await FrogDAOGovernanceRewardsWuD6o5C.withdrawDevFund.call(uintXbvRs9x, {from: accounts[4]});

		await expect(FrogDAOGovernanceRewardsWuD6o5C.withdrawDevFund.call(uintXbvRs9x, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressNPp2ft8 = accounts[1]
		const FrogDAOGovernanceRewardsnPaeowy = await FrogDAOGovernanceRewards.new(addressNPp2ft8, {from: accounts[1]});
		const uintVQ1N75V = BigInt("598")
		const addressFAabT2f = accounts[2]
		const uint256rVsQ0iw = await FrogDAOGovernanceRewardsnPaeowy.withdrawDevFund.call(uintVQ1N75V, {from: accounts[1]});
		await FrogDAOGovernanceRewardsnPaeowy.checkStart.call({from: accounts[2]});
		const addressvV8L2Ey = await FrogDAOGovernanceRewardsnPaeowy.updateReward.call(addressFAabT2f, {from: accounts[5]});
		const uint256fK1ZKI5 = await FrogDAOGovernanceRewardsnPaeowy.rewardPerToken.call({from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsnPaeowy.withdrawDevFund.call(uintVQ1N75V, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})