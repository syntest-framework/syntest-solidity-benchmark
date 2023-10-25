const AavePoolReward = artifacts.require("AavePoolReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AavePoolReward', (accounts) => {
	it('test for AavePoolReward', async () => {
		const AavePoolRewardJqdq36 = await AavePoolReward.new({from: accounts[5]});
		const uintYMAmjWF = BigInt("670")
		const address4kI4wb = accounts[5]
		const uintvld2Cb = BigInt("1778")
		const uint256KVNq3oB = await AavePoolRewardJqdq36.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256fUFywG0 = await AavePoolRewardJqdq36.notifyRewardAmount.call(uintYMAmjWF, {from: accounts[0]});
		const addressVuz6cEW = await AavePoolRewardJqdq36.dev.call(address4kI4wb, {from: accounts[4]});
		await AavePoolRewardJqdq36.getReward.call({from: accounts[0]});
		const uint256OhoBSQ5 = await AavePoolRewardJqdq36.notifyRewardAmount.call(uintvld2Cb, {from: accounts[3]});
		await AavePoolRewardJqdq36.getReward.call({from: accounts[4]});

		assert.equal(uint256KVNq3oB, BigInt("0"))
		await expect(AavePoolRewardJqdq36.notifyRewardAmount.call(uintYMAmjWF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardx3OBFhl = await AavePoolReward.new({from: accounts[2]});
		const uintsiiDs6 = BigInt("88")
		const uint256ZnRw62i = await AavePoolRewardx3OBFhl.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256q9DQ9vP = await AavePoolRewardx3OBFhl.withdraw.call(uintsiiDs6, {from: accounts[4]});
		const uint256oPwQE7 = await AavePoolRewardx3OBFhl.lastTimeRewardApplicable.call({from: accounts[3]});

		assert.equal(uint256ZnRw62i, BigInt("0"))
		await expect(AavePoolRewardx3OBFhl.withdraw.call(uintsiiDs6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardlx21PLx = await AavePoolReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addresssDOblt0 = accounts[0]
		const uint39DxGF = BigInt("89")
		await AavePoolRewardlx21PLx.getReward.call({from: accounts[3]});
		const uint256A8MwLxO = await AavePoolRewardlx21PLx.rewardPerToken.call({from: accounts[4]});
		const addressP8GSj5y = await AavePoolRewardlx21PLx.updateReward.call(addresssDOblt0, {from: accounts[1]});
		const uint256FxaUL8u = await AavePoolRewardlx21PLx.withdraw.call(uint39DxGF, {from: accounts[4]});
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardwvUDIlw = await AavePoolReward.new({from: accounts[4]});
		const uintcjRvRCC = BigInt("1975")
		const uint256DoezW7K = await AavePoolRewardwvUDIlw.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256Klc63lj = await AavePoolRewardwvUDIlw.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256pctRpr = await AavePoolRewardwvUDIlw.stake.call(uintcjRvRCC, {from: accounts[3]});

		assert.equal(uint256DoezW7K, BigInt("0"))
		assert.equal(uint256Klc63lj, BigInt("0"))
		await expect(AavePoolRewardwvUDIlw.stake.call(uintcjRvRCC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardaEupZy1 = await AavePoolReward.new({from: accounts[1]});
		const addressfMfiQgi = accounts[0]
		const addresskgiNygr = await AavePoolRewardaEupZy1.updateReward.call(addressfMfiQgi, {from: accounts[2]});
		await AavePoolRewardaEupZy1.exit.call({from: accounts[2]});
		const uint256RZBpC1J = await AavePoolRewardaEupZy1.rewardPerToken.call({from: accounts[0]});

		await expect(AavePoolRewardaEupZy1.updateReward.call(addressfMfiQgi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardLJRPY7q = await AavePoolReward.new({from: accounts[1]});
		const addressdq1HPO3 = accounts[2]
		const uintGaDjNbx = BigInt("1036")
		await AavePoolRewardLJRPY7q.exit.call({from: accounts[2]});
		const uint256MMn0wPf = await AavePoolRewardLJRPY7q.earned.call(addressdq1HPO3, {from: accounts[4]});
		const uint256D5Qx9Vp = await AavePoolRewardLJRPY7q.notifyRewardAmount.call(uintGaDjNbx, {from: accounts[0]});

		await expect(AavePoolRewardLJRPY7q.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardxP73VqM = await AavePoolReward.new({from: accounts[0]});
		const addressmv7hFRN = accounts[2]
		const addressfeNtGB6 = accounts[2]
		const addressa4I0wpx = accounts[5]
		const addressEAFLr4N = accounts[0]
		const addressCzFM4d = await AavePoolRewardxP73VqM.dev.call(addressmv7hFRN, {from: accounts[0]});
		const uint256BAjkDZc = await AavePoolRewardxP73VqM.earned.call(addressfeNtGB6, {from: accounts[4]});
		const addressKeo40p9 = await AavePoolRewardxP73VqM.dev.call(addressa4I0wpx, {from: accounts[4]});
		const uint256G9ujmgD = await AavePoolRewardxP73VqM.earned.call(addressEAFLr4N, {from: accounts[0]});
		await AavePoolRewardxP73VqM.getReward.call({from: accounts[1]});

		assert.equal(uint256BAjkDZc, BigInt("0"))
		await expect(AavePoolRewardxP73VqM.dev.call(addressa4I0wpx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AavePoolReward', async () => {
		const AavePoolRewardssu1Ho = await AavePoolReward.new({from: accounts[4]});
		const uintpzZ9Yv3 = BigInt("1307")
		const addressiIH8Lr3 = accounts[3]
		const uint256ZDCj7u = await AavePoolRewardssu1Ho.notifyRewardAmount.call(uintpzZ9Yv3, {from: accounts[4]});
		const addresslYzySsG = await AavePoolRewardssu1Ho.updateReward.call(addressiIH8Lr3, {from: accounts[5]});
		await AavePoolRewardssu1Ho.exit.call({from: accounts[0]});

		await expect(AavePoolRewardssu1Ho.updateReward.call(addressiIH8Lr3, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})