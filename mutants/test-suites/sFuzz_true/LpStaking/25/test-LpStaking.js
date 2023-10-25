const LpStaking = artifacts.require("LpStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LpStaking', (accounts) => {
	it('test for LpStaking', async () => {
		const LpStakingUaYrxia = await LpStaking.new({from: accounts[2]});
		const byteQJE2mxG = "0x030c12141a160a12191f1808021509160609181a0b1405150d0612150f061b1f"
		const bytehGbDT61 = "0x1c0f131312100a061f1109110408070d101b061a070f0f011a080a0d1804171c"
		const uintXrnCvYk = BigInt("251")
		const uintfu5Inkr = BigInt("163")
		const uintrVyTuos = BigInt("1182")
		const addressZwiR7zZ = accounts[5]
//		const uint256uvvLgnz = await LpStakingUaYrxia.incomePerToken.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256PQkxIaL = await LpStakingUaYrxia.stakeWithPermit.call(uintrVyTuos, uintfu5Inkr, uintXrnCvYk, bytehGbDT61, byteQJE2mxG, {from: accounts[0]});
//		const addressWg09DK0 = await LpStakingUaYrxia.updateIncome.call(addressZwiR7zZ, {from: accounts[1]});

		await expect(LpStakingUaYrxia.incomePerToken.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingSRKc56S = await LpStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressGP2kTZR = "0x0000000000000000000000000000000000000001"
		const uintNW9ROjJ = BigInt("1487")
		await LpStakingSRKc56S.exit.call({from: accounts[1]});
		const uint256HJ0DmbB = await LpStakingSRKc56S.getUserAccumulatedWithdrawIncome.call(addressGP2kTZR, {from: accounts[1]});
		await LpStakingSRKc56S.lpRewardRateChanged.call({from: accounts[1]});
		const uint256VvPSDzh = await LpStakingSRKc56S.weiToSatoshi.call(uintNW9ROjJ, {from: accounts[2]});
	});

	it('test for LpStaking', async () => {
		const LpStakingwbHXPJ3 = await LpStaking.new({from: accounts[3]});
		const addresstmmvZN = accounts[3]
		const addressynQpWx1 = accounts[4]
		const uint256GM25C7Y = await LpStakingwbHXPJ3.getUserAccumulatedWithdrawIncome.call(addresstmmvZN, {from: accounts[3]});
		const uint256drVPkZ = await LpStakingwbHXPJ3.getUserAccumulatedWithdrawIncome.call(addressynQpWx1, {from: accounts[4]});

		assert.equal(uint256GM25C7Y, BigInt("0"))
		assert.equal(uint256drVPkZ, BigInt("0"))
	});

	it('test for LpStaking', async () => {
		const LpStakingSIZ0f7 = await LpStaking.new({from: accounts[5]});
		const uinthhG4ESI = BigInt("8")
		const uintO2xBq92 = BigInt("988")
//		const uint256SMBmHf = await LpStakingSIZ0f7.stake.call(uinthhG4ESI, {from: accounts[0]});
//		const uint256LG82b5d = await LpStakingSIZ0f7.incomePerToken.call({from: accounts[4]});
//		const uint256FrOjfAx = await LpStakingSIZ0f7.weiToSatoshi.call(uintO2xBq92, {from: accounts[1]});

		await expect(LpStakingSIZ0f7.stake.call(uinthhG4ESI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingI48xEO = await LpStaking.new({from: accounts[5]});
		const addressIaWLx08 = accounts[4]
		const addresstTVJ1YF = accounts[1]
		const addresscIzKABb = accounts[2]
		const addressElt79bG = accounts[4]
		const bytevPsdBxL = "0x0e0d0d101618130c011f0d050b17110f01090d05030718090f0e1a04011a1a15"
		const bytezNTcWnb = "0x0d0e0509051b0e0119051b0b081e091920151e0b190f191a1a14121604061720"
		const uintjdm1bYw = BigInt("81")
		const uintVP1dzXw = BigInt("1442")
		const uintsHlzcDr = BigInt("114")
		const addresswM5eCM = await LpStakingI48xEO.initialize.call(addressElt79bG, addresscIzKABb, addresstTVJ1YF, addressIaWLx08, {from: accounts[0]});
//		await LpStakingI48xEO.nonEmergencyStop.call({from: accounts[5]});
//		await LpStakingI48xEO.getReward.call({from: accounts[0]});
//		const uint256yEE4kjA = await LpStakingI48xEO.stakeWithPermit.call(uintsHlzcDr, uintVP1dzXw, uintjdm1bYw, bytezNTcWnb, bytevPsdBxL, {from: "0x0000000000000000000000000000000000000001"});
//		await LpStakingI48xEO.getReward.call({from: accounts[2]});

		await expect(LpStakingI48xEO.nonEmergencyStop.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingwKxcauP = await LpStaking.new({from: accounts[0]});
		const addressz6NEn5v = accounts[3]
		const addresszH81YsP = "0x0000000000000000000000000000000000000001"
//		const uint256GsN6LKU = await LpStakingwKxcauP.incomeEarned.call(addressz6NEn5v, {from: accounts[1]});
//		const uint256SDbYCSF = await LpStakingwKxcauP.rewardEarned.call(addresszH81YsP, {from: accounts[1]});
//		await LpStakingwKxcauP.exit.call({from: accounts[1]});
//		const uint256T6JeBcy = await LpStakingwKxcauP.incomePerToken.call({from: accounts[4]});
//		await LpStakingwKxcauP.nonEmergencyStop.call({from: accounts[4]});
//		await LpStakingwKxcauP.lpIncomeRateChanged.call({from: accounts[2]});

		await expect(LpStakingwKxcauP.incomeEarned.call(addressz6NEn5v, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingiv7EiXH = await LpStaking.new({from: accounts[5]});
		const addressrDoTR0 = accounts[3]
		const uintgUgCKhx = BigInt("597")
		const addressx9brcP = accounts[3]
		const addressBMyqZ7g = accounts[1]
//		const uint256IRdA3Is = await LpStakingiv7EiXH.lastTimeRewardApplicable.call({from: accounts[0]});
//		await LpStakingiv7EiXH.nonEmergencyStop.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256qlpYprt = await LpStakingiv7EiXH.rewardEarned.call(addressrDoTR0, {from: accounts[0]});
//		const addressCho9Ki9 = await LpStakingiv7EiXH.inCaseTokensGetStuck.call(addressx9brcP, uintgUgCKhx, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256VZzYwuw = await LpStakingiv7EiXH.rewardEarned.call(addressBMyqZ7g, {from: accounts[1]});

		await expect(LpStakingiv7EiXH.lastTimeRewardApplicable.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingNV1xPaJ = await LpStaking.new({from: accounts[1]});
		const uintmU1uyV4 = BigInt("764")
		const uint256ZniBMNC = await LpStakingNV1xPaJ.rewardPerToken.call({from: accounts[3]});
//		const uint256kdKIFu2 = await LpStakingNV1xPaJ.withdraw.call(uintmU1uyV4, {from: accounts[3]});
//		await LpStakingNV1xPaJ.onlyOwner.call({from: accounts[1]});

		assert.equal(uint256ZniBMNC, BigInt("0"))
		await expect(LpStakingNV1xPaJ.withdraw.call(uintmU1uyV4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingf3WdHEA = await LpStaking.new({from: accounts[0]});
		const uintoPfNLc6 = BigInt("748")
		const addressF3epeB8 = accounts[3]
		const addresshCA0jeG = accounts[1]
		const uintb5xvtV = BigInt("624")
//		const addressNVvJZP5 = await LpStakingf3WdHEA.inCaseTokensGetStuck.call(addressF3epeB8, uintoPfNLc6, {from: accounts[2]});
//		const uint256VZpF6f8 = await LpStakingf3WdHEA.getUserAccumulatedWithdrawIncome.call(addresshCA0jeG, {from: accounts[2]});
//		const uint256BRPA4Tm = await LpStakingf3WdHEA.withdraw.call(uintb5xvtV, {from: accounts[4]});

		await expect(LpStakingf3WdHEA.inCaseTokensGetStuck.call(addressF3epeB8, uintoPfNLc6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingNV1xPaJ = await LpStaking.new({from: accounts[1]});
		const addressaXIk2yO = accounts[4]
		const byteQ8oy9O1 = "0x1d1f171c0f08160d0b040c021f0f041409120c160b0f0c0d110308070714071d"
		const byteIJBdvLH = "0x0e061f050b1b021c1a05061d141c11180f051d040a0304001f0617080c040d05"
		const uintA5AfdN = BigInt("218")
		const uintw3GPSyP = BigInt("60")
		const uintLpHpRfi = BigInt("439")
		const uintPXEtdkQ = BigInt("764")
		const uint256o61des = await LpStakingNV1xPaJ.rewardEarned.call(addressaXIk2yO, {from: accounts[2]});
//		const uint256pzroNqq = await LpStakingNV1xPaJ.getCurIncomeRate.call({from: accounts[2]});
//		const uint256ZniBMNC = await LpStakingNV1xPaJ.rewardPerToken.call({from: accounts[3]});
//		const uint256SEWcUdj = await LpStakingNV1xPaJ.stakeWithPermit.call(uintLpHpRfi, uintw3GPSyP, uintA5AfdN, byteIJBdvLH, byteQ8oy9O1, {from: accounts[3]});
//		const uint256kdKIFu2 = await LpStakingNV1xPaJ.withdraw.call(uintPXEtdkQ, {from: accounts[3]});
//		await LpStakingNV1xPaJ.onlyOwner.call({from: accounts[1]});

		assert.equal(uint256o61des, BigInt("0"))
		await expect(LpStakingNV1xPaJ.getCurIncomeRate.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingNV1xPaJ = await LpStaking.new({from: accounts[1]});
		const addressHTikvkn = accounts[4]
		const byteTZv8a8Y = "0x1d1f171c0f08160d0b040c021f0f041409120c160b0f0c0d110308070714071d"
		const byteyDCYog = "0x0e061f050b1b021c1a05061d141c11180f051d040a0304001f0617080c040d05"
		const uinthkpNin = BigInt("218")
		const uintS7lAVwV = BigInt("60")
		const uintcgiYBkB = BigInt("439")
		const uintnElrrkk = BigInt("764")
		const uint256o61des = await LpStakingNV1xPaJ.rewardEarned.call(addressHTikvkn, {from: accounts[2]});
//		await LpStakingNV1xPaJ.exit.call({from: accounts[0]});
//		const uint256pzroNqq = await LpStakingNV1xPaJ.getCurIncomeRate.call({from: accounts[2]});
//		const uint256SEWcUdj = await LpStakingNV1xPaJ.stakeWithPermit.call(uintcgiYBkB, uintS7lAVwV, uinthkpNin, byteyDCYog, byteTZv8a8Y, {from: accounts[3]});
//		const uint256kdKIFu2 = await LpStakingNV1xPaJ.withdraw.call(uintnElrrkk, {from: accounts[3]});
//		await LpStakingNV1xPaJ.onlyOwner.call({from: accounts[1]});

		assert.equal(uint256o61des, BigInt("0"))
		await expect(LpStakingNV1xPaJ.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})