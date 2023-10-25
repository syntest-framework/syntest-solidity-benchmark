const LpStaking = artifacts.require("LpStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LpStaking', (accounts) => {
	it('test for LpStaking', async () => {
		const LpStakingvdAGJLY = await LpStaking.new({from: accounts[1]});
		const uint256OpP1WSF = await LpStakingvdAGJLY.rewardPerToken.call({from: accounts[5]});
		await LpStakingvdAGJLY.lpRewardRateChanged.call({from: accounts[0]});
		await LpStakingvdAGJLY.nonEmergencyStop.call({from: accounts[3]});

		assert.equal(uint256OpP1WSF, BigInt("0"))
		await expect(LpStakingvdAGJLY.lpRewardRateChanged.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingZmPFXog = await LpStaking.new({from: accounts[4]});
		const uintYCK7sef = BigInt("1412")
		const bytetTUpJYD = "0x15031c150b200a1200040d16110f130d0c1120010714030c0412061604001708"
		const byteadWaOLN = "0x151c01151b18190814030c161f0b09120f021e1e141b160b1b130d1c18041b19"
		const uintJw3P3U3 = BigInt("40")
		const uintW69UWAO = BigInt("1743")
		const uintwJnR1BV = BigInt("646")
		const addressXpPQrcR = accounts[0]
		const uint256CrvLtet = await LpStakingZmPFXog.stake.call(uintYCK7sef, {from: accounts[0]});
		const uint256cJgNNMr = await LpStakingZmPFXog.stakeWithPermit.call(uintwJnR1BV, uintW69UWAO, uintJw3P3U3, byteadWaOLN, bytetTUpJYD, {from: accounts[0]});
		const addressivSJRKH = await LpStakingZmPFXog.transferOwnership.call(addressXpPQrcR, {from: accounts[0]});

		await expect(LpStakingZmPFXog.stake.call(uintYCK7sef, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingigfGoo = await LpStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressGHRQo5G = accounts[3]
		const boolvORe1kX = true
		const addressSg6SBGC = await LpStakingigfGoo.updateReward.call(addressGHRQo5G, {from: accounts[1]});
		await LpStakingigfGoo.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const boolIl8OBJR = await LpStakingigfGoo.setEmergencyStop.call(boolvORe1kX, {from: accounts[0]});
		const uint256O1AQvnQ = await LpStakingigfGoo.lastTimeRewardApplicable.call({from: accounts[1]});
	});

	it('test for LpStaking', async () => {
		const LpStakingiRsS5jg = await LpStaking.new({from: accounts[0]});
		const addressLhTT72r = accounts[1]
		const byteidS7wJe = "0x16110f01060f1e201d010510090a01041c0c121a1713151912121b161c0f1014"
		const byteK19RoEf = "0x2003101104060209161b110213120c030e100709091b100d19081e00001f1719"
		const uintLPm8RDo = BigInt("233")
		const uintFvG4XDw = BigInt("1747")
		const uintTbocvv = BigInt("318")
		await LpStakingiRsS5jg.exit.call({from: accounts[2]});
		await LpStakingiRsS5jg.nonEmergencyStop.call({from: accounts[0]});
		const uint256KBpDArK = await LpStakingiRsS5jg.getUserAccumulatedWithdrawIncome.call(addressLhTT72r, {from: accounts[1]});
		const uint256V49I5W6 = await LpStakingiRsS5jg.stakeWithPermit.call(uintTbocvv, uintFvG4XDw, uintLPm8RDo, byteK19RoEf, byteidS7wJe, {from: accounts[4]});

		await expect(LpStakingiRsS5jg.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingX3dQvtc = await LpStaking.new({from: accounts[0]});
		const uinthGpPj44 = BigInt("846")
		const addressCIDJDQk = accounts[3]
		const addressWjttVrC = accounts[4]
		const addresstkM3PXi = accounts[4]
		const addressUnXXd1k = accounts[2]
		const addressPHSjPmX = accounts[1]
		const addressnmrElkK = accounts[3]
		const uint256JKa933U = await LpStakingX3dQvtc.rewardPerToken.call({from: accounts[3]});
		const addressADUwYBr = await LpStakingX3dQvtc.inCaseTokensGetStuck.call(addressCIDJDQk, uinthGpPj44, {from: accounts[1]});
		const addressBeOHdkv = await LpStakingX3dQvtc.transferOwnership.call(addressWjttVrC, {from: accounts[1]});
		const addressii1t3ph = await LpStakingX3dQvtc.initialize.call(addressnmrElkK, addressPHSjPmX, addressUnXXd1k, addresstkM3PXi, {from: accounts[2]});

		assert.equal(uint256JKa933U, BigInt("0"))
		await expect(LpStakingX3dQvtc.inCaseTokensGetStuck.call(addressCIDJDQk, uinthGpPj44, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingvdAGJLY = await LpStaking.new({from: accounts[1]});
		const uint256OpP1WSF = await LpStakingvdAGJLY.rewardPerToken.call({from: accounts[5]});
		await LpStakingvdAGJLY.nonEmergencyStop.call({from: accounts[5]});
		await LpStakingvdAGJLY.nonEmergencyStop.call({from: accounts[3]});
		await LpStakingvdAGJLY.getReward.call({from: accounts[0]});

		assert.equal(uint256OpP1WSF, BigInt("0"))
		await expect(LpStakingvdAGJLY.nonEmergencyStop.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingvdAGJLY = await LpStaking.new({from: accounts[1]});
		const addressf4o3U8I = accounts[1]
		const uint256OpP1WSF = await LpStakingvdAGJLY.rewardPerToken.call({from: accounts[5]});
		const uint256iVQh4tD = await LpStakingvdAGJLY.getCurIncomeRate.call({from: accounts[1]});
		await LpStakingvdAGJLY.lpRewardRateChanged.call({from: accounts[0]});
		await LpStakingvdAGJLY.nonEmergencyStop.call({from: accounts[3]});
		const uint256yD5ZN9n = await LpStakingvdAGJLY.getUserAccumulatedWithdrawIncome.call(addressf4o3U8I, {from: accounts[2]});

		assert.equal(uint256OpP1WSF, BigInt("0"))
		await expect(LpStakingvdAGJLY.getCurIncomeRate.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingvdAGJLY = await LpStaking.new({from: accounts[1]});
		const addressLZeMRuH = accounts[5]
		const uint256OpP1WSF = await LpStakingvdAGJLY.rewardPerToken.call({from: accounts[5]});
		const uint256pauplGF = await LpStakingvdAGJLY.getUserAccumulatedWithdrawIncome.call(addressLZeMRuH, {from: "0x0000000000000000000000000000000000000001"});
		await LpStakingvdAGJLY.lpRewardRateChanged.call({from: accounts[0]});
		const uint256eao8G6O = await LpStakingvdAGJLY.getCurIncomeRate.call({from: accounts[5]});
		await LpStakingvdAGJLY.nonEmergencyStop.call({from: accounts[3]});

		assert.equal(uint256OpP1WSF, BigInt("0"))
		assert.equal(uint256pauplGF, BigInt("0"))
		await expect(LpStakingvdAGJLY.lpRewardRateChanged.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingFOgqWzK = await LpStaking.new({from: accounts[2]});
		const addressjVyZo1W = accounts[0]
		const addresshoSHMDV = accounts[4]
		const addressRZbi5KD = accounts[2]
		const addressThkwJMT = accounts[3]
		const addressmS1jBqS = accounts[4]
		const uintTgP0Fj9 = BigInt("585")
		const uint256BHUMBxt = await LpStakingFOgqWzK.rewardPerToken.call({from: accounts[1]});
		const uint256hWmab7o = await LpStakingFOgqWzK.getUserAccumulatedWithdrawIncome.call(addressjVyZo1W, {from: accounts[0]});
		const addressVHXG8aN = await LpStakingFOgqWzK.initialize.call(addressmS1jBqS, addressThkwJMT, addressRZbi5KD, addresshoSHMDV, {from: accounts[2]});
		const uint256aEF7QQd = await LpStakingFOgqWzK.getCurIncomeRate.call({from: accounts[2]});
		const uint256loVyFTH = await LpStakingFOgqWzK.stake.call(uintTgP0Fj9, {from: accounts[1]});

		assert.equal(uint256BHUMBxt, BigInt("0"))
		assert.equal(uint256hWmab7o, BigInt("0"))
		await expect(LpStakingFOgqWzK.getCurIncomeRate.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingvdAGJLY = await LpStaking.new({from: accounts[1]});
		const addressxfaeP7 = accounts[2]
		const uint256OpP1WSF = await LpStakingvdAGJLY.rewardPerToken.call({from: accounts[5]});
		const uint256ZRlfZaR = await LpStakingvdAGJLY.incomePerToken.call({from: accounts[2]});
		const uint256iVQh4tD = await LpStakingvdAGJLY.getCurIncomeRate.call({from: accounts[1]});
		await LpStakingvdAGJLY.lpRewardRateChanged.call({from: accounts[0]});
		const uint256yD5ZN9n = await LpStakingvdAGJLY.getUserAccumulatedWithdrawIncome.call(addressxfaeP7, {from: accounts[2]});

		assert.equal(uint256OpP1WSF, BigInt("0"))
		await expect(LpStakingvdAGJLY.incomePerToken.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingvdAGJLY = await LpStaking.new({from: accounts[1]});
		const addressSNjPIaR = accounts[2]
		const addressQFEkRg4 = accounts[3]
		const uint256u3NZQzF = await LpStakingvdAGJLY.rewardEarned.call(addressSNjPIaR, {from: accounts[0]});
		const uint256OpP1WSF = await LpStakingvdAGJLY.rewardPerToken.call({from: accounts[5]});
		const uint256ZRlfZaR = await LpStakingvdAGJLY.incomePerToken.call({from: accounts[2]});
		const uint256iVQh4tD = await LpStakingvdAGJLY.getCurIncomeRate.call({from: accounts[1]});
		await LpStakingvdAGJLY.lpRewardRateChanged.call({from: accounts[0]});
		const uint256yD5ZN9n = await LpStakingvdAGJLY.getUserAccumulatedWithdrawIncome.call(addressQFEkRg4, {from: accounts[2]});

		assert.equal(uint256OpP1WSF, BigInt("0"))
		assert.equal(uint256u3NZQzF, BigInt("0"))
		await expect(LpStakingvdAGJLY.incomePerToken.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingvdAGJLY = await LpStaking.new({from: accounts[1]});
		const addressSBXTnSX = accounts[2]
		const uint256VNvwOM = await LpStakingvdAGJLY.incomeEarned.call(addressSBXTnSX, {from: accounts[5]});
		const uint256iVQh4tD = await LpStakingvdAGJLY.getCurIncomeRate.call({from: accounts[1]});

		await expect(LpStakingvdAGJLY.incomeEarned.call(addressSBXTnSX, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})