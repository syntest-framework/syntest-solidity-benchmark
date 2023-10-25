const AavePoolReward = artifacts.require("AavePoolReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AavePoolReward', (accounts) => {
	it('test for AavePoolReward', async () => {
		const AavePoolRewardNOGNpmf = await AavePoolReward.new({from: "0x0000000000000000000000000000000000000001"});
		const uintlktRe14 = BigInt("754")
		const uintCIyHaUT = BigInt("1898")
		const uint256rCV0DAA = await AavePoolRewardNOGNpmf.rewardPerToken.call({from: accounts[1]});
		const uint256ECBErT5 = await AavePoolRewardNOGNpmf.stake.call(uintlktRe14, {from: accounts[4]});
		const uint256PbRGaz4 = await AavePoolRewardNOGNpmf.withdraw.call(uintCIyHaUT, {from: accounts[2]});
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardZ533jYW = await AavePoolReward.new({from: accounts[5]});
		const addressrvY7Hfj = accounts[0]
		const addresseUeuerP = accounts[2]
		const uint256VpJKWR8 = await AavePoolRewardZ533jYW.earned.call(addressrvY7Hfj, {from: accounts[2]});
		const uint256oaQs9m = await AavePoolRewardZ533jYW.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const addressnBI0umt = await AavePoolRewardZ533jYW.dev.call(addresseUeuerP, {from: "0x0000000000000000000000000000000000000001"});
		const uint256wlkxlIo = await AavePoolRewardZ533jYW.lastTimeRewardApplicable.call({from: accounts[0]});

		assert.equal(uint256VpJKWR8, BigInt("0"))
		assert.equal(uint256oaQs9m, BigInt("0"))
		await expect(AavePoolRewardZ533jYW.dev.call(addresseUeuerP, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardrbNGW7B = await AavePoolReward.new({from: accounts[2]});
		const uintnP9IdiW = BigInt("1365")
		const addressH1x1PTQ = accounts[0]
		const uint256jULS99d = await AavePoolRewardrbNGW7B.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256AtTGyf = await AavePoolRewardrbNGW7B.withdraw.call(uintnP9IdiW, {from: accounts[5]});
		const addressMHjB3IL = await AavePoolRewardrbNGW7B.dev.call(addressH1x1PTQ, {from: accounts[0]});
		const uint256zKMiCjW = await AavePoolRewardrbNGW7B.lastTimeRewardApplicable.call({from: accounts[5]});

		assert.equal(uint256jULS99d, BigInt("0"))
		await expect(AavePoolRewardrbNGW7B.withdraw.call(uintnP9IdiW, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardIyUk4u2 = await AavePoolReward.new({from: accounts[4]});
		const uintXTmivTJ = BigInt("1755")
		const uintIoD8dSH = BigInt("1305")
		const uint256ap2C7dY = await AavePoolRewardIyUk4u2.stake.call(uintXTmivTJ, {from: accounts[3]});
		const uint256PlLtlF1 = await AavePoolRewardIyUk4u2.rewardPerToken.call({from: accounts[2]});
		const uint256nBLBZQJ = await AavePoolRewardIyUk4u2.notifyRewardAmount.call(uintIoD8dSH, {from: accounts[0]});
		await AavePoolRewardIyUk4u2.getReward.call({from: accounts[5]});
		await AavePoolRewardIyUk4u2.exit.call({from: accounts[1]});

		await expect(AavePoolRewardIyUk4u2.stake.call(uintXTmivTJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardCTLjr14 = await AavePoolReward.new({from: accounts[0]});
		const addressH2xhXyF = "0x0000000000000000000000000000000000000001"
		const addresswmDW35Y = accounts[2]
		const uint256LYQQMO7 = await AavePoolRewardCTLjr14.earned.call(addressH2xhXyF, {from: "0x0000000000000000000000000000000000000001"});
		await AavePoolRewardCTLjr14.exit.call({from: accounts[2]});
		const uint2565SDjbH = await AavePoolRewardCTLjr14.earned.call(addresswmDW35Y, {from: accounts[1]});

		assert.equal(uint256LYQQMO7, BigInt("0"))
		await expect(AavePoolRewardCTLjr14.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardhLEFFNp = await AavePoolReward.new({from: accounts[2]});
		const uintAFklA4 = BigInt("73")
		const uintIAWn4vP = BigInt("680")
		const uint256sdhSWAa = await AavePoolRewardhLEFFNp.notifyRewardAmount.call(uintAFklA4, {from: accounts[5]});
		const uint256q6x9fPR = await AavePoolRewardhLEFFNp.notifyRewardAmount.call(uintIAWn4vP, {from: accounts[3]});
		const uint256nQR1Ali = await AavePoolRewardhLEFFNp.lastTimeRewardApplicable.call({from: accounts[2]});

		await expect(AavePoolRewardhLEFFNp.notifyRewardAmount.call(uintAFklA4, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewarddRfqIrA = await AavePoolReward.new({from: accounts[4]});
		const uintu2Eq5yy = BigInt("400")
		const uint256b9WOtJH = await AavePoolRewarddRfqIrA.rewardPerToken.call({from: accounts[0]});
		const uint256cmlkH2n = await AavePoolRewarddRfqIrA.notifyRewardAmount.call(uintu2Eq5yy, {from: accounts[4]});

		assert.equal(uint256b9WOtJH, BigInt("0"))
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardFIarKXR = await AavePoolReward.new({from: accounts[0]});
		const addressHLiPoLk = accounts[0]
		const uint256MIsRR2Z = await AavePoolRewardFIarKXR.rewardPerToken.call({from: accounts[1]});
		const uint256WOqIaAj = await AavePoolRewardFIarKXR.rewardPerToken.call({from: accounts[2]});
		const addressHVNM7JG = await AavePoolRewardFIarKXR.updateReward.call(addressHLiPoLk, {from: accounts[4]});
		await AavePoolRewardFIarKXR.getReward.call({from: accounts[2]});

		assert.equal(uint256MIsRR2Z, BigInt("0"))
		assert.equal(uint256WOqIaAj, BigInt("0"))
		await expect(AavePoolRewardFIarKXR.updateReward.call(addressHLiPoLk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})