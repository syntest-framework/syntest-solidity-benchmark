const LpStaking = artifacts.require("LpStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LpStaking', (accounts) => {
	it('test for LpStaking', async () => {
		const LpStakinglZ2xPOi = await LpStaking.new({from: accounts[3]});
		const uintxCCXh3M = BigInt("853")
		const uintveNuGo = BigInt("1715")
		const uintnGSnv73 = BigInt("1202")
		const addressoAc3Tj1 = accounts[3]
//		await LpStakinglZ2xPOi.exit.call({from: accounts[4]});
//		const uint256etdjABj = await LpStakinglZ2xPOi.weiToSatoshi.call(uintxCCXh3M, {from: accounts[3]});
//		await LpStakinglZ2xPOi.nonEmergencyStop.call({from: accounts[2]});
//		const uint256KVohCgg = await LpStakinglZ2xPOi.getCurIncomeRate.call({from: accounts[0]});
//		const uint256Cz04CXV = await LpStakinglZ2xPOi.stake.call(uintveNuGo, {from: accounts[0]});
//		const addressLSNHF6B = await LpStakinglZ2xPOi.inCaseTokensGetStuck.call(addressoAc3Tj1, uintnGSnv73, {from: accounts[3]});

		await expect(LpStakinglZ2xPOi.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStaking4ee8Iw = await LpStaking.new({from: accounts[5]});
		const addressXd3i8ZP = accounts[2]
		const boolUBxmuF7 = false
		const uint256bfV5tgG = await LpStaking4ee8Iw.rewardEarned.call(addressXd3i8ZP, {from: accounts[0]});
//		const uint256MYTa7A5 = await LpStaking4ee8Iw.lastTimeRewardApplicable.call({from: accounts[0]});
//		const boolBgSMKbD = await LpStaking4ee8Iw.setEmergencyStop.call(boolUBxmuF7, {from: "0x0000000000000000000000000000000000000001"});
//		await LpStaking4ee8Iw.exit.call({from: accounts[1]});

		assert.equal(uint256bfV5tgG, BigInt("0"))
		await expect(LpStaking4ee8Iw.lastTimeRewardApplicable.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingM8fW0GW = await LpStaking.new({from: accounts[1]});
		const addressPblDoCc = accounts[4]
		const addressaPq12Pe = accounts[2]
		const uintVeeIjlN = BigInt("1419")
		const addressww3D6zG = "0x0000000000000000000000000000000000000001"
		const uint256zekBCGL = await LpStakingM8fW0GW.rewardPerToken.call({from: accounts[2]});
//		const addresswYcedrM = await LpStakingM8fW0GW.transferOwnership.call(addressPblDoCc, {from: accounts[2]});
//		const uint256beJ95l9 = await LpStakingM8fW0GW.rewardEarned.call(addressaPq12Pe, {from: accounts[1]});
//		const uint256NgGR1Yx = await LpStakingM8fW0GW.stake.call(uintVeeIjlN, {from: accounts[1]});
//		const uint256ajhEuQV = await LpStakingM8fW0GW.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256hsAAIi = await LpStakingM8fW0GW.incomeEarned.call(addressww3D6zG, {from: accounts[0]});

		assert.equal(uint256zekBCGL, BigInt("0"))
		await expect(LpStakingM8fW0GW.transferOwnership.call(addressPblDoCc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingAq0Res = await LpStaking.new({from: accounts[4]});
		const addressFcjCSf3 = accounts[0]
		const addressrb1ST4c = accounts[4]
		const addressp5tX9Kx = accounts[1]
		const uint256fRv74XZ = await LpStakingAq0Res.getUserAccumulatedWithdrawIncome.call(addressFcjCSf3, {from: accounts[3]});
//		const addressDz1Ot4y = await LpStakingAq0Res.updateReward.call(addressrb1ST4c, {from: accounts[4]});
//		const addressgZpotGf = await LpStakingAq0Res.updateReward.call(addressp5tX9Kx, {from: accounts[1]});
//		const uint256inTAOr4 = await LpStakingAq0Res.lastTimeRewardApplicable.call({from: accounts[0]});

		assert.equal(uint256fRv74XZ, BigInt("0"))
		await expect(LpStakingAq0Res.updateReward.call(addressrb1ST4c, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingwYWtol = await LpStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const byteEG4alE8 = "0x1d0a021a0d201e130216030c02031e0e001718160709180a05140919141f1019"
		const byteSYkkvzP = "0x1616041d1b061d0c01131a111303021c031d0e08041405020d011713021d1f09"
		const uintSet6Mm = BigInt("223")
		const uintcE382L3 = BigInt("618")
		const uintoCvD6n2 = BigInt("1732")
		const addressgUzakcc = accounts[3]
		const addressYTcfsl = accounts[2]
		const addresszxDCv02 = accounts[0]
		const uint256VzXn5a = await LpStakingwYWtol.stakeWithPermit.call(uintoCvD6n2, uintcE382L3, uintSet6Mm, byteSYkkvzP, byteEG4alE8, {from: accounts[0]});
		const uint256xTYlQwe = await LpStakingwYWtol.lastTimeRewardApplicable.call({from: accounts[0]});
		const addressOgOnkjP = await LpStakingwYWtol.updateReward.call(addressgUzakcc, {from: accounts[1]});
		const addressnxIaxMy = await LpStakingwYWtol.transferOwnership.call(addressYTcfsl, {from: accounts[3]});
		const uint256Mn7GXwq = await LpStakingwYWtol.getUserAccumulatedWithdrawIncome.call(addresszxDCv02, {from: accounts[0]});
	});

	it('test for LpStaking', async () => {
		const LpStakingJWh2u21 = await LpStaking.new({from: accounts[3]});
		const addressaGk6kDe = accounts[4]
		const uintB9TCri3 = BigInt("1291")
		const addresswJ0940W = accounts[5]
		const uinthQILigl = BigInt("516")
//		const uint2569aDv6X = await LpStakingJWh2u21.incomeEarned.call(addressaGk6kDe, {from: accounts[2]});
//		const uint256oiwy0Os = await LpStakingJWh2u21.lastTimeRewardApplicable.call({from: accounts[0]});
//		const uint256PKBHTRW = await LpStakingJWh2u21.weiToSatoshi.call(uintB9TCri3, {from: "0x0000000000000000000000000000000000000001"});
//		const addressvUE03Ff = await LpStakingJWh2u21.updateIncome.call(addresswJ0940W, {from: accounts[4]});
//		const uint256Tl1qZu2 = await LpStakingJWh2u21.stake.call(uinthQILigl, {from: accounts[1]});

		await expect(LpStakingJWh2u21.incomeEarned.call(addressaGk6kDe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStakingmHBk1v7 = await LpStaking.new({from: accounts[4]});
		const addressZKSd7Zr = accounts[4]
		const addressGgIxwY6 = accounts[0]
		const addresse7fVcMq = accounts[4]
		const addressRoqd7Fk = accounts[3]
		const addressb2lqUm = accounts[4]
		const addressPVfKBU = await LpStakingmHBk1v7.initialize.call(addressRoqd7Fk, addresse7fVcMq, addressGgIxwY6, addressZKSd7Zr, {from: accounts[1]});
//		const addressFNjr5pD = await LpStakingmHBk1v7.transferOwnership.call(addressb2lqUm, {from: accounts[3]});
//		await LpStakingmHBk1v7.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256A7mg6id = await LpStakingmHBk1v7.incomePerToken.call({from: accounts[0]});
//		await LpStakingmHBk1v7.lpRewardRateChanged.call({from: accounts[1]});
//		const uint256ig4zUQd = await LpStakingmHBk1v7.rewardPerToken.call({from: accounts[1]});

		await expect(LpStakingmHBk1v7.transferOwnership.call(addressb2lqUm, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LpStaking', async () => {
		const LpStaking4ee8Iw = await LpStaking.new({from: accounts[5]});
		const addressCjIEfdz = accounts[2]
		const boolUBxmuF7 = true
		const uint256bfV5tgG = await LpStaking4ee8Iw.rewardEarned.call(addressCjIEfdz, {from: accounts[0]});
//		const uint256Bc2y2YA = await LpStaking4ee8Iw.getCurIncomeRate.call({from: accounts[1]});
//		const uint256SrvFs5 = await LpStaking4ee8Iw.incomePerToken.call({from: accounts[1]});
//		const boolBgSMKbD = await LpStaking4ee8Iw.setEmergencyStop.call(boolUBxmuF7, {from: "0x0000000000000000000000000000000000000001"});
//		await LpStaking4ee8Iw.lpRewardRateChanged.call({from: accounts[2]});
//		await LpStaking4ee8Iw.exit.call({from: accounts[1]});

		assert.equal(uint256bfV5tgG, BigInt("0"))
		await expect(LpStaking4ee8Iw.getCurIncomeRate.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})