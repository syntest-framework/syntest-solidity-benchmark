const LpStaking = artifacts.require("LpStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LpStaking', (accounts) => {
	it('test for LpStaking', async () => {
		const LpStakingyVvRS1F = await LpStaking.new({from: accounts[5]});
		await LpStakingyVvRS1F.getReward.call({from: accounts[2]});
		const uint256fKxvF5K = await LpStakingyVvRS1F.rewardPerToken.call({from: accounts[0]});
		const uint256SzOxrgO = await LpStakingyVvRS1F.lastTimeRewardApplicable.call({from: accounts[3]});

		await expect(LpStakingyVvRS1F.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingZbNzs2i = await LpStaking.new({from: accounts[0]});
		const uintQnBGUkx = BigInt("1362")
		const uint256Lehu6T = await LpStakingZbNzs2i.incomePerToken.call({from: accounts[4]});
		const uint2560CPmi3 = await LpStakingZbNzs2i.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ZUbQsMq = await LpStakingZbNzs2i.withdraw.call(uintQnBGUkx, {from: accounts[2]});

		await expect(LpStakingZbNzs2i.incomePerToken.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingWBiAqIe = await LpStaking.new({from: accounts[2]});
		const addressvHZIGxo = accounts[5]
		const addressy9pqiv = accounts[0]
		const uintQ9yPBMt = BigInt("517")
		const uint256BSp5Zib = await LpStakingWBiAqIe.rewardEarned.call(addressvHZIGxo, {from: accounts[3]});
		await LpStakingWBiAqIe.lpRewardRateChanged.call({from: accounts[4]});
		const uint256wtCPAn = await LpStakingWBiAqIe.getUserAccumulatedWithdrawIncome.call(addressy9pqiv, {from: accounts[0]});
		const uint256xfnusQ5 = await LpStakingWBiAqIe.stake.call(uintQ9yPBMt, {from: accounts[1]});
		const uint256umTd3vk = await LpStakingWBiAqIe.getCurIncomeRate.call({from: accounts[0]});

		assert.equal(uint256BSp5Zib, BigInt("0"))
		await expect(LpStakingWBiAqIe.lpRewardRateChanged.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakinguDJkxLz = await LpStaking.new({from: accounts[4]});
		const addressZoLrEpc = accounts[0]
		const byteYgum4wF = "0x1b041a041d00181403171a0613101706141a0b1a1913150a0c1f160e1c0c170c"
		const bytey7YvLcW = "0x1d1e0c0a0b1c1d0f131b1d151c0515030f0e080a021410080d161f080c201f11"
		const uintdwbdgQx = BigInt("84")
		const uintopSWiD2 = BigInt("849")
		const uintVrscrb = BigInt("1804")
		const uintcBn0quM = BigInt("1840")
		const uint256Qj58DgA = await LpStakinguDJkxLz.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ZAloZOu = await LpStakinguDJkxLz.getUserAccumulatedWithdrawIncome.call(addressZoLrEpc, {from: accounts[3]});
		const uint256OcExhqZ = await LpStakinguDJkxLz.stakeWithPermit.call(uintVrscrb, uintopSWiD2, uintdwbdgQx, bytey7YvLcW, byteYgum4wF, {from: accounts[2]});
		const uint256dROZaI7 = await LpStakinguDJkxLz.withdraw.call(uintcBn0quM, {from: accounts[5]});
		const uint256nGGjTmR = await LpStakinguDJkxLz.getCurIncomeRate.call({from: accounts[4]});

		assert.equal(uint256Qj58DgA, BigInt("0"))
		assert.equal(uint256ZAloZOu, BigInt("0"))
		await expect(LpStakinguDJkxLz.stakeWithPermit.call(uintVrscrb, uintopSWiD2, uintdwbdgQx, bytey7YvLcW, byteYgum4wF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingIKOHDLW = await LpStaking.new({from: accounts[0]});
		const addressWS3dDRq = accounts[2]
		const uintPkO1y81 = BigInt("1723")
		const addressScWt7GJ = accounts[3]
		const addressXMq7loq = await LpStakingIKOHDLW.updateIncome.call(addressWS3dDRq, {from: accounts[4]});
		await LpStakingIKOHDLW.nonEmergencyStop.call({from: accounts[4]});
		const uint256yDKzNbb = await LpStakingIKOHDLW.rewardPerToken.call({from: accounts[1]});
		const uint256NAnyXFo = await LpStakingIKOHDLW.weiToSatoshi.call(uintPkO1y81, {from: accounts[5]});
		const uint256qTgq53M = await LpStakingIKOHDLW.getUserAccumulatedWithdrawIncome.call(addressScWt7GJ, {from: accounts[2]});
		await LpStakingIKOHDLW.getReward.call({from: accounts[1]});

		await expect(LpStakingIKOHDLW.updateIncome.call(addressWS3dDRq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingZOnVGhk = await LpStaking.new({from: accounts[2]});
		const uintt1713Km = BigInt("536")
		await LpStakingZOnVGhk.exit.call({from: accounts[2]});
		await LpStakingZOnVGhk.getIncome.call({from: accounts[1]});
		const uint2561mz9Fh = await LpStakingZOnVGhk.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256mTCKTay = await LpStakingZOnVGhk.weiToSatoshi.call(uintt1713Km, {from: accounts[2]});

		await expect(LpStakingZOnVGhk.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingnu4Hwug = await LpStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressSkEn9X6 = accounts[1]
		const addresswlL0Nvk = accounts[0]
		const addressWL9LF1Y = accounts[1]
		const addressalBQwGJ = accounts[4]
		const addresspBp6MNw = accounts[5]
		const addressSwFAoG8 = accounts[2]
		const byteAPQEB77 = "0x190e0e0917081420101e0414040e090d0d0e061c1b1c170814081a0d1a05050c"
		const byte7bksxU = "0x1f0c1a0b051e1702171a0c1308181a1a031e0a120e070b1214031b041109080a"
		const uintShFzFaD = BigInt("218")
		const uintzUaLgby = BigInt("836")
		const uintKbwoBqq = BigInt("1486")
		await LpStakingnu4Hwug.exit.call({from: accounts[2]});
		const addressBpLdAkG = await LpStakingnu4Hwug.updateIncome.call(addressSkEn9X6, {from: accounts[4]});
		await LpStakingnu4Hwug.lpRewardRateChanged.call({from: accounts[1]});
		const addressfLJiwat = await LpStakingnu4Hwug.updateReward.call(addresswlL0Nvk, {from: accounts[2]});
		const addressNTghniG = await LpStakingnu4Hwug.initialize.call(addressSwFAoG8, addresspBp6MNw, addressalBQwGJ, addressWL9LF1Y, {from: accounts[0]});
		const uint256g24LNeF = await LpStakingnu4Hwug.stakeWithPermit.call(uintKbwoBqq, uintzUaLgby, uintShFzFaD, byte7bksxU, byteAPQEB77, {from: accounts[3]});
	});

	it('test for LpStaking', async () => {
		const LpStakingWBiAqIe = await LpStaking.new({from: accounts[2]});
		const boolFDNMxvY = false
		const addressDyJ87in = accounts[6]
		const addressl16xarC = accounts[0]
		const uintHuSjKyr = BigInt("517")
		const boolzGsebZk = await LpStakingWBiAqIe.setEmergencyStop.call(boolFDNMxvY, {from: accounts[2]});
		const uint256BSp5Zib = await LpStakingWBiAqIe.rewardEarned.call(addressDyJ87in, {from: accounts[3]});
		await LpStakingWBiAqIe.lpRewardRateChanged.call({from: accounts[4]});
		const uint256wtCPAn = await LpStakingWBiAqIe.getUserAccumulatedWithdrawIncome.call(addressl16xarC, {from: accounts[0]});
		const uint256xfnusQ5 = await LpStakingWBiAqIe.stake.call(uintHuSjKyr, {from: accounts[1]});
		const uint256umTd3vk = await LpStakingWBiAqIe.getCurIncomeRate.call({from: accounts[0]});

		await expect(LpStakingWBiAqIe.setEmergencyStop.call(boolFDNMxvY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingrAQ79Eu = await LpStaking.new({from: accounts[5]});
		const addressizpEoUQ = accounts[2]
		const addressIEJkrJ5 = accounts[3]
		const uinthKynqqI = BigInt("1051")
		const uint256D1beT3t = await LpStakingrAQ79Eu.incomeEarned.call(addressizpEoUQ, {from: "0x0000000000000000000000000000000000000001"});
		await LpStakingrAQ79Eu.onlyOwner.call({from: accounts[5]});
		const uint256srn6qJ2 = await LpStakingrAQ79Eu.rewardEarned.call(addressIEJkrJ5, {from: accounts[0]});
		const uint256Xb17WuN = await LpStakingrAQ79Eu.rewardPerToken.call({from: accounts[5]});
		const uint256UVa93zx = await LpStakingrAQ79Eu.stake.call(uinthKynqqI, {from: accounts[3]});
		await LpStakingrAQ79Eu.lpIncomeRateChanged.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(LpStakingrAQ79Eu.incomeEarned.call(addressizpEoUQ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingZbNzs2i = await LpStaking.new({from: accounts[0]});
		const uint256Jh4BqBS = await LpStakingZbNzs2i.getCurIncomeRate.call({from: accounts[2]});
		const uint256Lehu6T = await LpStakingZbNzs2i.incomePerToken.call({from: accounts[4]});

		await expect(LpStakingZbNzs2i.getCurIncomeRate.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingWBiAqIe = await LpStaking.new({from: accounts[2]});
		const addressH568xD = accounts[5]
		const addressqDO8PX8 = "0x0000000000000000000000000000000000000001"
		const addresszMrg06d = accounts[0]
		const addressyaVsSdo = accounts[0]
		const addressYtrYud6 = accounts[5]
		const address2rHzKl = accounts[1]
		const uintCHZDGY = BigInt("517")
		const addressbLvIl15 = accounts[2]
		const uint256BSp5Zib = await LpStakingWBiAqIe.rewardEarned.call(addressH568xD, {from: accounts[3]});
		const addressALu0lG3 = await LpStakingWBiAqIe.initialize.call(addressYtrYud6, addressyaVsSdo, addresszMrg06d, addressqDO8PX8, {from: accounts[5]});
		const uint256wtCPAn = await LpStakingWBiAqIe.getUserAccumulatedWithdrawIncome.call(address2rHzKl, {from: accounts[0]});
		const uint256xfnusQ5 = await LpStakingWBiAqIe.stake.call(uintCHZDGY, {from: accounts[1]});
		const uint256bn0Nk8K = await LpStakingWBiAqIe.rewardEarned.call(addressbLvIl15, {from: accounts[4]});

		assert.equal(uint256BSp5Zib, BigInt("0"))
		assert.equal(uint256wtCPAn, BigInt("0"))
		await expect(LpStakingWBiAqIe.stake.call(uintCHZDGY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})