const AavePoolReward = artifacts.require("AavePoolReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AavePoolReward', (accounts) => {
	it('test for AavePoolReward', async () => {
		const AavePoolRewardXV69mPz = await AavePoolReward.new({from: accounts[1]});
		const addressvbTZQW = accounts[3]
		const addressMWCXEqK = accounts[3]
		const addresszZzyol = accounts[1]
//		await AavePoolRewardXV69mPz.exit.call({from: accounts[1]});
//		await AavePoolRewardXV69mPz.getReward.call({from: accounts[4]});
//		const addressIFfyBeU = await AavePoolRewardXV69mPz.updateReward.call(addressvbTZQW, {from: accounts[4]});
//		const addressREB2Qav = await AavePoolRewardXV69mPz.dev.call(addressMWCXEqK, {from: accounts[1]});
//		const addressZKQ84Q0 = await AavePoolRewardXV69mPz.dev.call(addresszZzyol, {from: accounts[3]});

		await expect(AavePoolRewardXV69mPz.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewarduqjBdS2 = await AavePoolReward.new({from: accounts[4]});
		const addressYMvHswe = accounts[3]
		const addressYmAqw3 = accounts[3]
//		await AavePoolRewarduqjBdS2.getReward.call({from: accounts[0]});
//		const uint256S7h0UHf = await AavePoolRewarduqjBdS2.earned.call(addressYMvHswe, {from: accounts[1]});
//		const addresslkquRrR = await AavePoolRewarduqjBdS2.dev.call(addressYmAqw3, {from: "0x0000000000000000000000000000000000000001"});

		await expect(AavePoolRewarduqjBdS2.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardtHMfSb = await AavePoolReward.new({from: "0x0000000000000000000000000000000000000001"});
		const uintJlwAOs3 = BigInt("1026")
		const uintitgTk0b = BigInt("1563")
		const addressdh94sl2 = accounts[2]
		const addressbKEw3Pg = accounts[2]
		await AavePoolRewardtHMfSb.exit.call({from: accounts[3]});
		const uint256AaRMhYD = await AavePoolRewardtHMfSb.stake.call(uintJlwAOs3, {from: accounts[3]});
		const uint256yw8QOSL = await AavePoolRewardtHMfSb.notifyRewardAmount.call(uintitgTk0b, {from: accounts[1]});
		const uint256ddubALV = await AavePoolRewardtHMfSb.earned.call(addressdh94sl2, {from: accounts[3]});
		const addressVjjEIrW = await AavePoolRewardtHMfSb.dev.call(addressbKEw3Pg, {from: accounts[5]});
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardjD4dq33 = await AavePoolReward.new({from: accounts[5]});
		const uintI9na2Vt = BigInt("404")
		const uintvJflkHw = BigInt("278")
		const uintAZ5kTZk = BigInt("132")
//		const uint256TcrEvzn = await AavePoolRewardjD4dq33.withdraw.call(uintI9na2Vt, {from: accounts[3]});
//		const uint256veHF7ID = await AavePoolRewardjD4dq33.withdraw.call(uintvJflkHw, {from: accounts[1]});
//		const uint256iJe8Ytn = await AavePoolRewardjD4dq33.notifyRewardAmount.call(uintAZ5kTZk, {from: accounts[4]});
//		const uint256ERFbQf0 = await AavePoolRewardjD4dq33.rewardPerToken.call({from: accounts[0]});

		await expect(AavePoolRewardjD4dq33.withdraw.call(uintI9na2Vt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardLouE2cT = await AavePoolReward.new({from: accounts[2]});
		const uintH4D6CrU = BigInt("231")
		const uint256GWevP6P = await AavePoolRewardLouE2cT.lastTimeRewardApplicable.call({from: accounts[0]});
//		const uint256kqfOA17 = await AavePoolRewardLouE2cT.stake.call(uintH4D6CrU, {from: accounts[2]});

		assert.equal(uint256GWevP6P, BigInt("0"))
		await expect(AavePoolRewardLouE2cT.stake.call(uintH4D6CrU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardLouE2cT = await AavePoolReward.new({from: accounts[2]});
		const uintqtsPTsG = BigInt("1247")
		const uintPqHXbCs = BigInt("231")
		const uint256GWevP6P = await AavePoolRewardLouE2cT.lastTimeRewardApplicable.call({from: accounts[0]});
//		const uint256mjMHm88 = await AavePoolRewardLouE2cT.notifyRewardAmount.call(uintqtsPTsG, {from: accounts[4]});
//		const uint256kqfOA17 = await AavePoolRewardLouE2cT.stake.call(uintPqHXbCs, {from: accounts[2]});

		assert.equal(uint256GWevP6P, BigInt("0"))
		await expect(AavePoolRewardLouE2cT.notifyRewardAmount.call(uintqtsPTsG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardLouE2cT = await AavePoolReward.new({from: accounts[2]});
		const addressKTxicTs = accounts[4]
		const uintMNBNaCB = BigInt("270")
		const uint256GWevP6P = await AavePoolRewardLouE2cT.lastTimeRewardApplicable.call({from: accounts[0]});
//		const addressQ1AGIlg = await AavePoolRewardLouE2cT.updateReward.call(addressKTxicTs, {from: accounts[1]});
//		const uint256kqfOA17 = await AavePoolRewardLouE2cT.stake.call(uintMNBNaCB, {from: accounts[2]});

		assert.equal(uint256GWevP6P, BigInt("0"))
		await expect(AavePoolRewardLouE2cT.updateReward.call(addressKTxicTs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardLouE2cT = await AavePoolReward.new({from: accounts[2]});
		const uintRdk1Cnv = BigInt("1481")
		const addresspsBlBiY = accounts[3]
		const uint256GWevP6P = await AavePoolRewardLouE2cT.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256BJgaErQ = await AavePoolRewardLouE2cT.notifyRewardAmount.call(uintRdk1Cnv, {from: accounts[2]});
		const uint256IVw3unU = await AavePoolRewardLouE2cT.earned.call(addresspsBlBiY, {from: accounts[3]});

		assert.equal(uint256GWevP6P, BigInt("0"))
		assert.equal(uint256IVw3unU, BigInt("0"))
	});
})