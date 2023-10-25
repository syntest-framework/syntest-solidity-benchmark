const LpStaking = artifacts.require("LpStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LpStaking', (accounts) => {
	it('test for LpStaking', async () => {
		const LpStakingUIFEj7g = await LpStaking.new({from: accounts[3]});
		const addresszUZeElm = accounts[4]
		const boolp1CSsI = true
		const uints83nF4 = BigInt("966")
//		const uint256ETZG7g2 = await LpStakingUIFEj7g.incomeEarned.call(addresszUZeElm, {from: accounts[5]});
//		const boolY1w4Nx9 = await LpStakingUIFEj7g.setEmergencyStop.call(boolp1CSsI, {from: accounts[3]});
//		await LpStakingUIFEj7g.exit.call({from: accounts[1]});
//		await LpStakingUIFEj7g.nonReentrant.call({from: accounts[3]});
//		const uint256Yn1XWHj = await LpStakingUIFEj7g.stake.call(uints83nF4, {from: accounts[2]});
//		await LpStakingUIFEj7g.getReward.call({from: accounts[0]});

		await expect(LpStakingUIFEj7g.incomeEarned.call(addresszUZeElm, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingeqamN67 = await LpStaking.new({from: accounts[4]});
//		const uint256QS4LDj1 = await LpStakingeqamN67.getCurIncomeRate.call({from: accounts[2]});
//		const uint256UDW15BO = await LpStakingeqamN67.rewardPerToken.call({from: accounts[2]});
//		await LpStakingeqamN67.exit.call({from: accounts[2]});

		await expect(LpStakingeqamN67.getCurIncomeRate.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingY6dCQcj = await LpStaking.new({from: accounts[1]});
		const addressagSNTlx = accounts[1]
//		await LpStakingY6dCQcj.exit.call({from: accounts[2]});
		await LpStakingY6dCQcj.exit.call({from: accounts[2]});
//		await LpStakingY6dCQcj.nonEmergencyStop.call({from: accounts[3]});
//		const addressuItxnjQ = await LpStakingY6dCQcj.updateIncome.call(addressagSNTlx, {from: accounts[3]});

		await expect(LpStakingY6dCQcj.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingYu3iIi4 = await LpStaking.new({from: accounts[2]});
		const addressEaNfpL4 = accounts[0]
		const bool2T3FXN = false
		const addresswAQuodm = accounts[2]
//		const addressC09V7ak = await LpStakingYu3iIi4.updateReward.call(addressEaNfpL4, {from: accounts[5]});
//		const uint256TIqDmU = await LpStakingYu3iIi4.rewardPerToken.call({from: accounts[4]});
//		const uint256OyDnxK = await LpStakingYu3iIi4.getCurIncomeRate.call({from: accounts[3]});
//		const booljI7HQ3Z = await LpStakingYu3iIi4.setEmergencyStop.call(bool2T3FXN, {from: accounts[4]});
//		const uint256woJU4QW = await LpStakingYu3iIi4.incomeEarned.call(addresswAQuodm, {from: accounts[3]});

		await expect(LpStakingYu3iIi4.updateReward.call(addressEaNfpL4, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakinghHfmxqL = await LpStaking.new({from: accounts[1]});
		const boolVO3zYdr = false
		const uint256Zm6oOYV = await LpStakinghHfmxqL.rewardPerToken.call({from: accounts[1]});
//		const uint256duOmA9Z = await LpStakinghHfmxqL.lastTimeRewardApplicable.call({from: accounts[3]});
//		const boolt98M9k = await LpStakinghHfmxqL.setEmergencyStop.call(boolVO3zYdr, {from: accounts[1]});
//		await LpStakinghHfmxqL.lpIncomeRateChanged.call({from: accounts[2]});

		assert.equal(uint256Zm6oOYV, BigInt("0"))
		await expect(LpStakinghHfmxqL.lastTimeRewardApplicable.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingtKz2D62 = await LpStaking.new({from: accounts[0]});
		const addressu5UdbqS = accounts[2]
		const addressg2Q8sX1 = accounts[1]
		const uint0nN9uw = BigInt("259")
//		const addressR2gMfIQ = await LpStakingtKz2D62.transferOwnership.call(addressu5UdbqS, {from: accounts[1]});
//		await LpStakingtKz2D62.lpRewardRateChanged.call({from: accounts[0]});
//		await LpStakingtKz2D62.getReward.call({from: accounts[3]});
//		const uint256tRscFa2 = await LpStakingtKz2D62.incomeEarned.call(addressg2Q8sX1, {from: accounts[0]});
//		const uint256eeOiB7k = await LpStakingtKz2D62.stake.call(uint0nN9uw, {from: accounts[3]});
//		await LpStakingtKz2D62.lpIncomeRateChanged.call({from: accounts[3]});

		await expect(LpStakingtKz2D62.transferOwnership.call(addressu5UdbqS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingbAy1C6A = await LpStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressWIX8iAO = accounts[3]
		const uintGAsccXN = BigInt("1098")
		const addressVtKASF2 = accounts[4]
		const uintGpdfyOB = BigInt("784")
		const addressZXhY4sQ = accounts[5]
		const addressptN6zoi = await LpStakingbAy1C6A.updateIncome.call(addressWIX8iAO, {from: accounts[0]});
		const uint256tVJH7oK = await LpStakingbAy1C6A.withdraw.call(uintGAsccXN, {from: accounts[2]});
		const uint256bghtcKy = await LpStakingbAy1C6A.getUserAccumulatedWithdrawIncome.call(addressVtKASF2, {from: "0x0000000000000000000000000000000000000001"});
		const uint256YgkSNxt = await LpStakingbAy1C6A.weiToSatoshi.call(uintGpdfyOB, {from: accounts[1]});
		const addresslBOFWFb = await LpStakingbAy1C6A.updateIncome.call(addressZXhY4sQ, {from: accounts[2]});
		await LpStakingbAy1C6A.lpRewardRateChanged.call({from: accounts[2]});
	});

	it('test for LpStaking', async () => {
		const LpStakingZgZUDjO = await LpStaking.new({from: accounts[4]});
		const addressGV17L2J = accounts[0]
		const uint256O6R8M7 = await LpStakingZgZUDjO.getUserAccumulatedWithdrawIncome.call(addressGV17L2J, {from: accounts[0]});
//		await LpStakingZgZUDjO.getIncome.call({from: accounts[4]});

		assert.equal(uint256O6R8M7, BigInt("0"))
		await expect(LpStakingZgZUDjO.getIncome.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingeqamN67 = await LpStaking.new({from: accounts[4]});
		const addressIQJmG4I = accounts[1]
		const addresspR3fVXW = accounts[1]
		const uint256UDW15BO = await LpStakingeqamN67.rewardPerToken.call({from: accounts[2]});
		const uint256dvnohlV = await LpStakingeqamN67.rewardEarned.call(addressIQJmG4I, {from: accounts[1]});
//		await LpStakingeqamN67.exit.call({from: accounts[2]});
//		const uint256gpRjWzs = await LpStakingeqamN67.incomeEarned.call(addresspR3fVXW, {from: "0x0000000000000000000000000000000000000001"});
//		await LpStakingeqamN67.nonReentrant.call({from: accounts[0]});

		assert.equal(uint256UDW15BO, BigInt("0"))
		assert.equal(uint256dvnohlV, BigInt("0"))
		await expect(LpStakingeqamN67.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingeqamN67 = await LpStaking.new({from: accounts[4]});
		const addressi8XbEx = accounts[5]
		const addressG7e0571 = accounts[1]
		const addressOQN8cNK = accounts[5]
		const addressmpcOhZ = accounts[0]
		const addressQJYKOL = accounts[2]
		const addressHH8XuhF = accounts[4]
		const addresspxUTepI = accounts[1]
		const addressOHDOMTy = await LpStakingeqamN67.initialize.call(addressmpcOhZ, addressOQN8cNK, addressG7e0571, addressi8XbEx, {from: accounts[3]});
		const uint256UDW15BO = await LpStakingeqamN67.rewardPerToken.call({from: accounts[2]});
		const uint256dvnohlV = await LpStakingeqamN67.rewardEarned.call(addressQJYKOL, {from: accounts[1]});
//		const uint256xR5qqPg = await LpStakingeqamN67.incomeEarned.call(addressHH8XuhF, {from: accounts[4]});
//		await LpStakingeqamN67.exit.call({from: accounts[2]});
//		const uint256ZURQSNc = await LpStakingeqamN67.incomePerToken.call({from: accounts[2]});
//		await LpStakingeqamN67.getReward.call({from: accounts[5]});
//		await LpStakingeqamN67.lpIncomeRateChanged.call({from: accounts[5]});
//		const uint256gpRjWzs = await LpStakingeqamN67.incomeEarned.call(addresspxUTepI, {from: "0x0000000000000000000000000000000000000001"});
//		await LpStakingeqamN67.nonReentrant.call({from: accounts[0]});

		assert.equal(uint256UDW15BO, BigInt("0"))
		assert.equal(uint256dvnohlV, BigInt("0"))
		await expect(LpStakingeqamN67.incomeEarned.call(addressHH8XuhF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})