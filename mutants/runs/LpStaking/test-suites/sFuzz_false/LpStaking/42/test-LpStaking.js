const LpStaking = artifacts.require("LpStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LpStaking', (accounts) => {
	it('test for LpStaking', async () => {
		const LpStakingXqSlbP = await LpStaking.new({from: accounts[1]});
		const addressG8ebuGS = accounts[0]
		const bytesl3OL6r = "0x0312111a1f0a1f010f08150d12080c06121d151f071a020c0516071e0d171b12"
		const bytegyqJDAg = "0x0b16171010191c0c021b011d1419171d1f1319010c01010e090f161b1704121c"
		const uintR8tBcVh = BigInt("243")
		const uintwtTQs9u = BigInt("721")
		const uintQkTCnyn = BigInt("143")
		const uint256kwjlx2Q = await LpStakingXqSlbP.rewardPerToken.call({from: accounts[1]});
		const uint256G4kXjqd = await LpStakingXqSlbP.incomeEarned.call(addressG8ebuGS, {from: accounts[3]});
		const uint256ILhRGak = await LpStakingXqSlbP.stakeWithPermit.call(uintQkTCnyn, uintwtTQs9u, uintR8tBcVh, bytegyqJDAg, bytesl3OL6r, {from: accounts[5]});

		assert.equal(uint256kwjlx2Q, BigInt("0"))
		await expect(LpStakingXqSlbP.incomeEarned.call(addressG8ebuGS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingS9OKVCR = await LpStaking.new({from: accounts[4]});
		const uintRGc1r1O = BigInt("1485")
		const boolEKmlO10 = false
		const uintO60rIPg = BigInt("1495")
		const uint256qp5i8nn = await LpStakingS9OKVCR.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256yld2si = await LpStakingS9OKVCR.withdraw.call(uintRGc1r1O, {from: accounts[2]});
		const boolwNWHJDy = await LpStakingS9OKVCR.setEmergencyStop.call(boolEKmlO10, {from: "0x0000000000000000000000000000000000000001"});
		const uint256NXRbNqw = await LpStakingS9OKVCR.withdraw.call(uintO60rIPg, {from: accounts[1]});
		await LpStakingS9OKVCR.nonReentrant.call({from: accounts[2]});

		await expect(LpStakingS9OKVCR.lastTimeRewardApplicable.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingdmpjFb = await LpStaking.new({from: accounts[4]});
		const addressb0yYEYu = accounts[1]
		const addressKCrCziV = accounts[1]
		const addressQVFLj19 = accounts[4]
		const addressvS8qZmm = accounts[2]
		await LpStakingdmpjFb.nonReentrant.call({from: accounts[1]});
		const addressQM9ThN = await LpStakingdmpjFb.initialize.call(addressvS8qZmm, addressQVFLj19, addressKCrCziV, addressb0yYEYu, {from: accounts[4]});

		await expect(LpStakingdmpjFb.nonReentrant.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingc5yncN5 = await LpStaking.new({from: accounts[3]});
		const boolzoVksP8 = true
		const uintDtkPNzk = BigInt("2006")
		const uint256b4J4Cj = await LpStakingc5yncN5.rewardPerToken.call({from: accounts[0]});
		const boolSqsEqz = await LpStakingc5yncN5.setEmergencyStop.call(boolzoVksP8, {from: accounts[0]});
		const uint256mHqubh9 = await LpStakingc5yncN5.weiToSatoshi.call(uintDtkPNzk, {from: accounts[1]});
		await LpStakingc5yncN5.getReward.call({from: accounts[0]});

		assert.equal(uint256b4J4Cj, BigInt("0"))
		await expect(LpStakingc5yncN5.setEmergencyStop.call(boolzoVksP8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakinggTk2Tcx = await LpStaking.new({from: accounts[1]});
		const addressLH4QJ1 = accounts[4]
		const boolxPTuUau = true
		const uint256mIySRcW = await LpStakinggTk2Tcx.rewardEarned.call(addressLH4QJ1, {from: accounts[3]});
		await LpStakinggTk2Tcx.nonEmergencyStop.call({from: accounts[0]});
		const uint256mR3psjT = await LpStakinggTk2Tcx.lastTimeRewardApplicable.call({from: accounts[4]});
		await LpStakinggTk2Tcx.exit.call({from: accounts[0]});
		const boolLcDvuz = await LpStakinggTk2Tcx.setEmergencyStop.call(boolxPTuUau, {from: accounts[0]});

		assert.equal(uint256mIySRcW, BigInt("0"))
		await expect(LpStakinggTk2Tcx.nonEmergencyStop.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingMw9q9uv = await LpStaking.new({from: "0x0000000000000000000000000000000000000001"});
		await LpStakingMw9q9uv.exit.call({from: accounts[5]});
		const uint256yUbQNEL = await LpStakingMw9q9uv.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256Wp4dKMQ = await LpStakingMw9q9uv.rewardPerToken.call({from: accounts[5]});
	});

	it('test for LpStaking', async () => {
		const LpStakingXqSlbP = await LpStaking.new({from: accounts[1]});
		const uintDzdmwJ = BigInt("567")
		const addressVuECHk = accounts[0]
		const byteilJHgiK = "0x0312111a1f0a1f010f08150d12080c06121d151f071a020c0516071e0d171b12"
		const byteMt1KkKd = "0x0b16171010191c0c021b011d1419171d1f1319010c01010e090f161b1704121c"
		const uintKGkP1sS = BigInt("243")
		const uintXQUTQNn = BigInt("721")
		const uintY8exLVR = BigInt("143")
		const uint256kwjlx2Q = await LpStakingXqSlbP.rewardPerToken.call({from: accounts[1]});
		const uint256LT68jIt = await LpStakingXqSlbP.stake.call(uintDzdmwJ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256pyi7kTq = await LpStakingXqSlbP.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256G4kXjqd = await LpStakingXqSlbP.incomeEarned.call(addressVuECHk, {from: accounts[3]});
		const uint256ILhRGak = await LpStakingXqSlbP.stakeWithPermit.call(uintY8exLVR, uintXQUTQNn, uintKGkP1sS, byteMt1KkKd, byteilJHgiK, {from: accounts[5]});

		assert.equal(uint256kwjlx2Q, BigInt("0"))
		await expect(LpStakingXqSlbP.stake.call(uintDzdmwJ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingdmpjFb = await LpStaking.new({from: accounts[4]});
		const addressODlC10X = accounts[1]
		const addressOwqXh7 = accounts[2]
		const addressPKf8rM = accounts[4]
		const addressDT0F1gv = accounts[2]
		const addressQM9ThN = await LpStakingdmpjFb.initialize.call(addressDT0F1gv, addressPKf8rM, addressOwqXh7, addressODlC10X, {from: accounts[4]});
	});

	it('test for LpStaking', async () => {
		const LpStakingbLp2Csg = await LpStaking.new({from: accounts[1]});
		const addresssg2Fjjg = accounts[1]
		const uint256austY9t = await LpStakingbLp2Csg.rewardEarned.call(addresssg2Fjjg, {from: accounts[3]});
		const uint256V93lQai = await LpStakingbLp2Csg.getCurIncomeRate.call({from: accounts[2]});

		assert.equal(uint256austY9t, BigInt("0"))
		await expect(LpStakingbLp2Csg.getCurIncomeRate.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingW4p6Bt8 = await LpStaking.new({from: accounts[5]});
		const addressRfyEyxA = accounts[1]
		const addressKsBM22E = accounts[0]
		const addressT3hZDuJ = accounts[3]
		const uint256BOkEuS2 = await LpStakingW4p6Bt8.getUserAccumulatedWithdrawIncome.call(addressRfyEyxA, {from: accounts[2]});
		const uint256d4TkwF3 = await LpStakingW4p6Bt8.getCurIncomeRate.call({from: accounts[2]});
		await LpStakingW4p6Bt8.nonEmergencyStop.call({from: accounts[2]});
		const addressJMvrxNp = await LpStakingW4p6Bt8.transferOwnership.call(addressKsBM22E, {from: accounts[3]});
		const addressILAiRv = await LpStakingW4p6Bt8.updateReward.call(addressT3hZDuJ, {from: accounts[0]});

		assert.equal(uint256BOkEuS2, BigInt("0"))
		await expect(LpStakingW4p6Bt8.getCurIncomeRate.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingXqSlbP = await LpStaking.new({from: accounts[1]});
		const byteI0SNepq = "0x0312111a1f0a1f010f08150d12080c06121d151f071a020c0516071e0d171b12"
		const bytedoR0PC = "0x0b16171010191c0c021b011d1419171d1f1319010c01010e090f161b1704121c"
		const uintBAjmeV4 = BigInt("243")
		const uintn52o2XH = BigInt("721")
		const uintKlDYKdC = BigInt("143")
		const uint256kwjlx2Q = await LpStakingXqSlbP.rewardPerToken.call({from: accounts[1]});
		await LpStakingXqSlbP.exit.call({from: accounts[2]});
		await LpStakingXqSlbP.nonReentrant.call({from: accounts[3]});
		const uint256ILhRGak = await LpStakingXqSlbP.stakeWithPermit.call(uintKlDYKdC, uintn52o2XH, uintBAjmeV4, bytedoR0PC, byteI0SNepq, {from: accounts[5]});

		assert.equal(uint256kwjlx2Q, BigInt("0"))
		await expect(LpStakingXqSlbP.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})