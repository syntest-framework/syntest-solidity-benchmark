const LpStaking = artifacts.require("LpStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LpStaking', (accounts) => {
	it('test for LpStaking', async () => {
		const LpStakingRag9AT0 = await LpStaking.new({from: accounts[4]});
		const addressmI6jmgH = accounts[1]
		const addressCISZyXK = accounts[2]
		const addressPahQmT7 = accounts[5]
		const addressDAgON8l = accounts[2]
		const uintWBGXb6L = BigInt("1775")
		const addressegqhLc = await LpStakingRag9AT0.initialize.call(addressDAgON8l, addressPahQmT7, addressCISZyXK, addressmI6jmgH, {from: accounts[2]});
		await LpStakingRag9AT0.exit.call({from: accounts[0]});
		const uint256eGgxhmp = await LpStakingRag9AT0.weiToSatoshi.call(uintWBGXb6L, {from: accounts[4]});
		const uint256O6A7rvD = await LpStakingRag9AT0.lastTimeRewardApplicable.call({from: accounts[1]});
		await LpStakingRag9AT0.getIncome.call({from: accounts[0]});

		await expect(LpStakingRag9AT0.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingStViq7X = await LpStaking.new({from: accounts[5]});
		const addressHLjOXND = "0x0000000000000000000000000000000000000001"
		const addressagEPxEd = accounts[0]
		const uint256bHovXT = await LpStakingStViq7X.getUserAccumulatedWithdrawIncome.call(addressHLjOXND, {from: accounts[1]});
		const uint2563bpDl6 = await LpStakingStViq7X.incomeEarned.call(addressagEPxEd, {from: accounts[5]});
		const uint256C9Ui6L = await LpStakingStViq7X.incomePerToken.call({from: accounts[0]});

		assert.equal(uint256bHovXT, BigInt("0"))
		await expect(LpStakingStViq7X.incomeEarned.call(addressagEPxEd, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingqeKywEp = await LpStaking.new({from: accounts[5]});
		const addresssVNGhnK = accounts[2]
		const address4EMpc4 = accounts[3]
		const addressUbVoQQL = accounts[5]
		const addressYNl9NaX = accounts[1]
		const addressDzCBXHs = accounts[5]
		const addressLGEibQL = accounts[2]
		const addressQ2ySMLw = accounts[0]
		const uint256PDZpooJ = await LpStakingqeKywEp.getUserAccumulatedWithdrawIncome.call(addresssVNGhnK, {from: accounts[5]});
		const uint256YFrkp9 = await LpStakingqeKywEp.rewardEarned.call(address4EMpc4, {from: accounts[3]});
		const addressSycdU24 = await LpStakingqeKywEp.transferOwnership.call(addressUbVoQQL, {from: accounts[3]});
		await LpStakingqeKywEp.getReward.call({from: accounts[0]});
		await LpStakingqeKywEp.lpRewardRateChanged.call({from: accounts[1]});
		const addressv2SpNkr = await LpStakingqeKywEp.initialize.call(addressQ2ySMLw, addressLGEibQL, addressDzCBXHs, addressYNl9NaX, {from: accounts[4]});

		assert.equal(uint256PDZpooJ, BigInt("0"))
		assert.equal(uint256YFrkp9, BigInt("0"))
		await expect(LpStakingqeKywEp.transferOwnership.call(addressUbVoQQL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingG8vHWWI = await LpStaking.new({from: accounts[5]});
		const uintsHM7zql = BigInt("650")
		const addressAICSYer = accounts[3]
		const uintYfcLncj = BigInt("1735")
		const addressiQ8g9Lz = accounts[4]
		const addressxBYhPNM = accounts[1]
		const uint256lV6CP3z = await LpStakingG8vHWWI.weiToSatoshi.call(uintsHM7zql, {from: accounts[4]});
		await LpStakingG8vHWWI.nonReentrant.call({from: accounts[1]});
		await LpStakingG8vHWWI.getReward.call({from: accounts[4]});
		const uint256I4Og1bl = await LpStakingG8vHWWI.incomeEarned.call(addressAICSYer, {from: "0x0000000000000000000000000000000000000001"});
		const addressHL7YeOc = await LpStakingG8vHWWI.inCaseTokensGetStuck.call(addressiQ8g9Lz, uintYfcLncj, {from: accounts[3]});
		const addressasjv9hB = await LpStakingG8vHWWI.updateReward.call(addressxBYhPNM, {from: accounts[1]});

		assert.equal(uint256lV6CP3z, BigInt("0"))
		await expect(LpStakingG8vHWWI.nonReentrant.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingDgI0CG9 = await LpStaking.new({from: accounts[2]});
		const uintL1ePL8e = BigInt("361")
		const addresshq3Ippg = accounts[1]
		await LpStakingDgI0CG9.lpRewardRateChanged.call({from: accounts[5]});
		const uint256HbnpBL8 = await LpStakingDgI0CG9.weiToSatoshi.call(uintL1ePL8e, {from: accounts[1]});
		const uint256kGCPok = await LpStakingDgI0CG9.getUserAccumulatedWithdrawIncome.call(addresshq3Ippg, {from: accounts[2]});
		const uint256QVZrXVR = await LpStakingDgI0CG9.getCurIncomeRate.call({from: accounts[5]});

		await expect(LpStakingDgI0CG9.lpRewardRateChanged.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingOlIam30 = await LpStaking.new({from: accounts[2]});
		const uint256P5GeJM1 = await LpStakingOlIam30.getCurIncomeRate.call({from: accounts[1]});
		await LpStakingOlIam30.nonReentrant.call({from: accounts[1]});

		await expect(LpStakingOlIam30.getCurIncomeRate.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingwnnHXjk = await LpStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressSxhHgob = accounts[3]
		const addressqOK0Yj3 = accounts[1]
		const addressofJXk6 = accounts[1]
		const addressCo9Hrp = accounts[1]
		const uintr1T4Vp4 = BigInt("1692")
		const addressHs0mW0L = accounts[2]
		const uintKvBVAcw = BigInt("1286")
		const addressAONcOl0 = await LpStakingwnnHXjk.initialize.call(addressCo9Hrp, addressofJXk6, addressqOK0Yj3, addressSxhHgob, {from: accounts[1]});
		const addressnYcFnXU = await LpStakingwnnHXjk.inCaseTokensGetStuck.call(addressHs0mW0L, uintr1T4Vp4, {from: accounts[4]});
		const uint256LKxzhHN = await LpStakingwnnHXjk.stake.call(uintKvBVAcw, {from: accounts[1]});
	});
})