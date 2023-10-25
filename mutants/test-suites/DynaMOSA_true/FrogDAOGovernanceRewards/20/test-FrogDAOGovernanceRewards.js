const FrogDAOGovernanceRewards = artifacts.require("FrogDAOGovernanceRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAOGovernanceRewards', (accounts) => {
	it('test for FrogDAOGovernanceRewards', async () => {
		const address4tk9va = accounts[0]
		const FrogDAOGovernanceRewardsUqI0kwJ = await FrogDAOGovernanceRewards.new(address4tk9va, {from: accounts[0]});
		const addressZnzj7p = "0x0000000000000000000000000000000000000001"
//		await FrogDAOGovernanceRewardsUqI0kwJ.checkhalve.call({from: accounts[1]});
//		const uint256E100WIZ = await FrogDAOGovernanceRewardsUqI0kwJ.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256EyhYeKU = await FrogDAOGovernanceRewardsUqI0kwJ.earned.call(addressZnzj7p, {from: accounts[4]});

		await expect(FrogDAOGovernanceRewardsUqI0kwJ.checkhalve.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressjXpt1v = accounts[5]
		const FrogDAOGovernanceRewardsRpMQJzt = await FrogDAOGovernanceRewards.new(addressjXpt1v, {from: "0x0000000000000000000000000000000000000001"});
		const uintVmh57iL = BigInt("620")
		const addressA8rlCN = "0x0000000000000000000000000000000000000001"
		const uintwZpBGZI = BigInt("1981")
		const uintYKd1LSE = BigInt("1375")
		const uint256uMR6j7R = await FrogDAOGovernanceRewardsRpMQJzt.withdraw.call(uintVmh57iL, {from: accounts[1]});
		const uint256wR4BkX = await FrogDAOGovernanceRewardsRpMQJzt.rewardPerToken.call({from: accounts[4]});
		const addressOhZMNVu = await FrogDAOGovernanceRewardsRpMQJzt.updateReward.call(addressA8rlCN, {from: accounts[0]});
		const uint256P0W4fyt = await FrogDAOGovernanceRewardsRpMQJzt.notifyRewardAmount.call(uintwZpBGZI, {from: accounts[5]});
		const uint256KBLJVW = await FrogDAOGovernanceRewardsRpMQJzt.notifyRewardAmount.call(uintYKd1LSE, {from: accounts[3]});
		await FrogDAOGovernanceRewardsRpMQJzt.getReward.call({from: accounts[5]});
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressmWDU3xA = accounts[3]
		const FrogDAOGovernanceRewardscYTp3jp = await FrogDAOGovernanceRewards.new(addressmWDU3xA, {from: accounts[2]});
		const uintFubYXXN = BigInt("51")
		const addressGqDZMDy = accounts[4]
		const uint256OSqSdOw = await FrogDAOGovernanceRewardscYTp3jp.lastTimeRewardApplicable.call({from: accounts[4]});
//		const uint256HJ92Zi = await FrogDAOGovernanceRewardscYTp3jp.stake.call(uintFubYXXN, {from: accounts[4]});
//		const addressSlGZdsf = await FrogDAOGovernanceRewardscYTp3jp.updateReward.call(addressGqDZMDy, {from: accounts[2]});

		assert.equal(uint256OSqSdOw, BigInt("0"))
		await expect(FrogDAOGovernanceRewardscYTp3jp.stake.call(uintFubYXXN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressucbUBWH = accounts[3]
		const FrogDAOGovernanceRewardsjVoYY6I = await FrogDAOGovernanceRewards.new(addressucbUBWH, {from: accounts[0]});
		const uintvw3Ogn6 = BigInt("1032")
		const addressVFtrA3I = accounts[2]
		const uinty13KXpp = BigInt("1031")
//		await FrogDAOGovernanceRewardsjVoYY6I.renounceDevAddr.call({from: accounts[1]});
//		const uint256NFWSJVo = await FrogDAOGovernanceRewardsjVoYY6I.stake.call(uintvw3Ogn6, {from: accounts[4]});
//		const uint256PM5KyWl = await FrogDAOGovernanceRewardsjVoYY6I.earned.call(addressVFtrA3I, {from: accounts[4]});
//		const uint256DZaOBVi = await FrogDAOGovernanceRewardsjVoYY6I.notifyRewardAmount.call(uinty13KXpp, {from: accounts[2]});
//		const uint256ra3pXVj = await FrogDAOGovernanceRewardsjVoYY6I.lastTimeRewardApplicable.call({from: accounts[1]});

		await expect(FrogDAOGovernanceRewardsjVoYY6I.renounceDevAddr.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressMjb5ymj = accounts[3]
		const FrogDAOGovernanceRewardsHVGvOvx = await FrogDAOGovernanceRewards.new(addressMjb5ymj, {from: accounts[4]});
		const uintVFFzlUr = BigInt("1976")
//		const uint256zdenOnL = await FrogDAOGovernanceRewardsHVGvOvx.withdraw.call(uintVFFzlUr, {from: accounts[4]});
//		const uint256YM1Q3d4 = await FrogDAOGovernanceRewardsHVGvOvx.lastTimeRewardApplicable.call({from: accounts[2]});
//		const uint256ljQsMw = await FrogDAOGovernanceRewardsHVGvOvx.lastTimeRewardApplicable.call({from: accounts[2]});
//		const uint256MNou3Uu = await FrogDAOGovernanceRewardsHVGvOvx.rewardPerToken.call({from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsHVGvOvx.withdraw.call(uintVFFzlUr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressr94PQnK = accounts[3]
		const FrogDAOGovernanceRewardscYTp3jp = await FrogDAOGovernanceRewards.new(addressr94PQnK, {from: accounts[2]});
		const uintdoSmoOB = BigInt("1272")
		const addressd22nuVt = accounts[3]
		const uint256OSqSdOw = await FrogDAOGovernanceRewardscYTp3jp.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256KywEr1r = await FrogDAOGovernanceRewardscYTp3jp.devFundAvailable.call({from: accounts[5]});
//		const uint256HJ92Zi = await FrogDAOGovernanceRewardscYTp3jp.stake.call(uintdoSmoOB, {from: accounts[4]});
//		const addressSlGZdsf = await FrogDAOGovernanceRewardscYTp3jp.updateReward.call(addressd22nuVt, {from: accounts[2]});

		assert.equal(uint256KywEr1r, BigInt("0"))
		assert.equal(uint256OSqSdOw, BigInt("0"))
		await expect(FrogDAOGovernanceRewardscYTp3jp.stake.call(uintdoSmoOB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressIYQHaLR = accounts[3]
		const FrogDAOGovernanceRewardscYTp3jp = await FrogDAOGovernanceRewards.new(addressIYQHaLR, {from: accounts[2]});
		const uintj1XBZmX = BigInt("57")
		const uintdtVJziN = BigInt("1748")
		const addresskMNhE7a = accounts[4]
		const uint256OSqSdOw = await FrogDAOGovernanceRewardscYTp3jp.lastTimeRewardApplicable.call({from: accounts[4]});
//		await FrogDAOGovernanceRewardscYTp3jp.exit.call({from: accounts[1]});
//		const uint256HJ92Zi = await FrogDAOGovernanceRewardscYTp3jp.stake.call(uintj1XBZmX, {from: accounts[4]});
//		await FrogDAOGovernanceRewardscYTp3jp.exit.call({from: accounts[2]});
//		const uint256O6wzUYk = await FrogDAOGovernanceRewardscYTp3jp.notifyRewardAmount.call(uintdtVJziN, {from: accounts[1]});
//		const addressSlGZdsf = await FrogDAOGovernanceRewardscYTp3jp.updateReward.call(addresskMNhE7a, {from: accounts[2]});

		assert.equal(uint256OSqSdOw, BigInt("0"))
		await expect(FrogDAOGovernanceRewardscYTp3jp.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressYb66BWA = accounts[3]
		const FrogDAOGovernanceRewardscYTp3jp = await FrogDAOGovernanceRewards.new(addressYb66BWA, {from: accounts[2]});
		const uintWhaxB4F = BigInt("1812")
		const addressRfKrvW3 = accounts[3]
//		const uint256sxRBcE0 = await FrogDAOGovernanceRewardscYTp3jp.withdrawDevFund.call(uintWhaxB4F, {from: "0x0000000000000000000000000000000000000001"});
//		await FrogDAOGovernanceRewardscYTp3jp.checkhalve.call({from: accounts[2]});
//		const addressSlGZdsf = await FrogDAOGovernanceRewardscYTp3jp.updateReward.call(addressRfKrvW3, {from: accounts[2]});

		await expect(FrogDAOGovernanceRewardscYTp3jp.withdrawDevFund.call(uintWhaxB4F, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressZ3ZCVrF = accounts[3]
		const FrogDAOGovernanceRewardscYTp3jp = await FrogDAOGovernanceRewards.new(addressZ3ZCVrF, {from: accounts[2]});
		const uintUqkNfKQ = BigInt("391")
		const uintVPaanr = BigInt("63")
//		const uint256vVPfN2Z = await FrogDAOGovernanceRewardscYTp3jp.notifyRewardAmount.call(uintUqkNfKQ, {from: accounts[0]});
//		await FrogDAOGovernanceRewardscYTp3jp.exit.call({from: accounts[2]});
//		const uint256HJ92Zi = await FrogDAOGovernanceRewardscYTp3jp.stake.call(uintVPaanr, {from: accounts[4]});
//		const uint256pBovKu = await FrogDAOGovernanceRewardscYTp3jp.devFundAvailable.call({from: accounts[0]});

		await expect(FrogDAOGovernanceRewardscYTp3jp.notifyRewardAmount.call(uintUqkNfKQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressN2A6tSB = accounts[3]
		const FrogDAOGovernanceRewardscYTp3jp = await FrogDAOGovernanceRewards.new(addressN2A6tSB, {from: accounts[2]});
		const addressDQB0ejw = accounts[3]
		const uintrqYfvQV = BigInt("1812")
		const addressC9TRhCx = accounts[5]
//		const addressOvuVSLC = await FrogDAOGovernanceRewardscYTp3jp.transferDevAddr.call(addressDQB0ejw, {from: accounts[2]});
//		const uint256sxRBcE0 = await FrogDAOGovernanceRewardscYTp3jp.withdrawDevFund.call(uintrqYfvQV, {from: "0x0000000000000000000000000000000000000001"});
//		const addressUc73Cer = await FrogDAOGovernanceRewardscYTp3jp.transferDevAddr.call(addressC9TRhCx, {from: accounts[4]});
//		await FrogDAOGovernanceRewardscYTp3jp.checkhalve.call({from: accounts[2]});

		await expect(FrogDAOGovernanceRewardscYTp3jp.transferDevAddr.call(addressDQB0ejw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresswAzewcY = accounts[1]
		const FrogDAOGovernanceRewardszoOSmmC = await FrogDAOGovernanceRewards.new(addresswAzewcY, {from: accounts[4]});
		const uintuHMbvm = BigInt("1672")
		const addressr7TAuoQ = accounts[3]
		const uint256NIZeA1x = await FrogDAOGovernanceRewardszoOSmmC.devFundAvailable.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256KBkmrVN = await FrogDAOGovernanceRewardszoOSmmC.withdrawDevFund.call(uintuHMbvm, {from: accounts[1]});
//		const address1r6KVK = await FrogDAOGovernanceRewardszoOSmmC.updateReward.call(addressr7TAuoQ, {from: accounts[0]});

		assert.equal(uint256NIZeA1x, BigInt("0"))
		await expect(FrogDAOGovernanceRewardszoOSmmC.withdrawDevFund.call(uintuHMbvm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressktXEonB = accounts[3]
		const FrogDAOGovernanceRewardscYTp3jp = await FrogDAOGovernanceRewards.new(addressktXEonB, {from: accounts[2]});
		const uintXA0XSAz = BigInt("67")
		const addressiKJjKSi = accounts[1]
//		const uint256YlfNmfk = await FrogDAOGovernanceRewardscYTp3jp.notifyRewardAmount.call(uintXA0XSAz, {from: accounts[2]});
//		const addressOvuVSLC = await FrogDAOGovernanceRewardscYTp3jp.transferDevAddr.call(addressiKJjKSi, {from: accounts[2]});

		await expect(FrogDAOGovernanceRewardscYTp3jp.notifyRewardAmount.call(uintXA0XSAz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressrVeXl8i = accounts[3]
		const FrogDAOGovernanceRewardsgd3rvy2 = await FrogDAOGovernanceRewards.new(addressrVeXl8i, {from: accounts[1]});
		const addresstqigyhP = accounts[0]
		const addressZiPGjdx = accounts[4]
		const uintqLiE6KZ = BigInt("751")
		const uint256HTN4fbp = await FrogDAOGovernanceRewardsgd3rvy2.earned.call(addresstqigyhP, {from: "0x0000000000000000000000000000000000000001"});
		const uint256yCBbSeA = await FrogDAOGovernanceRewardsgd3rvy2.rewardPerToken.call({from: accounts[1]});
		const addressCVKfLCi = await FrogDAOGovernanceRewardsgd3rvy2.transferDevAddr.call(addressZiPGjdx, {from: accounts[3]});
//		const uint256J5vECeO = await FrogDAOGovernanceRewardsgd3rvy2.withdrawDevFund.call(uintqLiE6KZ, {from: accounts[4]});

		assert.equal(uint256HTN4fbp, BigInt("0"))
		assert.equal(uint256yCBbSeA, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsgd3rvy2.withdrawDevFund.call(uintqLiE6KZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})