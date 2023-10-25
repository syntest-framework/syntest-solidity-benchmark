const AavePoolReward = artifacts.require("AavePoolReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AavePoolReward', (accounts) => {
	it('test for AavePoolReward', async () => {
		const AavePoolRewardpylvTrU = await AavePoolReward.new({from: accounts[4]});
		const addressX6vOb3X = accounts[0]
		const uint256umM4CB = await AavePoolRewardpylvTrU.rewardPerToken.call({from: accounts[3]});
//		await AavePoolRewardpylvTrU.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256kclkwHx = await AavePoolRewardpylvTrU.lastTimeRewardApplicable.call({from: accounts[1]});
//		const uint256K6XzC2F = await AavePoolRewardpylvTrU.lastTimeRewardApplicable.call({from: accounts[0]});
//		const addressUGRx5cg = await AavePoolRewardpylvTrU.updateReward.call(addressX6vOb3X, {from: accounts[2]});
//		const uint256Vz2Yh7N = await AavePoolRewardpylvTrU.lastTimeRewardApplicable.call({from: accounts[2]});

		assert.equal(uint256umM4CB, BigInt("0"))
		await expect(AavePoolRewardpylvTrU.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardaP5rZ71 = await AavePoolReward.new({from: accounts[0]});
		const addressKNqvtSn = accounts[1]
		const uint6jzhZu = BigInt("1218")
//		await AavePoolRewardaP5rZ71.getReward.call({from: accounts[4]});
//		const address9YaSeF = await AavePoolRewardaP5rZ71.dev.call(addressKNqvtSn, {from: accounts[4]});
//		const uint256sQ9TJsM = await AavePoolRewardaP5rZ71.stake.call(uint6jzhZu, {from: accounts[3]});

		await expect(AavePoolRewardaP5rZ71.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardUba2afk = await AavePoolReward.new({from: accounts[2]});
		const addressdZr4vYR = accounts[2]
		const uintdH2g3Cu = BigInt("1748")
		const uintAqh53CK = BigInt("1830")
		const uint256gcUmVON = await AavePoolRewardUba2afk.earned.call(addressdZr4vYR, {from: accounts[3]});
//		const uint2566dhVvD = await AavePoolRewardUba2afk.stake.call(uintdH2g3Cu, {from: accounts[0]});
//		const uint256qEsk0i = await AavePoolRewardUba2afk.withdraw.call(uintAqh53CK, {from: accounts[0]});

		assert.equal(uint256gcUmVON, BigInt("0"))
		await expect(AavePoolRewardUba2afk.stake.call(uintdH2g3Cu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardygwV0Jj = await AavePoolReward.new({from: accounts[5]});
		const uintnUNPqf = BigInt("803")
		const uintQTOyxi = BigInt("1013")
//		const uint256aGp4sRS = await AavePoolRewardygwV0Jj.withdraw.call(uintnUNPqf, {from: accounts[1]});
//		await AavePoolRewardygwV0Jj.exit.call({from: accounts[1]});
//		await AavePoolRewardygwV0Jj.exit.call({from: accounts[2]});
//		const uint256eHkFoxw = await AavePoolRewardygwV0Jj.withdraw.call(uintQTOyxi, {from: accounts[4]});

		await expect(AavePoolRewardygwV0Jj.withdraw.call(uintnUNPqf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardrW8Hl4f = await AavePoolReward.new({from: accounts[1]});
		const uint256rXSM0Xu = await AavePoolRewardrW8Hl4f.lastTimeRewardApplicable.call({from: accounts[1]});
//		await AavePoolRewardrW8Hl4f.exit.call({from: accounts[2]});
//		const uint256ELA8DCU = await AavePoolRewardrW8Hl4f.lastTimeRewardApplicable.call({from: accounts[1]});

		assert.equal(uint256rXSM0Xu, BigInt("0"))
		await expect(AavePoolRewardrW8Hl4f.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardaP5rZ71 = await AavePoolReward.new({from: accounts[0]});
		const uintuPTDH2Z = BigInt("1767")
		const addresscumoZS7 = accounts[1]
		const uintvffALQ1 = BigInt("1218")
		const uint256QXaThOu = await AavePoolRewardaP5rZ71.rewardPerToken.call({from: accounts[3]});
//		const uint256pbrxOlh = await AavePoolRewardaP5rZ71.notifyRewardAmount.call(uintuPTDH2Z, {from: accounts[4]});
//		await AavePoolRewardaP5rZ71.getReward.call({from: accounts[4]});
//		const address9YaSeF = await AavePoolRewardaP5rZ71.dev.call(addresscumoZS7, {from: accounts[4]});
//		const uint256sQ9TJsM = await AavePoolRewardaP5rZ71.stake.call(uintvffALQ1, {from: accounts[3]});

		assert.equal(uint256QXaThOu, BigInt("0"))
		await expect(AavePoolRewardaP5rZ71.notifyRewardAmount.call(uintuPTDH2Z, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardrayZLF = await AavePoolReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addressqiFDCzZ = accounts[5]
		await AavePoolRewardrayZLF.getReward.call({from: accounts[1]});
		const uint256VEdBXZ = await AavePoolRewardrayZLF.rewardPerToken.call({from: accounts[3]});
		const uint256gAIniLw = await AavePoolRewardrayZLF.earned.call(addressqiFDCzZ, {from: accounts[1]});
		const uint256OoI4bV9 = await AavePoolRewardrayZLF.lastTimeRewardApplicable.call({from: accounts[2]});
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardBjXct6i = await AavePoolReward.new({from: accounts[1]});
		const uintxYKOpzC = BigInt("628")
		const uint256GZj60gq = await AavePoolRewardBjXct6i.rewardPerToken.call({from: accounts[1]});
//		await AavePoolRewardBjXct6i.getReward.call({from: accounts[3]});
//		const uint256gLzzeA = await AavePoolRewardBjXct6i.notifyRewardAmount.call(uintxYKOpzC, {from: accounts[1]});

		assert.equal(uint256GZj60gq, BigInt("0"))
		await expect(AavePoolRewardBjXct6i.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})