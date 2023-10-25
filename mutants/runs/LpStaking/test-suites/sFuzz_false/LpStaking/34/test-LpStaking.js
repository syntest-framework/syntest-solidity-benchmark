const LpStaking = artifacts.require("LpStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LpStaking', (accounts) => {
	it('test for LpStaking', async () => {
		const LpStakingdDQrF22 = await LpStaking.new({from: accounts[0]});
		await LpStakingdDQrF22.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		await LpStakingdDQrF22.lpRewardRateChanged.call({from: accounts[5]});
		await LpStakingdDQrF22.lpRewardRateChanged.call({from: accounts[1]});

		await expect(LpStakingdDQrF22.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingwyeUkCl = await LpStaking.new({from: accounts[0]});
		const addressqWj5MRK = accounts[1]
		const uint256sXiABy = await LpStakingwyeUkCl.rewardPerToken.call({from: accounts[0]});
		const uint256FAK1m3m = await LpStakingwyeUkCl.getCurIncomeRate.call({from: accounts[2]});
		const uint256AwhoU2a = await LpStakingwyeUkCl.getUserAccumulatedWithdrawIncome.call(addressqWj5MRK, {from: accounts[3]});

		assert.equal(uint256sXiABy, BigInt("0"))
		await expect(LpStakingwyeUkCl.getCurIncomeRate.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingss18Us7 = await LpStaking.new({from: accounts[2]});
		const addressOFG7gVk = accounts[3]
		const addressu6p47sE = accounts[0]
		const uintOgflTkS = BigInt("635")
		const addressLOKaUs = accounts[2]
		const uint256Fs6ogxB = await LpStakingss18Us7.rewardEarned.call(addressOFG7gVk, {from: accounts[3]});
		const uint256zdtREj4 = await LpStakingss18Us7.rewardPerToken.call({from: accounts[0]});
		const uint256fIYEukp = await LpStakingss18Us7.rewardEarned.call(addressu6p47sE, {from: accounts[0]});
		const addressvcSUsnB = await LpStakingss18Us7.inCaseTokensGetStuck.call(addressLOKaUs, uintOgflTkS, {from: accounts[3]});

		assert.equal(uint256Fs6ogxB, BigInt("0"))
		assert.equal(uint256fIYEukp, BigInt("0"))
		assert.equal(uint256zdtREj4, BigInt("0"))
		await expect(LpStakingss18Us7.inCaseTokensGetStuck.call(addressLOKaUs, uintOgflTkS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingET8aBXl = await LpStaking.new({from: accounts[1]});
		const addressgHH346R = accounts[1]
		const addressmchkC3 = accounts[2]
		const boollzO5IL = true
		const addressqiHdMQ = await LpStakingET8aBXl.updateIncome.call(addressgHH346R, {from: accounts[0]});
		const addressJy6rTJw = await LpStakingET8aBXl.updateIncome.call(addressmchkC3, {from: accounts[3]});
		const boolSCj2Ufx = await LpStakingET8aBXl.setEmergencyStop.call(boollzO5IL, {from: accounts[2]});

		await expect(LpStakingET8aBXl.updateIncome.call(addressgHH346R, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingwyeUkCl = await LpStaking.new({from: accounts[0]});
		const addressLnSmz5D = accounts[1]
		const addressyGCQBtW = accounts[4]
		const addressPewa3Or = accounts[0]
		const addresshRoCaYL = accounts[1]
		const addressVt1CRaw = accounts[1]
		const addresstRc83ro = await LpStakingwyeUkCl.initialize.call(addresshRoCaYL, addressPewa3Or, addressyGCQBtW, addressLnSmz5D, {from: accounts[5]});
		const uint256sXiABy = await LpStakingwyeUkCl.rewardPerToken.call({from: accounts[0]});
		const uint256FAK1m3m = await LpStakingwyeUkCl.getCurIncomeRate.call({from: accounts[2]});
		const uint256AwhoU2a = await LpStakingwyeUkCl.getUserAccumulatedWithdrawIncome.call(addressVt1CRaw, {from: accounts[3]});

		assert.equal(uint256sXiABy, BigInt("0"))
		await expect(LpStakingwyeUkCl.getCurIncomeRate.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingwyeUkCl = await LpStaking.new({from: accounts[0]});
		const addressDm3ldm4 = accounts[1]
		const uint256sXiABy = await LpStakingwyeUkCl.rewardPerToken.call({from: accounts[0]});
		await LpStakingwyeUkCl.lpRewardRateChanged.call({from: accounts[2]});
		const uint256FAK1m3m = await LpStakingwyeUkCl.getCurIncomeRate.call({from: accounts[2]});
		const uint256RIFvy44 = await LpStakingwyeUkCl.incomePerToken.call({from: accounts[3]});
		const uint256AwhoU2a = await LpStakingwyeUkCl.getUserAccumulatedWithdrawIncome.call(addressDm3ldm4, {from: accounts[3]});

		assert.equal(uint256sXiABy, BigInt("0"))
		await expect(LpStakingwyeUkCl.lpRewardRateChanged.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingdDQrF22 = await LpStaking.new({from: accounts[0]});
		await LpStakingdDQrF22.exit.call({from: accounts[4]});
		await LpStakingdDQrF22.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		await LpStakingdDQrF22.lpRewardRateChanged.call({from: accounts[5]});
		await LpStakingdDQrF22.lpRewardRateChanged.call({from: accounts[1]});

		await expect(LpStakingdDQrF22.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingVvN7mdj = await LpStaking.new({from: accounts[4]});
		const uintZTPVtwk = BigInt("81")
		const addressctS30cb = accounts[5]
		const addressGSZLXND = accounts[4]
		const uint256jU2hOEZ = await LpStakingVvN7mdj.weiToSatoshi.call(uintZTPVtwk, {from: accounts[5]});
		const addressXdQAzcX = await LpStakingVvN7mdj.transferOwnership.call(addressctS30cb, {from: accounts[0]});
		const uint256o3Qdz0Z = await LpStakingVvN7mdj.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256VAotZu = await LpStakingVvN7mdj.getUserAccumulatedWithdrawIncome.call(addressGSZLXND, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256jU2hOEZ, BigInt("0"))
		await expect(LpStakingVvN7mdj.transferOwnership.call(addressctS30cb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingwyeUkCl = await LpStaking.new({from: accounts[0]});
		const addressopa1rT = accounts[1]
		const uint256AwhoU2a = await LpStakingwyeUkCl.getUserAccumulatedWithdrawIncome.call(addressopa1rT, {from: accounts[3]});

		assert.equal(uint256AwhoU2a, BigInt("0"))
	});

	it('test for LpStaking', async () => {
		const LpStakingss18Us7 = await LpStaking.new({from: accounts[2]});
		const addressc15YIxR = accounts[1]
		const addressnby5RH = accounts[3]
		const uintZuytWys = BigInt("635")
		const addressUoffkuk = accounts[2]
		const addressdTiFNNV = accounts[0]
		const uint256SbfXzqE = await LpStakingss18Us7.incomeEarned.call(addressc15YIxR, {from: accounts[2]});
		const uint256jI9us2e = await LpStakingss18Us7.getCurIncomeRate.call({from: accounts[1]});
		const uint256Fs6ogxB = await LpStakingss18Us7.rewardEarned.call(addressnby5RH, {from: accounts[3]});
		const uint256zdtREj4 = await LpStakingss18Us7.rewardPerToken.call({from: accounts[0]});
		const addressvcSUsnB = await LpStakingss18Us7.inCaseTokensGetStuck.call(addressUoffkuk, uintZuytWys, {from: accounts[3]});
		const uint256Nssevty = await LpStakingss18Us7.rewardEarned.call(addressdTiFNNV, {from: accounts[1]});

		await expect(LpStakingss18Us7.incomeEarned.call(addressc15YIxR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingEgITAI = await LpStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uint256IqFmvVC = await LpStakingEgITAI.rewardPerToken.call({from: accounts[5]});
		const uint256PRCPzRY = await LpStakingEgITAI.rewardPerToken.call({from: accounts[1]});
		await LpStakingEgITAI.exit.call({from: accounts[1]});
	});
})