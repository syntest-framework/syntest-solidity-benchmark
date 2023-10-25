const FrogDAOGovernanceRewards = artifacts.require("FrogDAOGovernanceRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAOGovernanceRewards', (accounts) => {
	it('test for FrogDAOGovernanceRewards', async () => {
		const addressOEoLXAF = accounts[4]
		const FrogDAOGovernanceRewardsICx5U1B = await FrogDAOGovernanceRewards.new(addressOEoLXAF, {from: accounts[4]});
//		await FrogDAOGovernanceRewardsICx5U1B.exit.call({from: accounts[5]});
//		await FrogDAOGovernanceRewardsICx5U1B.getReward.call({from: accounts[1]});

		await expect(FrogDAOGovernanceRewardsICx5U1B.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressS6fAzGM = accounts[0]
		const FrogDAOGovernanceRewardsUGucZNK = await FrogDAOGovernanceRewards.new(addressS6fAzGM, {from: "0x0000000000000000000000000000000000000001"});
		const addressityI0PG = accounts[1]
		const uintIeUUoDc = BigInt("953")
		const addressuTGiLr1 = accounts[4]
		const uint256it1Cyzb = await FrogDAOGovernanceRewardsUGucZNK.rewardPerToken.call({from: accounts[2]});
		const addressIMZjYY = await FrogDAOGovernanceRewardsUGucZNK.updateReward.call(addressityI0PG, {from: accounts[0]});
		const uint2565ZfMYi = await FrogDAOGovernanceRewardsUGucZNK.withdraw.call(uintIeUUoDc, {from: "0x0000000000000000000000000000000000000001"});
		const uint256nnKPlJR = await FrogDAOGovernanceRewardsUGucZNK.devFundAvailable.call({from: accounts[2]});
		await FrogDAOGovernanceRewardsUGucZNK.checkStart.call({from: accounts[2]});
		const uint256jI0heYa = await FrogDAOGovernanceRewardsUGucZNK.earned.call(addressuTGiLr1, {from: accounts[2]});
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressogbTGPA = accounts[1]
		const FrogDAOGovernanceRewardsBxK9kUr = await FrogDAOGovernanceRewards.new(addressogbTGPA, {from: accounts[0]});
		const uintH9gqIo = BigInt("1327")
		const uint256cU3vYvP = await FrogDAOGovernanceRewardsBxK9kUr.rewardPerToken.call({from: accounts[2]});
//		await FrogDAOGovernanceRewardsBxK9kUr.renounceDevAddr.call({from: accounts[0]});
//		await FrogDAOGovernanceRewardsBxK9kUr.checkStart.call({from: accounts[3]});
//		const uint256iMBOG0P = await FrogDAOGovernanceRewardsBxK9kUr.withdraw.call(uintH9gqIo, {from: accounts[5]});

		assert.equal(uint256cU3vYvP, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsBxK9kUr.renounceDevAddr.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressLbpBE04 = accounts[4]
		const FrogDAOGovernanceRewardsn3fjIPv = await FrogDAOGovernanceRewards.new(addressLbpBE04, {from: accounts[2]});
		const uintLDkvC5M = BigInt("1127")
		const uintBOApQjP = BigInt("909")
		const addressBmazm5a = accounts[4]
//		const uint256vqNKvTU = await FrogDAOGovernanceRewardsn3fjIPv.withdrawDevFund.call(uintLDkvC5M, {from: accounts[3]});
//		const uint256uzjzZY = await FrogDAOGovernanceRewardsn3fjIPv.stake.call(uintBOApQjP, {from: accounts[1]});
//		const addressgzKXeX = await FrogDAOGovernanceRewardsn3fjIPv.transferDevAddr.call(addressBmazm5a, {from: accounts[1]});
//		await FrogDAOGovernanceRewardsn3fjIPv.exit.call({from: accounts[4]});
//		await FrogDAOGovernanceRewardsn3fjIPv.exit.call({from: accounts[2]});

		await expect(FrogDAOGovernanceRewardsn3fjIPv.withdrawDevFund.call(uintLDkvC5M, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresstw7CUk8 = accounts[4]
		const FrogDAOGovernanceRewardsXIxF9Rc = await FrogDAOGovernanceRewards.new(addresstw7CUk8, {from: accounts[2]});
		const addressqUkvBWZ = "0x0000000000000000000000000000000000000001"
		const uint256JFB6SXb = await FrogDAOGovernanceRewardsXIxF9Rc.devFundAvailable.call({from: accounts[4]});
		const uint256wghF6Fo = await FrogDAOGovernanceRewardsXIxF9Rc.earned.call(addressqUkvBWZ, {from: accounts[0]});
//		await FrogDAOGovernanceRewardsXIxF9Rc.checkhalve.call({from: accounts[1]});

		assert.equal(uint256JFB6SXb, BigInt("0"))
		assert.equal(uint256wghF6Fo, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsXIxF9Rc.checkhalve.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressWN2OHXP = accounts[4]
		const FrogDAOGovernanceRewardsXIxF9Rc = await FrogDAOGovernanceRewards.new(addressWN2OHXP, {from: accounts[2]});
		const addresssOlcEAx = accounts[4]
		const addressVzbuuZX = accounts[4]
		const uint256JFB6SXb = await FrogDAOGovernanceRewardsXIxF9Rc.devFundAvailable.call({from: accounts[4]});
//		const addressv4WaKf = await FrogDAOGovernanceRewardsXIxF9Rc.transferDevAddr.call(addresssOlcEAx, {from: accounts[3]});
//		const uint256wghF6Fo = await FrogDAOGovernanceRewardsXIxF9Rc.earned.call(addressVzbuuZX, {from: accounts[0]});
//		await FrogDAOGovernanceRewardsXIxF9Rc.checkhalve.call({from: accounts[1]});

		assert.equal(uint256JFB6SXb, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsXIxF9Rc.transferDevAddr.call(addresssOlcEAx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresszGTxXQu = accounts[4]
		const FrogDAOGovernanceRewardsICx5U1B = await FrogDAOGovernanceRewards.new(addresszGTxXQu, {from: accounts[4]});
//		await FrogDAOGovernanceRewardsICx5U1B.getReward.call({from: accounts[1]});

		await expect(FrogDAOGovernanceRewardsICx5U1B.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressricoqPa = accounts[4]
		const FrogDAOGovernanceRewardsXIxF9Rc = await FrogDAOGovernanceRewards.new(addressricoqPa, {from: accounts[2]});
		const uinticMvFVp = BigInt("1664")
		const addressoPBB67 = accounts[5]
//		const uint256CbVLNem = await FrogDAOGovernanceRewardsXIxF9Rc.notifyRewardAmount.call(uinticMvFVp, {from: accounts[0]});
//		const uint256JFB6SXb = await FrogDAOGovernanceRewardsXIxF9Rc.devFundAvailable.call({from: accounts[4]});
//		const uint256wghF6Fo = await FrogDAOGovernanceRewardsXIxF9Rc.earned.call(addressoPBB67, {from: accounts[0]});
//		await FrogDAOGovernanceRewardsXIxF9Rc.checkhalve.call({from: accounts[1]});

		await expect(FrogDAOGovernanceRewardsXIxF9Rc.notifyRewardAmount.call(uinticMvFVp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const address08tgbH = accounts[3]
		const FrogDAOGovernanceRewardsR34T3P9 = await FrogDAOGovernanceRewards.new(address08tgbH, {from: accounts[4]});
		const uintXGv2oTF = BigInt("545")
		const uint256wmvbz2h = await FrogDAOGovernanceRewardsR34T3P9.rewardPerToken.call({from: accounts[3]});
		const uint256MtAoaDw = await FrogDAOGovernanceRewardsR34T3P9.devFundAvailable.call({from: accounts[1]});
//		const uint256KRorhEO = await FrogDAOGovernanceRewardsR34T3P9.withdraw.call(uintXGv2oTF, {from: accounts[5]});

		assert.equal(uint256MtAoaDw, BigInt("0"))
		assert.equal(uint256wmvbz2h, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsR34T3P9.withdraw.call(uintXGv2oTF, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressGHwjzOb = accounts[4]
		const FrogDAOGovernanceRewardsXIxF9Rc = await FrogDAOGovernanceRewards.new(addressGHwjzOb, {from: accounts[2]});
		const addressYgnQ5t = "0x00000000000000000000000000000000000000-1"
		const addressAHTOZ2M = accounts[2]
		const uintdinH2gZ = BigInt("1727")
		const uint256JFB6SXb = await FrogDAOGovernanceRewardsXIxF9Rc.devFundAvailable.call({from: accounts[4]});
//		const uint256wghF6Fo = await FrogDAOGovernanceRewardsXIxF9Rc.earned.call(addressYgnQ5t, {from: accounts[0]});
//		await FrogDAOGovernanceRewardsXIxF9Rc.checkhalve.call({from: accounts[1]});
//		const uint256dGf2pYJ = await FrogDAOGovernanceRewardsXIxF9Rc.earned.call(addressAHTOZ2M, {from: accounts[2]});
//		const uint256VzT8Ek6 = await FrogDAOGovernanceRewardsXIxF9Rc.withdrawDevFund.call(uintdinH2gZ, {from: accounts[2]});

		assert.equal(uint256JFB6SXb, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsXIxF9Rc.earned.call(addressYgnQ5t, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressZ47DctI = accounts[2]
		const FrogDAOGovernanceRewardsSl0yhfX = await FrogDAOGovernanceRewards.new(addressZ47DctI, {from: accounts[0]});
		const uintUALXTNM = BigInt("1491")
		const uintxZEgC3j = BigInt("1385")
//		const uint256cPzFIuo = await FrogDAOGovernanceRewardsSl0yhfX.notifyRewardAmount.call(uintUALXTNM, {from: accounts[0]});
//		const uint256F040Q5n = await FrogDAOGovernanceRewardsSl0yhfX.notifyRewardAmount.call(uintxZEgC3j, {from: accounts[3]});
//		await FrogDAOGovernanceRewardsSl0yhfX.checkStart.call({from: accounts[1]});
//		const uint256Yr3elIZ = await FrogDAOGovernanceRewardsSl0yhfX.rewardPerToken.call({from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsSl0yhfX.notifyRewardAmount.call(uintUALXTNM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressuGEzMq = accounts[3]
		const FrogDAOGovernanceRewardsAGpfYls = await FrogDAOGovernanceRewards.new(addressuGEzMq, {from: accounts[0]});
		const addressfjth7b2 = accounts[2]
		const uintS56AQS3 = BigInt("1673")
		const uint256c7IfFeI = await FrogDAOGovernanceRewardsAGpfYls.earned.call(addressfjth7b2, {from: accounts[3]});
//		const uint256wN8Bb6A = await FrogDAOGovernanceRewardsAGpfYls.withdrawDevFund.call(uintS56AQS3, {from: accounts[3]});
//		await FrogDAOGovernanceRewardsAGpfYls.exit.call({from: accounts[5]});
//		await FrogDAOGovernanceRewardsAGpfYls.exit.call({from: accounts[2]});

		assert.equal(uint256c7IfFeI, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsAGpfYls.withdrawDevFund.call(uintS56AQS3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})