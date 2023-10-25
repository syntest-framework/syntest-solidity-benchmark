const LpStaking = artifacts.require("LpStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LpStaking', (accounts) => {
	it('test for LpStaking', async () => {
		const LpStakinghqvId6J = await LpStaking.new({from: accounts[2]});
		const uintHy4O04K = BigInt("826")
		const addressozFSiEs = accounts[2]
		const addressViXeagD = accounts[2]
		const addressrCUwZlv = accounts[1]
		const addressZfeWeh3 = accounts[4]
		const addressQaq4xWX = accounts[2]
		const uint256R2HPM7s = await LpStakinghqvId6J.weiToSatoshi.call(uintHy4O04K, {from: accounts[2]});
		const uint256XEx4g9h = await LpStakinghqvId6J.rewardEarned.call(addressozFSiEs, {from: accounts[3]});
		const address7b8QP3 = await LpStakinghqvId6J.initialize.call(addressQaq4xWX, addressZfeWeh3, addressrCUwZlv, addressViXeagD, {from: "0x0000000000000000000000000000000000000001"});
//		await LpStakinghqvId6J.lpIncomeRateChanged.call({from: accounts[2]});
//		await LpStakinghqvId6J.lpRewardRateChanged.call({from: accounts[4]});

		assert.equal(uint256R2HPM7s, BigInt("0"))
		assert.equal(uint256XEx4g9h, BigInt("0"))
		await expect(LpStakinghqvId6J.lpIncomeRateChanged.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingyaiD39v = await LpStaking.new({from: accounts[2]});
		const addressu5E5wpv = accounts[1]
		const addressEkb5KRY = accounts[2]
		const addressKXIQkTh = accounts[1]
		const addressFimEtf = accounts[4]
		const addressLSRKtBp = accounts[1]
		const addressihtCb1Q = await LpStakingyaiD39v.initialize.call(addressFimEtf, addressKXIQkTh, addressEkb5KRY, addressu5E5wpv, {from: accounts[4]});
//		const uint256cUBWIhw = await LpStakingyaiD39v.incomeEarned.call(addressLSRKtBp, {from: accounts[1]});
//		await LpStakingyaiD39v.getReward.call({from: accounts[2]});

		await expect(LpStakingyaiD39v.incomeEarned.call(addressLSRKtBp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakinglai0mvq = await LpStaking.new({from: accounts[3]});
		const addressv8RDMf5 = accounts[1]
		const uintdWtgm5s = BigInt("363")
		const addresspZIT8AV = accounts[1]
		const uintkr5BVSc = BigInt("1336")
		const uintJFNeZX1 = BigInt("972")
		const addressJakdGah = accounts[1]
//		const addresst8IfynS = await LpStakinglai0mvq.updateIncome.call(addressv8RDMf5, {from: accounts[4]});
//		const addresst9PPbJq = await LpStakinglai0mvq.inCaseTokensGetStuck.call(addresspZIT8AV, uintdWtgm5s, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256lZAveci = await LpStakinglai0mvq.getCurIncomeRate.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256yhayaW3 = await LpStakinglai0mvq.withdraw.call(uintkr5BVSc, {from: accounts[1]});
//		const addressebZRqDz = await LpStakinglai0mvq.inCaseTokensGetStuck.call(addressJakdGah, uintJFNeZX1, {from: accounts[1]});

		await expect(LpStakinglai0mvq.updateIncome.call(addressv8RDMf5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingRiBtA29 = await LpStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintsvmPPps = BigInt("1455")
		const addressv99BSDU = accounts[0]
		const uint256C1AyJjw = await LpStakingRiBtA29.weiToSatoshi.call(uintsvmPPps, {from: accounts[4]});
		const uint256Be65JkQ = await LpStakingRiBtA29.incomeEarned.call(addressv99BSDU, {from: accounts[3]});
	});

	it('test for LpStaking', async () => {
		const LpStakingWuND2FV = await LpStaking.new({from: accounts[1]});
		const addressq6nu5Ch = accounts[4]
		const address5YCJ4A = accounts[2]
		const addressXq9iPOR = accounts[2]
//		const uint256CZKNre = await LpStakingWuND2FV.lastTimeRewardApplicable.call({from: accounts[4]});
//		const addressRklgwnO = await LpStakingWuND2FV.updateIncome.call(addressq6nu5Ch, {from: accounts[0]});
//		await LpStakingWuND2FV.getReward.call({from: accounts[4]});
//		const uint256bpDiSVM = await LpStakingWuND2FV.getUserAccumulatedWithdrawIncome.call(address5YCJ4A, {from: accounts[0]});
//		const uint256R7s8d5I = await LpStakingWuND2FV.incomeEarned.call(addressXq9iPOR, {from: accounts[4]});

		await expect(LpStakingWuND2FV.lastTimeRewardApplicable.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingRNjonKv = await LpStaking.new({from: accounts[5]});
		const uintT92A0v = BigInt("1827")
//		const uint256uzwTVrm = await LpStakingRNjonKv.getCurIncomeRate.call({from: accounts[3]});
//		const uint256QxJSJG0 = await LpStakingRNjonKv.lastTimeRewardApplicable.call({from: accounts[0]});
//		const uint256PChXcf = await LpStakingRNjonKv.weiToSatoshi.call(uintT92A0v, {from: accounts[2]});
//		const uint256PzKgdYB = await LpStakingRNjonKv.lastTimeRewardApplicable.call({from: accounts[2]});
//		await LpStakingRNjonKv.exit.call({from: accounts[2]});

		await expect(LpStakingRNjonKv.getCurIncomeRate.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingE3PyHjK = await LpStaking.new({from: accounts[3]});
		const uintQjxfrlE = BigInt("1092")
		const addressNjlwAW = "0x0000000000000000000000000000000000000001"
		const addressaKWQwYA = accounts[1]
		const addressQxuyFu = accounts[5]
		const addressHl9gkUn = accounts[5]
		const addressFQQqZe6 = accounts[2]
//		const uint256bMQuzZk = await LpStakingE3PyHjK.stake.call(uintQjxfrlE, {from: accounts[1]});
//		await LpStakingE3PyHjK.onlyOwner.call({from: accounts[0]});
//		const addressCfhA5pd = await LpStakingE3PyHjK.initialize.call(addressHl9gkUn, addressQxuyFu, addressaKWQwYA, addressNjlwAW, {from: accounts[1]});
//		await LpStakingE3PyHjK.nonEmergencyStop.call({from: accounts[0]});
//		const addresstgG8bfn = await LpStakingE3PyHjK.updateReward.call(addressFQQqZe6, {from: accounts[0]});

		await expect(LpStakingE3PyHjK.stake.call(uintQjxfrlE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakinghqvId6J = await LpStaking.new({from: accounts[2]});
		const boolB8xVVeY = true
		const uinte8OSYJU = BigInt("826")
		const addressXzD25GY = accounts[2]
		const addressyUIm2Tr = accounts[2]
		const addressSFzCBpF = accounts[1]
		const addressrItxbk8 = accounts[4]
		const addressTf7o9ei = accounts[2]
//		const boolN0a70Em = await LpStakinghqvId6J.setEmergencyStop.call(boolB8xVVeY, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256R2HPM7s = await LpStakinghqvId6J.weiToSatoshi.call(uinte8OSYJU, {from: accounts[2]});
//		const uint256XEx4g9h = await LpStakinghqvId6J.rewardEarned.call(addressXzD25GY, {from: accounts[3]});
//		const address7b8QP3 = await LpStakinghqvId6J.initialize.call(addressTf7o9ei, addressrItxbk8, addressSFzCBpF, addressyUIm2Tr, {from: "0x0000000000000000000000000000000000000001"});
//		await LpStakinghqvId6J.getReward.call({from: accounts[4]});
//		await LpStakinghqvId6J.lpIncomeRateChanged.call({from: accounts[2]});
//		await LpStakinghqvId6J.lpRewardRateChanged.call({from: accounts[4]});

		await expect(LpStakinghqvId6J.setEmergencyStop.call(boolB8xVVeY, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingQurRXdl = await LpStaking.new({from: accounts[5]});
		const addressTvNzUTt = accounts[3]
		const uint256UjiM3LA = await LpStakingQurRXdl.getUserAccumulatedWithdrawIncome.call(addressTvNzUTt, {from: accounts[2]});
//		await LpStakingQurRXdl.lpRewardRateChanged.call({from: accounts[4]});

		assert.equal(uint256UjiM3LA, BigInt("0"))
		await expect(LpStakingQurRXdl.lpRewardRateChanged.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakinghqvId6J = await LpStaking.new({from: accounts[2]});
		const addressnzEMGYS = accounts[3]
		const uint256XEx4g9h = await LpStakinghqvId6J.rewardEarned.call(addressnzEMGYS, {from: accounts[3]});
//		await LpStakinghqvId6J.exit.call({from: accounts[2]});
//		await LpStakinghqvId6J.lpIncomeRateChanged.call({from: accounts[2]});

		assert.equal(uint256XEx4g9h, BigInt("0"))
		await expect(LpStakinghqvId6J.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})