const LpStaking = artifacts.require("LpStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LpStaking', (accounts) => {
	it('test for LpStaking', async () => {
		const LpStakingG4gfBp3 = await LpStaking.new({from: accounts[4]});
		const addressixSKVqQ = accounts[3]
		const addresszN9g2MM = accounts[4]
		const addressnSTOZot = accounts[3]
		const addressNpDlONt = accounts[4]
		const addressVBKfd7O = accounts[0]
		const uint256YqwQAL = await LpStakingG4gfBp3.rewardEarned.call(addressixSKVqQ, {from: accounts[3]});
		const addressSwYWkti = await LpStakingG4gfBp3.initialize.call(addressVBKfd7O, addressNpDlONt, addressnSTOZot, addresszN9g2MM, {from: accounts[0]});
		const uint256iNtpBNe = await LpStakingG4gfBp3.rewardPerToken.call({from: accounts[3]});
		const uint256mE0CtbF = await LpStakingG4gfBp3.lastTimeRewardApplicable.call({from: accounts[1]});

		assert.equal(uint256YqwQAL, BigInt("0"))
		assert.equal(uint256iNtpBNe, BigInt("0"))
		await expect(LpStakingG4gfBp3.lastTimeRewardApplicable.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingdnFMM8a = await LpStaking.new({from: accounts[3]});
		const addresssMXltKW = accounts[2]
		const uintl8gTi9O = BigInt("1484")
		const addressvVSIGMk = accounts[3]
		const uintJYGc8YA = BigInt("1023")
		const addressKxnOoBC = accounts[4]
		const uint256mJLCwy = await LpStakingdnFMM8a.incomeEarned.call(addresssMXltKW, {from: accounts[4]});
		await LpStakingdnFMM8a.lpIncomeRateChanged.call({from: accounts[4]});
		const uint256smM92x9 = await LpStakingdnFMM8a.stake.call(uintl8gTi9O, {from: accounts[3]});
		const addressvCrBD9r = await LpStakingdnFMM8a.updateReward.call(addressvVSIGMk, {from: "0x0000000000000000000000000000000000000001"});
		const addressI5CCBri = await LpStakingdnFMM8a.inCaseTokensGetStuck.call(addressKxnOoBC, uintJYGc8YA, {from: accounts[1]});

		await expect(LpStakingdnFMM8a.incomeEarned.call(addresssMXltKW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingm050s6 = await LpStaking.new({from: accounts[3]});
		const uintQVZGQ2U = BigInt("1803")
		const addressT9jFt0 = "0x0000000000000000000000000000000000000001"
		const addressEIK8GtL = accounts[4]
		await LpStakingm050s6.getReward.call({from: accounts[3]});
		const addressecb1pSY = await LpStakingm050s6.inCaseTokensGetStuck.call(addressT9jFt0, uintQVZGQ2U, {from: accounts[0]});
		await LpStakingm050s6.lpRewardRateChanged.call({from: "0x0000000000000000000000000000000000000001"});
		const addressFRocfq9 = await LpStakingm050s6.updateReward.call(addressEIK8GtL, {from: accounts[4]});

		await expect(LpStakingm050s6.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingpo7QamS = await LpStaking.new({from: accounts[4]});
		const addressIa38UXE = accounts[5]
		await LpStakingpo7QamS.nonReentrant.call({from: accounts[1]});
		const addressDtpjW84 = await LpStakingpo7QamS.transferOwnership.call(addressIa38UXE, {from: accounts[0]});
		await LpStakingpo7QamS.getReward.call({from: accounts[5]});

		await expect(LpStakingpo7QamS.nonReentrant.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingwRQdbqG = await LpStaking.new({from: accounts[1]});
		const uintiJEGon = BigInt("1578")
		const addressulRvMbE = accounts[2]
		const uintEIqpOx3 = BigInt("901")
		const boolF5Rbjro = false
		const addressw8mJTNc = await LpStakingwRQdbqG.inCaseTokensGetStuck.call(addressulRvMbE, uintiJEGon, {from: accounts[0]});
		await LpStakingwRQdbqG.nonEmergencyStop.call({from: accounts[5]});
		const uint256KbV3wiq = await LpStakingwRQdbqG.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256jwpg1Z2 = await LpStakingwRQdbqG.stake.call(uintEIqpOx3, {from: accounts[3]});
		const boolKcEpHQ = await LpStakingwRQdbqG.setEmergencyStop.call(boolF5Rbjro, {from: accounts[2]});

		await expect(LpStakingwRQdbqG.inCaseTokensGetStuck.call(addressulRvMbE, uintiJEGon, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingG4gfBp3 = await LpStaking.new({from: accounts[4]});
		const addressLdPI9JE = accounts[5]
		const addresso7wCzo = accounts[3]
		const addressoKtpCax = accounts[4]
		const addressB61XJfw = accounts[3]
		const addressZIaWUaZ = accounts[4]
		const address7gvLkh = accounts[0]
		const uint256cBScUsV = await LpStakingG4gfBp3.getUserAccumulatedWithdrawIncome.call(addressLdPI9JE, {from: accounts[3]});
		const uint256YqwQAL = await LpStakingG4gfBp3.rewardEarned.call(addresso7wCzo, {from: accounts[3]});
		const addressSwYWkti = await LpStakingG4gfBp3.initialize.call(address7gvLkh, addressZIaWUaZ, addressB61XJfw, addressoKtpCax, {from: accounts[0]});
		const uint256iNtpBNe = await LpStakingG4gfBp3.rewardPerToken.call({from: accounts[3]});
		await LpStakingG4gfBp3.lpRewardRateChanged.call({from: accounts[1]});

		assert.equal(uint256YqwQAL, BigInt("0"))
		assert.equal(uint256cBScUsV, BigInt("0"))
		assert.equal(uint256iNtpBNe, BigInt("0"))
		await expect(LpStakingG4gfBp3.lpRewardRateChanged.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingq8vfNry = await LpStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressFvacdQX = accounts[4]
		const addressVvV84C8 = accounts[5]
		const addressNngiby6 = await LpStakingq8vfNry.updateReward.call(addressFvacdQX, {from: accounts[5]});
		const uint256R4DBZUf = await LpStakingq8vfNry.getCurIncomeRate.call({from: accounts[0]});
		const uint256yzRmGhi = await LpStakingq8vfNry.incomePerToken.call({from: accounts[3]});
		const uint256BcZcmb = await LpStakingq8vfNry.incomeEarned.call(addressVvV84C8, {from: accounts[1]});
		await LpStakingq8vfNry.exit.call({from: accounts[2]});
	});

	it('test for LpStaking', async () => {
		const LpStakingve6knFS = await LpStaking.new({from: accounts[4]});
		await LpStakingve6knFS.exit.call({from: accounts[4]});
		await LpStakingve6knFS.lpIncomeRateChanged.call({from: "0x0000000000000000000000000000000000000001"});
		await LpStakingve6knFS.lpRewardRateChanged.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(LpStakingve6knFS.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakinggwoZ4h = await LpStaking.new({from: accounts[5]});
		const addressbGzpbTy = accounts[2]
		const addressFxtm6o = accounts[4]
		const addressDrT0f9V = accounts[1]
		const addressPuiQnpg = accounts[2]
		const addressZd7HAld = await LpStakinggwoZ4h.initialize.call(addressPuiQnpg, addressDrT0f9V, addressFxtm6o, addressbGzpbTy, {from: accounts[1]});
		const uint256A6UgKOZ = await LpStakinggwoZ4h.getCurIncomeRate.call({from: accounts[1]});
		await LpStakinggwoZ4h.onlyOwner.call({from: accounts[2]});
		const uint256R62VcVd = await LpStakinggwoZ4h.getCurIncomeRate.call({from: accounts[4]});

		await expect(LpStakinggwoZ4h.getCurIncomeRate.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})