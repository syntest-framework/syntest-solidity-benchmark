const LpStaking = artifacts.require("LpStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LpStaking', (accounts) => {
	it('test for LpStaking', async () => {
		const LpStakingQOKV35 = await LpStaking.new({from: accounts[0]});
		const uintpaV81Se = BigInt("1824")
		const addressUUaXXd = accounts[1]
//		await LpStakingQOKV35.getIncome.call({from: accounts[0]});
//		const uint256RSQQQt = await LpStakingQOKV35.stake.call(uintpaV81Se, {from: accounts[0]});
//		const uint256XJH2I4m = await LpStakingQOKV35.rewardEarned.call(addressUUaXXd, {from: accounts[3]});
//		await LpStakingQOKV35.getReward.call({from: accounts[4]});

		await expect(LpStakingQOKV35.getIncome.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingZLjfzax = await LpStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const bytehTKfbcC = "0x010f160f0b1e071d171a170a10081f051d1b1511191a14161a08191a041b0317"
		const byten3AcfOd = "0x1512070d0602111911151d1d05051f0e031b0a1c0a1b15020f0e0e0a13080404"
		const uintmnUgD4t = BigInt("191")
		const uinttS1M5o = BigInt("1319")
		const uintJDeoyP = BigInt("1588")
		const boolVoYHtLq = true
		const byteg0vXcQ1 = "0x0b06051b0d1d100b030f090804021208151e1e0b19170e0f1a1b11021b1f1307"
		const byteHtOL9r0 = "0x10001e0b041c010f0110060612030c0f1806011a0c1d0513081f0c00150f1014"
		const uintp5TEGDQ = BigInt("236")
		const uintmp65rI2 = BigInt("942")
		const uintf0OK3uq = BigInt("1024")
		const uint256XJ6DLZp = await LpStakingZLjfzax.stakeWithPermit.call(uintJDeoyP, uinttS1M5o, uintmnUgD4t, byten3AcfOd, bytehTKfbcC, {from: accounts[1]});
		const boolfuhnry = await LpStakingZLjfzax.setEmergencyStop.call(boolVoYHtLq, {from: accounts[4]});
		await LpStakingZLjfzax.getReward.call({from: accounts[2]});
		const uint256GBoraA = await LpStakingZLjfzax.stakeWithPermit.call(uintf0OK3uq, uintmp65rI2, uintp5TEGDQ, byteHtOL9r0, byteg0vXcQ1, {from: accounts[1]});
	});

	it('test for LpStaking', async () => {
		const LpStakingZwMN38P = await LpStaking.new({from: accounts[4]});
		const addressoSANTfV = accounts[2]
//		await LpStakingZwMN38P.exit.call({from: accounts[2]});
//		const uint256nwjlJB9 = await LpStakingZwMN38P.incomeEarned.call(addressoSANTfV, {from: accounts[2]});
//		const uint256ZhxAfep = await LpStakingZwMN38P.incomePerToken.call({from: accounts[1]});

		await expect(LpStakingZwMN38P.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingOElnwmQ = await LpStaking.new({from: accounts[2]});
		const boolRx7EADw = false
		const uintRvO5XA = BigInt("1522")
		const addressjG1enqH = "0x0000000000000000000000000000000000000001"
		const addresscvE3tNa = accounts[3]
		const addressrt0l92T = accounts[1]
		const addressJD7SBa7 = accounts[1]
		const address3ZflSG = accounts[0]
//		const boolJJY4KdN = await LpStakingOElnwmQ.setEmergencyStop.call(boolRx7EADw, {from: accounts[2]});
//		const uint256UwwLbm4 = await LpStakingOElnwmQ.stake.call(uintRvO5XA, {from: "0x0000000000000000000000000000000000000001"});
//		await LpStakingOElnwmQ.exit.call({from: accounts[1]});
//		const uint256xfaz9nZ = await LpStakingOElnwmQ.incomePerToken.call({from: accounts[5]});
//		const addressdRdIjuB = await LpStakingOElnwmQ.initialize.call(addressJD7SBa7, addressrt0l92T, addresscvE3tNa, addressjG1enqH, {from: accounts[2]});
//		const addressFQwIT6 = await LpStakingOElnwmQ.transferOwnership.call(address3ZflSG, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LpStakingOElnwmQ.setEmergencyStop.call(boolRx7EADw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingK0EdXZ = await LpStaking.new({from: accounts[2]});
		const addressAjnpCCs = accounts[4]
//		const addressXwLnKz1 = await LpStakingK0EdXZ.updateIncome.call(addressAjnpCCs, {from: accounts[3]});
//		const uint256x3P60S9 = await LpStakingK0EdXZ.incomePerToken.call({from: accounts[0]});

		await expect(LpStakingK0EdXZ.updateIncome.call(addressAjnpCCs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingMN0nwik = await LpStaking.new({from: accounts[4]});
		const addressR3I8a8f = accounts[4]
		const boolMVvyaOS = false
		const addressnI1pno = accounts[0]
//		const uint256Izil0UG = await LpStakingMN0nwik.incomeEarned.call(addressR3I8a8f, {from: accounts[2]});
//		const boollqbPcGy = await LpStakingMN0nwik.setEmergencyStop.call(boolMVvyaOS, {from: accounts[1]});
//		const uint256teJ3l4I = await LpStakingMN0nwik.lastTimeRewardApplicable.call({from: accounts[1]});
//		const addressXNkDwg = await LpStakingMN0nwik.updateIncome.call(addressnI1pno, {from: accounts[1]});
//		const uint256nDy9mhQ = await LpStakingMN0nwik.incomePerToken.call({from: accounts[0]});

		await expect(LpStakingMN0nwik.incomeEarned.call(addressR3I8a8f, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStaking36cIQe = await LpStaking.new({from: accounts[1]});
		const addressN6mlhcD = accounts[4]
		const addressHQh2Nco = accounts[3]
		const uint256sA4hTqW = await LpStaking36cIQe.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256Q9raned = await LpStaking36cIQe.incomeEarned.call(addressN6mlhcD, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256HeoOXoz = await LpStaking36cIQe.incomePerToken.call({from: accounts[0]});
//		const uint256JGKFeTd = await LpStaking36cIQe.getCurIncomeRate.call({from: accounts[1]});
//		const addressMEJRl43 = await LpStaking36cIQe.transferOwnership.call(addressHQh2Nco, {from: accounts[1]});

		assert.equal(uint256sA4hTqW, BigInt("0"))
		await expect(LpStaking36cIQe.incomeEarned.call(addressN6mlhcD, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingq8QICQ7 = await LpStaking.new({from: accounts[3]});
		const addressuVlnTIc = accounts[0]
		const addressIBlwltC = accounts[3]
		const byte8PgLQ0 = "0x18060c15161e0c11081b1f1e140f190b1f18050f011c061e01060a1e041b0f06"
		const byteQ7cHSqB = "0x19091d061f13120806070c0e150c170f0e18040e031018101d1113050812081c"
		const uintYlmHKsn = BigInt("114")
		const uintbc9NHNb = BigInt("932")
		const uintJOXnnY5 = BigInt("685")
//		const uint256VhpYYFZ = await LpStakingq8QICQ7.getCurIncomeRate.call({from: accounts[1]});
//		const uint2560uN97B = await LpStakingq8QICQ7.incomeEarned.call(addressuVlnTIc, {from: accounts[0]});
//		const uint256K0e04Jt = await LpStakingq8QICQ7.getUserAccumulatedWithdrawIncome.call(addressIBlwltC, {from: accounts[1]});
//		await LpStakingq8QICQ7.getReward.call({from: accounts[3]});
//		const uint256VcGUCx0 = await LpStakingq8QICQ7.rewardPerToken.call({from: accounts[4]});
//		const uint256fxKwRRQ = await LpStakingq8QICQ7.stakeWithPermit.call(uintJOXnnY5, uintbc9NHNb, uintYlmHKsn, byteQ7cHSqB, byte8PgLQ0, {from: accounts[3]});

		await expect(LpStakingq8QICQ7.getCurIncomeRate.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStaking36cIQe = await LpStaking.new({from: accounts[1]});
		const uintDvqoNPL = BigInt("1043")
		const addressURr692R = accounts[4]
		const addressePMwwQk = accounts[3]
		const uint256QdZtkVS = await LpStaking36cIQe.weiToSatoshi.call(uintDvqoNPL, {from: accounts[1]});
		const uint256sA4hTqW = await LpStaking36cIQe.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256Q9raned = await LpStaking36cIQe.incomeEarned.call(addressURr692R, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256HeoOXoz = await LpStaking36cIQe.incomePerToken.call({from: accounts[0]});
//		const uint256JGKFeTd = await LpStaking36cIQe.getCurIncomeRate.call({from: accounts[1]});
//		await LpStaking36cIQe.nonEmergencyStop.call({from: accounts[0]});
//		const addressMEJRl43 = await LpStaking36cIQe.transferOwnership.call(addressePMwwQk, {from: accounts[1]});

		assert.equal(uint256QdZtkVS, BigInt("0"))
		assert.equal(uint256sA4hTqW, BigInt("0"))
		await expect(LpStaking36cIQe.incomeEarned.call(addressURr692R, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingq8QICQ7 = await LpStaking.new({from: accounts[3]});
		const addressKyi9J7O = accounts[1]
		const addressT1tCo8V = accounts[3]
		const uintb4qkJsy = BigInt("1090")
		const addressdqk0kZ9 = accounts[0]
		const byteihZfLN = "0x18060c15161e0c11081b1f1e140f190b1f18050f011c061e01060a1e041b0f06"
		const byteXuSmKd7 = "0x19091d061f13120806070c0e150c170f0e18040e031018101d1113050812081c"
		const uintD1jx73H = BigInt("114")
		const uintp7KihNi = BigInt("932")
		const uintvaNfiM = BigInt("685")
//		await LpStakingq8QICQ7.lpRewardRateChanged.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256VhpYYFZ = await LpStakingq8QICQ7.getCurIncomeRate.call({from: accounts[1]});
//		const uint2560uN97B = await LpStakingq8QICQ7.incomeEarned.call(addressKyi9J7O, {from: accounts[0]});
//		await LpStakingq8QICQ7.lpRewardRateChanged.call({from: accounts[0]});
//		const uint256K0e04Jt = await LpStakingq8QICQ7.getUserAccumulatedWithdrawIncome.call(addressT1tCo8V, {from: accounts[1]});
//		const addressCPxcxUa = await LpStakingq8QICQ7.inCaseTokensGetStuck.call(addressdqk0kZ9, uintb4qkJsy, {from: accounts[0]});
//		await LpStakingq8QICQ7.getReward.call({from: accounts[3]});
//		const uint256VcGUCx0 = await LpStakingq8QICQ7.rewardPerToken.call({from: accounts[4]});
//		await LpStakingq8QICQ7.lpIncomeRateChanged.call({from: accounts[3]});
//		const uint256fxKwRRQ = await LpStakingq8QICQ7.stakeWithPermit.call(uintvaNfiM, uintp7KihNi, uintD1jx73H, byteXuSmKd7, byteihZfLN, {from: accounts[3]});

		await expect(LpStakingq8QICQ7.lpRewardRateChanged.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStaking36cIQe = await LpStaking.new({from: accounts[1]});
		const address8YlVjV = accounts[5]
		const addressegYn2bN = accounts[4]
		const addressoUi9bdK = accounts[3]
		const uint256RD5arhT = await LpStaking36cIQe.rewardEarned.call(address8YlVjV, {from: accounts[2]});
		const uint256sA4hTqW = await LpStaking36cIQe.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
//		await LpStaking36cIQe.nonEmergencyStop.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256Q9raned = await LpStaking36cIQe.incomeEarned.call(addressegYn2bN, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256HeoOXoz = await LpStaking36cIQe.incomePerToken.call({from: accounts[0]});
//		const uint256JGKFeTd = await LpStaking36cIQe.getCurIncomeRate.call({from: accounts[1]});
//		const addressMEJRl43 = await LpStaking36cIQe.transferOwnership.call(addressoUi9bdK, {from: accounts[1]});

		assert.equal(uint256RD5arhT, BigInt("0"))
		assert.equal(uint256sA4hTqW, BigInt("0"))
		await expect(LpStaking36cIQe.nonEmergencyStop.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStaking36cIQe = await LpStaking.new({from: accounts[1]});
		const addressxwNgjTS = accounts[4]
		const addressloV0X8e = accounts[3]
		const uint256sA4hTqW = await LpStaking36cIQe.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256r27MKrr = await LpStaking36cIQe.getUserAccumulatedWithdrawIncome.call(addressxwNgjTS, {from: accounts[3]});
//		const uint256HeoOXoz = await LpStaking36cIQe.incomePerToken.call({from: accounts[0]});
//		const addressMEJRl43 = await LpStaking36cIQe.transferOwnership.call(addressloV0X8e, {from: accounts[1]});

		assert.equal(uint256r27MKrr, BigInt("0"))
		assert.equal(uint256sA4hTqW, BigInt("0"))
		await expect(LpStaking36cIQe.incomePerToken.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingK0EdXZ = await LpStaking.new({from: accounts[2]});
		const addresswJEL2v3 = accounts[5]
		const addressmSqFzwH = accounts[2]
		const addressKe4BY8y = accounts[1]
		const addresscx2AjuD = accounts[4]
		const addresse6S8rG2 = await LpStakingK0EdXZ.initialize.call(addresscx2AjuD, addressKe4BY8y, addressmSqFzwH, addresswJEL2v3, {from: accounts[2]});
//		await LpStakingK0EdXZ.getReward.call({from: accounts[0]});
//		const uint256TNiLD44 = await LpStakingK0EdXZ.rewardPerToken.call({from: accounts[3]});
//		const uint256x3P60S9 = await LpStakingK0EdXZ.incomePerToken.call({from: accounts[0]});

		await expect(LpStakingK0EdXZ.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStaking36cIQe = await LpStaking.new({from: accounts[1]});
		const addressL8DMOOm = accounts[5]
		const addresssNXwe5H = accounts[4]
		const addressuQrpgtK = accounts[2]
		const addressSgBt9gl = "0x00000000000000000000000000000000000000-1"
		const addressTojDCif = accounts[1]
		const addressNKHkzbn = accounts[2]
		const addressrl3cOzu = accounts[0]
		const addressU0eJ66H = accounts[1]
		const addressdWfshKZ = accounts[1]
		const uint256RD5arhT = await LpStaking36cIQe.rewardEarned.call(addressL8DMOOm, {from: accounts[2]});
		const uint256ACeyBS = await LpStaking36cIQe.rewardPerToken.call({from: accounts[2]});
		const uint256vTW42sL = await LpStaking36cIQe.rewardEarned.call(addresssNXwe5H, {from: accounts[0]});
		const uint256mGDgKmg = await LpStaking36cIQe.rewardEarned.call(addressuQrpgtK, {from: accounts[5]});
//		const uint256UQlJQUB = await LpStaking36cIQe.rewardEarned.call(addressSgBt9gl, {from: accounts[2]});
//		const uint256JGKFeTd = await LpStaking36cIQe.getCurIncomeRate.call({from: accounts[1]});
//		const addressei25Bn8 = await LpStaking36cIQe.updateReward.call(addressTojDCif, {from: accounts[0]});
//		const addressp5MLhGL = await LpStaking36cIQe.initialize.call(addressdWfshKZ, addressU0eJ66H, addressrl3cOzu, addressNKHkzbn, {from: accounts[4]});

		assert.equal(uint256ACeyBS, BigInt("0"))
		assert.equal(uint256RD5arhT, BigInt("0"))
		assert.equal(uint256mGDgKmg, BigInt("0"))
		assert.equal(uint256vTW42sL, BigInt("0"))
		await expect(LpStaking36cIQe.rewardEarned.call(addressSgBt9gl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})