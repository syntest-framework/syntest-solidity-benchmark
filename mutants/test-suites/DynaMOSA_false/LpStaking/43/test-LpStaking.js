const LpStaking = artifacts.require("LpStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LpStaking', (accounts) => {
	it('test for LpStaking', async () => {
		const LpStakingyPVQI2D = await LpStaking.new({from: accounts[1]});
//		await LpStakingyPVQI2D.nonEmergencyStop.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256T73u4Er = await LpStakingyPVQI2D.getCurIncomeRate.call({from: accounts[2]});
//		const uint256L0CqCoD = await LpStakingyPVQI2D.rewardPerToken.call({from: accounts[4]});

		await expect(LpStakingyPVQI2D.nonEmergencyStop.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingQlneWxM = await LpStaking.new({from: accounts[0]});
		const addressBZSi5a = accounts[4]
		const uintovj84Qw = BigInt("1778")
		const byteuBOLIwi = "0x010403171e0c190e0d1c060f1615151e1d1e201e0b1e07070f151e09091c1e02"
		const bytekl24kcv = "0x190e050b04161c1b031a11151e1b040f1e171b2014150919020d131212070814"
		const uintjTGyiMf = BigInt("48")
		const uintv9yFtpT = BigInt("1256")
		const uintiqv4AzW = BigInt("629")
//		const addressr0yRph6 = await LpStakingQlneWxM.transferOwnership.call(addressBZSi5a, {from: accounts[1]});
//		const uint256NxZcLgT = await LpStakingQlneWxM.stake.call(uintovj84Qw, {from: accounts[4]});
//		const uint256bt3D3ML = await LpStakingQlneWxM.stakeWithPermit.call(uintiqv4AzW, uintv9yFtpT, uintjTGyiMf, bytekl24kcv, byteuBOLIwi, {from: accounts[4]});

		await expect(LpStakingQlneWxM.transferOwnership.call(addressBZSi5a, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingHrKcSX4 = await LpStaking.new({from: accounts[1]});
		const addressd53O8FR = accounts[1]
		const boolslHMG0Z = false
//		await LpStakingHrKcSX4.lpRewardRateChanged.call({from: accounts[3]});
//		const uint256eKE9skW = await LpStakingHrKcSX4.incomePerToken.call({from: accounts[0]});
//		const addressxm3jOAL = await LpStakingHrKcSX4.transferOwnership.call(addressd53O8FR, {from: accounts[4]});
//		const boolNpsIAyS = await LpStakingHrKcSX4.setEmergencyStop.call(boolslHMG0Z, {from: accounts[0]});
//		await LpStakingHrKcSX4.lpIncomeRateChanged.call({from: accounts[2]});

		await expect(LpStakingHrKcSX4.lpRewardRateChanged.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingHAMFXi = await LpStaking.new({from: accounts[4]});
		const addressGjy2szA = accounts[2]
		const addressfs1tdQx = accounts[2]
		const addressRxgFlWc = accounts[3]
		const uint256dGSzcmx = await LpStakingHAMFXi.rewardPerToken.call({from: accounts[2]});
		const uint256WnEz4S = await LpStakingHAMFXi.getUserAccumulatedWithdrawIncome.call(addressGjy2szA, {from: accounts[0]});
//		await LpStakingHAMFXi.nonEmergencyStop.call({from: accounts[0]});
//		const uint256ooESvfO = await LpStakingHAMFXi.rewardEarned.call(addressfs1tdQx, {from: accounts[4]});
//		const uint256hZdWneV = await LpStakingHAMFXi.rewardEarned.call(addressRxgFlWc, {from: accounts[2]});

		assert.equal(uint256WnEz4S, BigInt("0"))
		assert.equal(uint256dGSzcmx, BigInt("0"))
		await expect(LpStakingHAMFXi.nonEmergencyStop.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingOsmCssa = await LpStaking.new({from: accounts[2]});
		const uintnC9bxVd = BigInt("593")
		const addressQZYhPMB = accounts[2]
		const uintGU7EohD = BigInt("663")
		const addressHIdwRUd = "0x0000000000000000000000000000000000000001"
		const addressSndmqQk = "0x0000000000000000000000000000000000000001"
		const addressdiClUB1 = accounts[4]
		const addressKaTDPhE = accounts[1]
		const uint256klga7iw = await LpStakingOsmCssa.weiToSatoshi.call(uintnC9bxVd, {from: accounts[4]});
		const uint256eTP3LG = await LpStakingOsmCssa.getUserAccumulatedWithdrawIncome.call(addressQZYhPMB, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256xBWo8j1 = await LpStakingOsmCssa.stake.call(uintGU7EohD, {from: accounts[3]});
//		await LpStakingOsmCssa.nonReentrant.call({from: accounts[2]});
//		await LpStakingOsmCssa.nonEmergencyStop.call({from: accounts[2]});
//		const addressvMCPZcg = await LpStakingOsmCssa.initialize.call(addressKaTDPhE, addressdiClUB1, addressSndmqQk, addressHIdwRUd, {from: accounts[2]});

		assert.equal(uint256eTP3LG, BigInt("0"))
		assert.equal(uint256klga7iw, BigInt("0"))
		await expect(LpStakingOsmCssa.stake.call(uintGU7EohD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingLXaeycX = await LpStaking.new({from: accounts[4]});
//		const uint256F340CfX = await LpStakingLXaeycX.incomePerToken.call({from: accounts[2]});
//		const uint256d5ZzsJ7 = await LpStakingLXaeycX.getCurIncomeRate.call({from: accounts[1]});
//		const uint256g9wRo4x = await LpStakingLXaeycX.incomePerToken.call({from: accounts[4]});
//		await LpStakingLXaeycX.nonEmergencyStop.call({from: accounts[1]});
//		await LpStakingLXaeycX.getReward.call({from: accounts[4]});

		await expect(LpStakingLXaeycX.incomePerToken.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingPPdJOrw = await LpStaking.new({from: accounts[2]});
		const addressHgU65j = accounts[5]
//		const uint256CV5sxa9 = await LpStakingPPdJOrw.getCurIncomeRate.call({from: accounts[1]});
//		const addresslH0udfA = await LpStakingPPdJOrw.updateReward.call(addressHgU65j, {from: accounts[3]});

		await expect(LpStakingPPdJOrw.getCurIncomeRate.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingERvE0O = await LpStaking.new({from: accounts[1]});
		const addressON822Ms = accounts[3]
		const addressI5Wk4A4 = accounts[0]
		const addressaOhqHGl = accounts[1]
		const addressRifXpc = accounts[3]
		const addressQ8Wn7JU = accounts[2]
		const addressDPe4G8O = await LpStakingERvE0O.initialize.call(addressRifXpc, addressaOhqHGl, addressI5Wk4A4, addressON822Ms, {from: accounts[0]});
		const uint256xNevYQ0 = await LpStakingERvE0O.rewardEarned.call(addressQ8Wn7JU, {from: accounts[1]});
//		const uint256kL4Fi7 = await LpStakingERvE0O.lastTimeRewardApplicable.call({from: accounts[3]});

		assert.equal(uint256xNevYQ0, BigInt("0"))
		await expect(LpStakingERvE0O.lastTimeRewardApplicable.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingPPdJOrw = await LpStaking.new({from: accounts[2]});
		const addressYKX9pEk = accounts[4]
		const addressbqFEJ7I = accounts[5]
		const uint256G4KrVZb = await LpStakingPPdJOrw.rewardPerToken.call({from: accounts[1]});
//		const uint256Nbuu2Yp = await LpStakingPPdJOrw.incomeEarned.call(addressYKX9pEk, {from: accounts[2]});
//		const addresslH0udfA = await LpStakingPPdJOrw.updateReward.call(addressbqFEJ7I, {from: accounts[3]});

		assert.equal(uint256G4KrVZb, BigInt("0"))
		await expect(LpStakingPPdJOrw.incomeEarned.call(addressYKX9pEk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingPPdJOrw = await LpStaking.new({from: accounts[2]});
		const uint256G4KrVZb = await LpStakingPPdJOrw.rewardPerToken.call({from: accounts[1]});
//		await LpStakingPPdJOrw.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256dkbMSZv = await LpStakingPPdJOrw.incomePerToken.call({from: accounts[3]});

		assert.equal(uint256G4KrVZb, BigInt("0"))
		await expect(LpStakingPPdJOrw.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingmi9fYKQ = await LpStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressxIccu4n = accounts[2]
		const address9c2qdV = accounts[2]
		const uint256YvHsLY3 = await LpStakingmi9fYKQ.getUserAccumulatedWithdrawIncome.call(addressxIccu4n, {from: accounts[4]});
		await LpStakingmi9fYKQ.exit.call({from: accounts[3]});
		const uint256d2TKmIO = await LpStakingmi9fYKQ.incomeEarned.call(address9c2qdV, {from: accounts[2]});
	});
})