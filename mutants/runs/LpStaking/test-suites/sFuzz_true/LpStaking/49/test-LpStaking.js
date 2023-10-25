const LpStaking = artifacts.require("LpStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LpStaking', (accounts) => {
	it('test for LpStaking', async () => {
		const LpStakingBrDjkWq = await LpStaking.new({from: accounts[1]});
		const addressPs0K3Ml = accounts[2]
		const addressDpkWZ2q = accounts[2]
		const addresslXOp1a = accounts[5]
		const addressdU74WDM = await LpStakingBrDjkWq.transferOwnership.call(addressPs0K3Ml, {from: accounts[4]});
		const uint256mDpYCGS = await LpStakingBrDjkWq.rewardEarned.call(addressDpkWZ2q, {from: accounts[4]});
		const uint256UVZ5q8a = await LpStakingBrDjkWq.getUserAccumulatedWithdrawIncome.call(addresslXOp1a, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LpStakingBrDjkWq.transferOwnership.call(addressPs0K3Ml, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingxVPFd8I = await LpStaking.new({from: accounts[2]});
		const byteMboKmv8 = "0x171f12050b1d10001c1a0b160502030b1a0d10141c151405100c1f031d11181e"
		const bytexOlUO7n = "0x13010608010401162018161908090c040f09180a0511170c00190c1a1b181408"
		const uintRbOTGAI = BigInt("70")
		const uintzpriGvX = BigInt("24")
		const uintL2dzWlZ = BigInt("674")
		const addresshHqpmGT = accounts[3]
		const addresspg8WC5h = accounts[4]
		const uintuzBrxYK = BigInt("728")
		const uint256ooka6gY = await LpStakingxVPFd8I.stakeWithPermit.call(uintL2dzWlZ, uintzpriGvX, uintRbOTGAI, bytexOlUO7n, byteMboKmv8, {from: accounts[2]});
		const addressItANeUV = await LpStakingxVPFd8I.transferOwnership.call(addresshHqpmGT, {from: accounts[0]});
		const uint256OBpOL4H = await LpStakingxVPFd8I.incomeEarned.call(addresspg8WC5h, {from: accounts[0]});
		const uint256JYYOsBZ = await LpStakingxVPFd8I.withdraw.call(uintuzBrxYK, {from: accounts[5]});

		await expect(LpStakingxVPFd8I.stakeWithPermit.call(uintL2dzWlZ, uintzpriGvX, uintRbOTGAI, bytexOlUO7n, byteMboKmv8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingdVCfRY5 = await LpStaking.new({from: accounts[3]});
		const uintRa9kvYT = BigInt("829")
		const uint256UQuJlc = await LpStakingdVCfRY5.incomePerToken.call({from: accounts[3]});
		await LpStakingdVCfRY5.nonEmergencyStop.call({from: accounts[0]});
		const uint256LB6EcSy = await LpStakingdVCfRY5.weiToSatoshi.call(uintRa9kvYT, {from: accounts[5]});
		const uint256dUmQ9ku = await LpStakingdVCfRY5.lastTimeRewardApplicable.call({from: accounts[1]});

		await expect(LpStakingdVCfRY5.incomePerToken.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingML8qbD = await LpStaking.new({from: accounts[3]});
		const addresstDDbTSo = accounts[2]
		const addresslOx452y = accounts[5]
		const addressN0sRDuy = accounts[0]
		const uint256dVjrYx = await LpStakingML8qbD.lastTimeRewardApplicable.call({from: accounts[0]});
		const addresswlqt2eM = await LpStakingML8qbD.updateIncome.call(addresstDDbTSo, {from: accounts[3]});
		const addressjvJqr1A = await LpStakingML8qbD.updateReward.call(addresslOx452y, {from: accounts[1]});
		const uint256To5hP2K = await LpStakingML8qbD.getCurIncomeRate.call({from: accounts[4]});
		const addressJ7m8TC2 = await LpStakingML8qbD.transferOwnership.call(addressN0sRDuy, {from: accounts[4]});

		await expect(LpStakingML8qbD.lastTimeRewardApplicable.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingW94QJW = await LpStaking.new({from: accounts[4]});
		const uintfyG9lc = BigInt("746")
		const uintNSESmJ = BigInt("120")
		const addressplxa8FB = accounts[1]
		const uint256cZgRKEE = await LpStakingW94QJW.weiToSatoshi.call(uintfyG9lc, {from: accounts[1]});
		const uint256p63mY2 = await LpStakingW94QJW.weiToSatoshi.call(uintNSESmJ, {from: accounts[4]});
		await LpStakingW94QJW.lpRewardRateChanged.call({from: accounts[4]});
		const addressGmwBvRj = await LpStakingW94QJW.updateReward.call(addressplxa8FB, {from: accounts[3]});

		assert.equal(uint256cZgRKEE, BigInt("0"))
		assert.equal(uint256p63mY2, BigInt("0"))
		await expect(LpStakingW94QJW.lpRewardRateChanged.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingF4sXnNy = await LpStaking.new({from: accounts[1]});
		const uintF1YUcol = BigInt("1555")
		const boollcekGv = true
		await LpStakingF4sXnNy.nonEmergencyStop.call({from: accounts[3]});
		await LpStakingF4sXnNy.getIncome.call({from: accounts[4]});
		const uint256te7b0VJ = await LpStakingF4sXnNy.stake.call(uintF1YUcol, {from: "0x0000000000000000000000000000000000000001"});
		const uint2560wn7Z0 = await LpStakingF4sXnNy.incomePerToken.call({from: accounts[1]});
		const boolVshLTdU = await LpStakingF4sXnNy.setEmergencyStop.call(boollcekGv, {from: accounts[0]});

		await expect(LpStakingF4sXnNy.nonEmergencyStop.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingW94QJW = await LpStaking.new({from: accounts[4]});
		const uintCbozQJy = BigInt("746")
		const uintHCvhsZ = BigInt("120")
		const addressWOols2 = accounts[1]
		const uint256cZgRKEE = await LpStakingW94QJW.weiToSatoshi.call(uintCbozQJy, {from: accounts[1]});
		await LpStakingW94QJW.exit.call({from: accounts[1]});
		const uint256p63mY2 = await LpStakingW94QJW.weiToSatoshi.call(uintHCvhsZ, {from: accounts[4]});
		const addressGmwBvRj = await LpStakingW94QJW.updateReward.call(addressWOols2, {from: accounts[3]});
		const uint256YMJLnCV = await LpStakingW94QJW.lastTimeRewardApplicable.call({from: accounts[3]});

		assert.equal(uint256cZgRKEE, BigInt("0"))
		await expect(LpStakingW94QJW.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingW94QJW = await LpStaking.new({from: accounts[4]});
		const uintO4UjkUp = BigInt("746")
		const uintvkThzo = BigInt("120")
		const addressKezEwc2 = accounts[5]
		const uint256cZgRKEE = await LpStakingW94QJW.weiToSatoshi.call(uintO4UjkUp, {from: accounts[1]});
		const uint256p63mY2 = await LpStakingW94QJW.weiToSatoshi.call(uintvkThzo, {from: accounts[4]});
		const uint256s8Os1Gl = await LpStakingW94QJW.rewardEarned.call(addressKezEwc2, {from: accounts[0]});
		await LpStakingW94QJW.exit.call({from: accounts[5]});
		await LpStakingW94QJW.lpRewardRateChanged.call({from: accounts[4]});
		await LpStakingW94QJW.lpIncomeRateChanged.call({from: accounts[5]});

		assert.equal(uint256cZgRKEE, BigInt("0"))
		assert.equal(uint256p63mY2, BigInt("0"))
		assert.equal(uint256s8Os1Gl, BigInt("0"))
		await expect(LpStakingW94QJW.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingfF5e36p = await LpStaking.new({from: accounts[2]});
		const addressfKyhMiZ = accounts[0]
		const uintW7gpuMo = BigInt("1696")
		const uint256GJS2KaP = await LpStakingfF5e36p.incomeEarned.call(addressfKyhMiZ, {from: accounts[4]});
		await LpStakingfF5e36p.lpRewardRateChanged.call({from: accounts[2]});
		const uint256042wJ2 = await LpStakingfF5e36p.weiToSatoshi.call(uintW7gpuMo, {from: accounts[4]});
		await LpStakingfF5e36p.getIncome.call({from: accounts[2]});
		await LpStakingfF5e36p.exit.call({from: accounts[0]});

		await expect(LpStakingfF5e36p.incomeEarned.call(addressfKyhMiZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingW94QJW = await LpStaking.new({from: accounts[4]});
		const uintEu8WitD = BigInt("1241")
		const addressZUlrMCl = accounts[2]
		const addressyTD40F9 = accounts[2]
		const addressK3R909 = accounts[3]
		const addressw27CZuZ = accounts[5]
		const addressVf3pof = accounts[4]
		const uintvEl4veo = BigInt("120")
		const addressPh8W30i = accounts[5]
		const uint256cZgRKEE = await LpStakingW94QJW.weiToSatoshi.call(uintEu8WitD, {from: accounts[1]});
		const uint256UJpe7cE = await LpStakingW94QJW.rewardEarned.call(addressZUlrMCl, {from: accounts[0]});
		const addresskT2NdpO = await LpStakingW94QJW.initialize.call(addressVf3pof, addressw27CZuZ, addressK3R909, addressyTD40F9, {from: accounts[3]});
		const uint256p63mY2 = await LpStakingW94QJW.weiToSatoshi.call(uintvEl4veo, {from: accounts[4]});
		const uint256s8Os1Gl = await LpStakingW94QJW.rewardEarned.call(addressPh8W30i, {from: accounts[0]});
		await LpStakingW94QJW.exit.call({from: accounts[5]});
		await LpStakingW94QJW.lpRewardRateChanged.call({from: accounts[4]});
		await LpStakingW94QJW.lpIncomeRateChanged.call({from: accounts[5]});

		assert.equal(uint256UJpe7cE, BigInt("0"))
		assert.equal(uint256cZgRKEE, BigInt("0"))
		assert.equal(uint256p63mY2, BigInt("0"))
		assert.equal(uint256s8Os1Gl, BigInt("0"))
		await expect(LpStakingW94QJW.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingF4sXnNy = await LpStaking.new({from: accounts[1]});
		const addressu7Yj0w6 = accounts[2]
		const uint256mwhfTDd = await LpStakingF4sXnNy.getCurIncomeRate.call({from: "0x0000000000000000000000000000000000000001"});
		await LpStakingF4sXnNy.nonEmergencyStop.call({from: accounts[2]});
		const addressqLWubQ6 = await LpStakingF4sXnNy.transferOwnership.call(addressu7Yj0w6, {from: "0x0000000000000000000000000000000000000001"});
		await LpStakingF4sXnNy.getIncome.call({from: accounts[4]});

		await expect(LpStakingF4sXnNy.getCurIncomeRate.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingW94QJW = await LpStaking.new({from: accounts[4]});
		const addressw9cEr1y = accounts[1]
		const uint256B9RKcNm = await LpStakingW94QJW.getUserAccumulatedWithdrawIncome.call(addressw9cEr1y, {from: accounts[1]});
		await LpStakingW94QJW.lpRewardRateChanged.call({from: accounts[4]});

		assert.equal(uint256B9RKcNm, BigInt("0"))
		await expect(LpStakingW94QJW.lpRewardRateChanged.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingB6MV8zB = await LpStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintn6I5VQe = BigInt("165")
		const addressg0HFZFX = accounts[1]
		const addressYRcIdwz = accounts[4]
		const booltTjB69l = false
		const addressm0mVKnE = await LpStakingB6MV8zB.inCaseTokensGetStuck.call(addressg0HFZFX, uintn6I5VQe, {from: accounts[2]});
		const addressErURzp = await LpStakingB6MV8zB.updateReward.call(addressYRcIdwz, {from: accounts[2]});
		const boolshbSRV = await LpStakingB6MV8zB.setEmergencyStop.call(booltTjB69l, {from: "0x0000000000000000000000000000000000000001"});
	});
})