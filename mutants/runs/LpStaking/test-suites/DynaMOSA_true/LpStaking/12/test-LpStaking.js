const LpStaking = artifacts.require("LpStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LpStaking', (accounts) => {
	it('test for LpStaking', async () => {
		const LpStakingiBp3izM = await LpStaking.new({from: accounts[0]});
		const addressQO3FdFt = accounts[3]
		const boolSmZF8AJ = false
		const byteUL5JUGf = "0x081f1a021f160a0a1d0d1f051901021b03180b1b11000f05080804080c0c071d"
		const byteHCgvLOI = "0x141c1e121113191d0506191b070b0e030c1c1a011c0e0d020b20160e1804070c"
		const uintBJ3sgs = BigInt("11")
		const uintdyR7VEc = BigInt("1457")
		const uintCm0P1i3 = BigInt("1507")
		const addressGYF9TNv = await LpStakingiBp3izM.transferOwnership.call(addressQO3FdFt, {from: accounts[0]});
		await LpStakingiBp3izM.lpRewardRateChanged.call({from: accounts[2]});
		const booldUoytoC = await LpStakingiBp3izM.setEmergencyStop.call(boolSmZF8AJ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Y6LXbqg = await LpStakingiBp3izM.stakeWithPermit.call(uintCm0P1i3, uintdyR7VEc, uintBJ3sgs, byteHCgvLOI, byteUL5JUGf, {from: accounts[3]});
		await LpStakingiBp3izM.getIncome.call({from: accounts[2]});

		await expect(LpStakingiBp3izM.transferOwnership.call(addressQO3FdFt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingsjjvQU = await LpStaking.new({from: accounts[4]});
		const uintogTy1V = BigInt("1323")
		const uintGbLH6UH = BigInt("117")
		const addressDGAu84 = accounts[4]
		const uint256qiq1ocK = await LpStakingsjjvQU.getCurIncomeRate.call({from: accounts[4]});
		const uint256rujVojq = await LpStakingsjjvQU.incomePerToken.call({from: accounts[4]});
		const uint256q9zihZs = await LpStakingsjjvQU.stake.call(uintogTy1V, {from: accounts[4]});
		const addressFrsU5K8 = await LpStakingsjjvQU.inCaseTokensGetStuck.call(addressDGAu84, uintGbLH6UH, {from: accounts[2]});

		await expect(LpStakingsjjvQU.getCurIncomeRate.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingP7MO3X5 = await LpStaking.new({from: accounts[0]});
		const uintSm6ULl5 = BigInt("825")
		const addressVSCwlm7 = accounts[1]
		const uint256XWZ6YbE = await LpStakingP7MO3X5.rewardPerToken.call({from: accounts[1]});
		const addressrmioo3 = await LpStakingP7MO3X5.inCaseTokensGetStuck.call(addressVSCwlm7, uintSm6ULl5, {from: accounts[2]});
		await LpStakingP7MO3X5.nonEmergencyStop.call({from: accounts[0]});

		assert.equal(uint256XWZ6YbE, BigInt("0"))
		await expect(LpStakingP7MO3X5.inCaseTokensGetStuck.call(addressVSCwlm7, uintSm6ULl5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingS78UKv = await LpStaking.new({from: accounts[2]});
		const uintvtMi9hb = BigInt("3")
		const addressD2QM1QY = accounts[4]
		const uinte8h0AI = BigInt("1903")
		const uintxWzwueh = BigInt("1986")
		const uint256C8SqGi = await LpStakingS78UKv.weiToSatoshi.call(uintvtMi9hb, {from: accounts[1]});
		const uint256z9LR45t = await LpStakingS78UKv.incomeEarned.call(addressD2QM1QY, {from: accounts[5]});
		const uint256nOb6RCO = await LpStakingS78UKv.stake.call(uinte8h0AI, {from: accounts[5]});
		await LpStakingS78UKv.nonEmergencyStop.call({from: accounts[1]});
		const uint256ybWw5Rf = await LpStakingS78UKv.withdraw.call(uintxWzwueh, {from: accounts[4]});

		assert.equal(uint256C8SqGi, BigInt("0"))
		await expect(LpStakingS78UKv.incomeEarned.call(addressD2QM1QY, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingSPop3F = await LpStaking.new({from: accounts[5]});
		const uintwoZIaZ = BigInt("342")
		const addressIdE7f1l = accounts[2]
		const addressFVFo0R8 = accounts[1]
		const uint256D8rBTWj = await LpStakingSPop3F.stake.call(uintwoZIaZ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256gE4woS = await LpStakingSPop3F.getUserAccumulatedWithdrawIncome.call(addressIdE7f1l, {from: accounts[1]});
		const uint256q46ZM04 = await LpStakingSPop3F.incomeEarned.call(addressFVFo0R8, {from: accounts[2]});
		const uint256oF2X4IL = await LpStakingSPop3F.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(LpStakingSPop3F.stake.call(uintwoZIaZ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakinguK3wxN = await LpStaking.new({from: accounts[1]});
		const uintJNHSwbS = BigInt("465")
		await LpStakinguK3wxN.lpRewardRateChanged.call({from: accounts[0]});
		const uint256c3soyf = await LpStakinguK3wxN.getCurIncomeRate.call({from: accounts[3]});
		const uint256M44vGZ8 = await LpStakinguK3wxN.weiToSatoshi.call(uintJNHSwbS, {from: accounts[2]});
		await LpStakinguK3wxN.getReward.call({from: accounts[0]});

		await expect(LpStakinguK3wxN.lpRewardRateChanged.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingg81UxC7 = await LpStaking.new({from: accounts[3]});
		const addressdgNkeoh = accounts[1]
		const addressR6x3a4 = accounts[0]
		const addressb5LoWoC = accounts[0]
		const addressLhqfJbR = accounts[1]
		const addressn9zsifW = await LpStakingg81UxC7.initialize.call(addressLhqfJbR, addressb5LoWoC, addressR6x3a4, addressdgNkeoh, {from: accounts[1]});
		await LpStakingg81UxC7.getIncome.call({from: accounts[5]});
		await LpStakingg81UxC7.nonEmergencyStop.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256mynE3q9 = await LpStakingg81UxC7.getCurIncomeRate.call({from: accounts[1]});

		await expect(LpStakingg81UxC7.getIncome.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingVTmpYi = await LpStaking.new({from: accounts[1]});
		const addressNmDGmXx = accounts[1]
		const uint256bKbgMd5 = await LpStakingVTmpYi.rewardPerToken.call({from: accounts[1]});
		const addressiC3NVxg = await LpStakingVTmpYi.updateReward.call(addressNmDGmXx, {from: accounts[0]});

		assert.equal(uint256bKbgMd5, BigInt("0"))
		await expect(LpStakingVTmpYi.updateReward.call(addressNmDGmXx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingVTmpYi = await LpStaking.new({from: accounts[1]});
		const addressTAsxGfR = accounts[4]
		const addressVD1qmfi = accounts[1]
		const uintK4t6xSp = BigInt("567")
		const addresshRExjQc = accounts[0]
		const addressoAPpJPQ = accounts[4]
		const addresssBrY81t = accounts[4]
		const addressBedoy5J = accounts[2]
		const uint256bKbgMd5 = await LpStakingVTmpYi.rewardPerToken.call({from: accounts[1]});
		const uint256JyvubuU = await LpStakingVTmpYi.rewardEarned.call(addressTAsxGfR, {from: accounts[1]});
		const addressMhgGw1k = await LpStakingVTmpYi.transferOwnership.call(addressVD1qmfi, {from: accounts[4]});
		const addressbaGfYD5 = await LpStakingVTmpYi.inCaseTokensGetStuck.call(addresshRExjQc, uintK4t6xSp, {from: accounts[3]});
		const uint256unom8r = await LpStakingVTmpYi.incomeEarned.call(addressoAPpJPQ, {from: accounts[3]});
		const addressS6cj3hq = await LpStakingVTmpYi.updateReward.call(addresssBrY81t, {from: accounts[0]});
		await LpStakingVTmpYi.getReward.call({from: accounts[2]});
		const addressiC3NVxg = await LpStakingVTmpYi.updateReward.call(addressBedoy5J, {from: accounts[0]});

		assert.equal(uint256JyvubuU, BigInt("0"))
		assert.equal(uint256bKbgMd5, BigInt("0"))
		await expect(LpStakingVTmpYi.transferOwnership.call(addressVD1qmfi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingyghnb2p = await LpStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressTqbFJwO = accounts[3]
		const addresskG9q1xF = accounts[5]
		const addressR7RBvj6 = accounts[3]
		const addressUaRLeS = await LpStakingyghnb2p.updateIncome.call(addressTqbFJwO, {from: accounts[0]});
		const addressK6Euu26 = await LpStakingyghnb2p.transferOwnership.call(addresskG9q1xF, {from: accounts[2]});
		const addressJ1VQUS = await LpStakingyghnb2p.updateIncome.call(addressR7RBvj6, {from: "0x0000000000000000000000000000000000000001"});
		await LpStakingyghnb2p.nonReentrant.call({from: accounts[1]});
	});

	it('test for LpStaking', async () => {
		const LpStakingVTmpYi = await LpStaking.new({from: accounts[1]});
		const addressqUZgsBl = accounts[1]
		const uint256bKbgMd5 = await LpStakingVTmpYi.rewardPerToken.call({from: accounts[1]});
		const uint256xDVUix2 = await LpStakingVTmpYi.getUserAccumulatedWithdrawIncome.call(addressqUZgsBl, {from: accounts[4]});

		assert.equal(uint256bKbgMd5, BigInt("0"))
		assert.equal(uint256xDVUix2, BigInt("0"))
	});

	it('test for LpStaking', async () => {
		const LpStakingY9neYV = await LpStaking.new({from: accounts[1]});
		const addressU6VMT0g = accounts[0]
		await LpStakingY9neYV.exit.call({from: accounts[0]});
		const addressFTjQqkZ = await LpStakingY9neYV.transferOwnership.call(addressU6VMT0g, {from: accounts[1]});
		await LpStakingY9neYV.getIncome.call({from: accounts[4]});
		const uint256EJYNZOh = await LpStakingY9neYV.getCurIncomeRate.call({from: accounts[5]});

		await expect(LpStakingY9neYV.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})