const AavePoolReward = artifacts.require("AavePoolReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AavePoolReward', (accounts) => {
	it('test for AavePoolReward', async () => {
		const AavePoolRewardW3Txg7W = await AavePoolReward.new({from: accounts[4]});
		const addressN1TMgh1 = accounts[5]
		const uintQ1eTHWC = BigInt("1523")
		const uintUtyvNLI = BigInt("571")
		const addresswOrGekt = accounts[0]
//		await AavePoolRewardW3Txg7W.exit.call({from: accounts[1]});
//		const uint256Ra6dDES = await AavePoolRewardW3Txg7W.earned.call(addressN1TMgh1, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256rCbYGKb = await AavePoolRewardW3Txg7W.stake.call(uintQ1eTHWC, {from: accounts[0]});
//		const uint256ZeLLY3N = await AavePoolRewardW3Txg7W.withdraw.call(uintUtyvNLI, {from: accounts[3]});
//		const uint256BO43WN = await AavePoolRewardW3Txg7W.lastTimeRewardApplicable.call({from: accounts[2]});
//		const addressgFIIU8j = await AavePoolRewardW3Txg7W.dev.call(addresswOrGekt, {from: accounts[2]});

		await expect(AavePoolRewardW3Txg7W.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewards8QKVgj = await AavePoolReward.new({from: accounts[3]});
		const addressukRQI3 = accounts[3]
		const uintnAUWj9m = BigInt("1670")
		const addressIVWjqW = await AavePoolRewards8QKVgj.dev.call(addressukRQI3, {from: accounts[3]});
		const uint256G3nWOH = await AavePoolRewards8QKVgj.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256kpBM1cf = await AavePoolRewards8QKVgj.notifyRewardAmount.call(uintnAUWj9m, {from: accounts[5]});

		assert.equal(uint256G3nWOH, BigInt("0"))
		await expect(AavePoolRewards8QKVgj.notifyRewardAmount.call(uintnAUWj9m, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardS0uHN80 = await AavePoolReward.new({from: accounts[4]});
		const addressJVVBOH = accounts[4]
		const uintu2fZHRg = BigInt("1046")
		const uint256v9kzN83 = await AavePoolRewardS0uHN80.earned.call(addressJVVBOH, {from: accounts[4]});
		const uint256CsjQA2m = await AavePoolRewardS0uHN80.lastTimeRewardApplicable.call({from: accounts[2]});
//		const uint256jBQaeou = await AavePoolRewardS0uHN80.stake.call(uintu2fZHRg, {from: accounts[2]});
//		const uint256wYEL9oY = await AavePoolRewardS0uHN80.lastTimeRewardApplicable.call({from: accounts[0]});

		assert.equal(uint256CsjQA2m, BigInt("0"))
		assert.equal(uint256v9kzN83, BigInt("0"))
		await expect(AavePoolRewardS0uHN80.stake.call(uintu2fZHRg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardWJDiJJo = await AavePoolReward.new({from: accounts[4]});
		const uintHSvwbUg = BigInt("6")
		const uintfxnG6Q = BigInt("636")
		const uintJSlyvKy = BigInt("1187")
//		const uint256OU2Rv10 = await AavePoolRewardWJDiJJo.withdraw.call(uintHSvwbUg, {from: accounts[3]});
//		const uint256OSrHZac = await AavePoolRewardWJDiJJo.stake.call(uintfxnG6Q, {from: accounts[2]});
//		const uint256KYkXCX = await AavePoolRewardWJDiJJo.withdraw.call(uintJSlyvKy, {from: accounts[1]});
//		const uint256mCCKpgp = await AavePoolRewardWJDiJJo.rewardPerToken.call({from: accounts[1]});

		await expect(AavePoolRewardWJDiJJo.withdraw.call(uintHSvwbUg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardQAkusBr = await AavePoolReward.new({from: "0x0000000000000000000000000000000000000001"});
		const uintTO5uG8Z = BigInt("736")
		const uint4ikpWU = BigInt("538")
		const addressOpkEjHj = accounts[1]
		const addressAJZuEWp = accounts[4]
		const uint256uoXn3gF = await AavePoolRewardQAkusBr.withdraw.call(uintTO5uG8Z, {from: accounts[2]});
		const uint256Z4HOcOi = await AavePoolRewardQAkusBr.stake.call(uint4ikpWU, {from: accounts[2]});
		const addressqQ6dzQp = await AavePoolRewardQAkusBr.updateReward.call(addressOpkEjHj, {from: accounts[3]});
		await AavePoolRewardQAkusBr.getReward.call({from: accounts[4]});
		const uint256cSbS5S = await AavePoolRewardQAkusBr.earned.call(addressAJZuEWp, {from: accounts[1]});
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardW3Txg7W = await AavePoolReward.new({from: accounts[4]});
		const addressOPDZDQJ = accounts[5]
		const addressdGLNiMg = accounts[1]
		const uintBG3ezrp = BigInt("1523")
		const uintUq0ouDn = BigInt("571")
		const addresswN9KVuS = accounts[0]
		const uint256Ra6dDES = await AavePoolRewardW3Txg7W.earned.call(addressOPDZDQJ, {from: "0x0000000000000000000000000000000000000001"});
//		const addressjzdzxE1 = await AavePoolRewardW3Txg7W.dev.call(addressdGLNiMg, {from: accounts[0]});
//		const uint256rCbYGKb = await AavePoolRewardW3Txg7W.stake.call(uintBG3ezrp, {from: accounts[0]});
//		const uint256ZeLLY3N = await AavePoolRewardW3Txg7W.withdraw.call(uintUq0ouDn, {from: accounts[3]});
//		const uint256BO43WN = await AavePoolRewardW3Txg7W.lastTimeRewardApplicable.call({from: accounts[2]});
//		const addressgFIIU8j = await AavePoolRewardW3Txg7W.dev.call(addresswN9KVuS, {from: accounts[2]});

		assert.equal(uint256Ra6dDES, BigInt("0"))
		await expect(AavePoolRewardW3Txg7W.dev.call(addressdGLNiMg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardS0uHN80 = await AavePoolReward.new({from: accounts[4]});
		const addressjPR1tA9 = accounts[4]
		const addresszxFkTDG = accounts[4]
		const uintyEULLn = BigInt("1046")
		const uint256v9kzN83 = await AavePoolRewardS0uHN80.earned.call(addressjPR1tA9, {from: accounts[4]});
//		const addressddEOtC = await AavePoolRewardS0uHN80.updateReward.call(addresszxFkTDG, {from: accounts[3]});
//		const uint256CsjQA2m = await AavePoolRewardS0uHN80.lastTimeRewardApplicable.call({from: accounts[2]});
//		const uint256jBQaeou = await AavePoolRewardS0uHN80.stake.call(uintyEULLn, {from: accounts[2]});

		assert.equal(uint256v9kzN83, BigInt("0"))
		await expect(AavePoolRewardS0uHN80.updateReward.call(addresszxFkTDG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardqqL0z3r = await AavePoolReward.new({from: accounts[3]});
		const addressetfnvF6 = accounts[4]
		const uintAMYplJX = BigInt("352")
		const uintVm6Sgw = BigInt("941")
		const addressL66lUz9 = accounts[0]
		const uint256GORiLvF = await AavePoolRewardqqL0z3r.earned.call(addressetfnvF6, {from: accounts[1]});
		const uint256lMFmJVQ = await AavePoolRewardqqL0z3r.notifyRewardAmount.call(uintAMYplJX, {from: accounts[3]});
//		const uint256MFWvSSx = await AavePoolRewardqqL0z3r.stake.call(uintVm6Sgw, {from: accounts[4]});
//		const uint256XVcN6am = await AavePoolRewardqqL0z3r.earned.call(addressL66lUz9, {from: accounts[2]});
//		const uint256daPTjAa = await AavePoolRewardqqL0z3r.lastTimeRewardApplicable.call({from: accounts[4]});

		assert.equal(uint256GORiLvF, BigInt("0"))
		await expect(AavePoolRewardqqL0z3r.stake.call(uintVm6Sgw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})