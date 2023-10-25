const CourtFarming_HTStake = artifacts.require("CourtFarming_HTStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_HTStake', (accounts) => {
	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeC7zqg8O = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressYVP2ZfW = accounts[4]
		const boolIg1cotY = false
		const uintFB2LuUb = BigInt("920")
		const uintthK9uEf = BigInt("613")
		const addressBdyqpki = await CourtFarming_HTStakeC7zqg8O.setCourtStake.call(addressYVP2ZfW, {from: accounts[3]});
		const uint256E8JH6XS = await CourtFarming_HTStakeC7zqg8O.unstake.call(uintFB2LuUb, boolIg1cotY, {from: accounts[1]});
		const uint256OVMuCx3 = await CourtFarming_HTStakeC7zqg8O.incvRewardClaim.call({from: accounts[1]});
		const boolRwcHMLz = await CourtFarming_HTStakeC7zqg8O.stakeIncvRewards.call(uintthK9uEf, {from: accounts[3]});

		await expect(CourtFarming_HTStakeC7zqg8O.setCourtStake.call(addressYVP2ZfW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeeJSsm6g = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintkM4Q9KK = BigInt("480")
		const uintLxXoCG = BigInt("2012")
		const uintSYp8y6D = BigInt("1120")
		const addressXK5hyaJ = accounts[2]
		const addressYtpJA8p = "0x0000000000000000000000000000000000000001"
		const addressnoxsDaQ = "0x0000000000000000000000000000000000000001"
		await CourtFarming_HTStakeeJSsm6g.changeStakeParameters.call(uintSYp8y6D, uintLxXoCG, uintkM4Q9KK, {from: accounts[1]});
		const uint256e37mkUL = await CourtFarming_HTStakeeJSsm6g.balanceOf.call(addressXK5hyaJ, {from: accounts[1]});
		const uint256bnhDGyZ = await CourtFarming_HTStakeeJSsm6g.balanceOf.call(addressYtpJA8p, {from: accounts[5]});
		const addressavoYaqa = await CourtFarming_HTStakeeJSsm6g.setCourtStake.call(addressnoxsDaQ, {from: accounts[3]});

		await expect(CourtFarming_HTStakeeJSsm6g.changeStakeParameters.call(uintSYp8y6D, uintLxXoCG, uintkM4Q9KK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeVkkeha5 = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintrJQtl9U = BigInt("966")
		const uintKWevE2E = BigInt("367")
		const addressR5IDfvV = accounts[0]
		const uintoWn1mTg = BigInt("626")
		const uintS6AMiav = BigInt("120")
		const uintkdmK3IU = BigInt("1992")
		const uint256ag4WOpI = await CourtFarming_HTStakeVkkeha5.totalStaked.call({from: accounts[2]});
		const uint256mHYuIlc = await CourtFarming_HTStakeVkkeha5.stake.call(uintrJQtl9U, {from: accounts[2]});
		const boolJtXTbq = await CourtFarming_HTStakeVkkeha5.stakeIncvRewards.call(uintKWevE2E, {from: accounts[0]});
		const addresszLscn9o = await CourtFarming_HTStakeVkkeha5.updateReward.call(addressR5IDfvV, {from: accounts[5]});
		await CourtFarming_HTStakeVkkeha5.changeStakeParameters.call(uintkdmK3IU, uintS6AMiav, uintoWn1mTg, {from: accounts[0]});

		assert.equal(uint256ag4WOpI, BigInt("0"))
		await expect(CourtFarming_HTStakeVkkeha5.stake.call(uintrJQtl9U, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakethHRjci = await CourtFarming_HTStake.new({from: accounts[5]});
		const uintBjyIX6Q = BigInt("787")
		const uintBsLE53R = BigInt("582")
		const uintcYR1grf = BigInt("676")
		const addressp0HpPKT = accounts[4]
		const uintLBJ4EK0 = BigInt("1526")
		const uint256ZO4aPHq = await CourtFarming_HTStakethHRjci.totalStaked.call({from: accounts[1]});
		const uint256NRI5UO = await CourtFarming_HTStakethHRjci.expectedRewardsToday.call(uintBjyIX6Q, {from: accounts[3]});
		const uint256MTvxoI = await CourtFarming_HTStakethHRjci.expectedRewardsToday.call(uintBsLE53R, {from: accounts[1]});
		const uint256jhdrIdS = await CourtFarming_HTStakethHRjci.stake.call(uintcYR1grf, {from: accounts[3]});
		const uint2563vsTaO = await CourtFarming_HTStakethHRjci.balanceOf.call(addressp0HpPKT, {from: accounts[0]});
		const uint256D5HsWYB = await CourtFarming_HTStakethHRjci.expectedRewardsToday.call(uintLBJ4EK0, {from: accounts[3]});

		assert.equal(uint256ZO4aPHq, BigInt("0"))
		await expect(CourtFarming_HTStakethHRjci.stake.call(uintcYR1grf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakefmW9hTW = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressK2eVwGD = "0x0000000000000000000000000000000000000001"
		const uintr4UQlO = BigInt("902")
		const uint256CiS0iG = await CourtFarming_HTStakefmW9hTW.rewards.call(addressK2eVwGD, {from: accounts[3]});
		const uint256im1OLJg = await CourtFarming_HTStakefmW9hTW.incvRewardInfo.call({from: accounts[2]});
		const uint256XYeERS3 = await CourtFarming_HTStakefmW9hTW.getCurrentTime.call({from: accounts[5]});
		const uint2568XCCCg = await CourtFarming_HTStakefmW9hTW.stake.call(uintr4UQlO, {from: accounts[5]});

		assert.equal(uint256XYeERS3, BigInt("1630201488"))
		await expect(CourtFarming_HTStakefmW9hTW.stake.call(uintr4UQlO, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakedONEqEE = await CourtFarming_HTStake.new({from: accounts[0]});
		const addressUAs0y8f = accounts[1]
		const addressFbwFGaH = accounts[2]
		const uint256z6xiolo = await CourtFarming_HTStakedONEqEE.balanceOf.call(addressUAs0y8f, {from: accounts[0]});
		const addressmUv28hK = await CourtFarming_HTStakedONEqEE.setCourtStake.call(addressFbwFGaH, {from: accounts[0]});
		const uint256Puax8lE = await CourtFarming_HTStakedONEqEE.getCurrentTime.call({from: accounts[0]});

		assert.equal(uint256z6xiolo, BigInt("0"))
		await expect(CourtFarming_HTStakedONEqEE.setCourtStake.call(addressFbwFGaH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeS19Ngw = await CourtFarming_HTStake.new({from: accounts[0]});
		const addressJFlfzo5 = accounts[4]
		const addresszv5RZLK = accounts[0]
		const addressE2RKQyJ = await CourtFarming_HTStakeS19Ngw.getBeneficiaryInfo.call(addressJFlfzo5, {from: "0x0000000000000000000000000000000000000001"});
		const addressy3IvOVf = await CourtFarming_HTStakeS19Ngw.updateReward.call(addresszv5RZLK, {from: accounts[0]});
		const uint256AA5WiW = await CourtFarming_HTStakeS19Ngw.totalStaked.call({from: accounts[1]});

		assert.equal(uint256AA5WiW, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeXb5YNOG = await CourtFarming_HTStake.new({from: accounts[3]});
		const addresshh4Vp2d = accounts[1]
		const uintI3mMZe = BigInt("75")
		const uint256mzcLOZ0 = await CourtFarming_HTStakeXb5YNOG.balanceOf.call(addresshh4Vp2d, {from: accounts[3]});
		const uint256WNJjSct = await CourtFarming_HTStakeXb5YNOG.lastUpdateBlock.call({from: accounts[4]});
		const uint256dWgBzco = await CourtFarming_HTStakeXb5YNOG.totalStaked.call({from: accounts[1]});
		const uint256uVcrnYY = await CourtFarming_HTStakeXb5YNOG.blockNumber.call({from: accounts[5]});
		const boolF7ZfA0M = await CourtFarming_HTStakeXb5YNOG.stakeIncvRewards.call(uintI3mMZe, {from: accounts[5]});

		assert.equal(boolF7ZfA0M, false)
		assert.equal(uint256WNJjSct, BigInt("1683"))
		assert.equal(uint256dWgBzco, BigInt("0"))
		assert.equal(uint256mzcLOZ0, BigInt("0"))
		assert.equal(uint256uVcrnYY, BigInt("1683"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeKprRSdI = await CourtFarming_HTStake.new({from: accounts[0]});
		const addressjgq9ZDq = accounts[4]
		const addressWuA4jMQ = accounts[3]
		const boolczxmHhm = true
		const uintBpVB0tv = BigInt("200")
		const uintei0nAPg = BigInt("341")
		const uintlJaWDA7 = BigInt("426")
		const uintBU0Une8 = BigInt("1968")
		const uint256MaFiOp1 = await CourtFarming_HTStakeKprRSdI.rewards.call(addressjgq9ZDq, {from: accounts[2]});
		const uint256cnW8xC6 = await CourtFarming_HTStakeKprRSdI.balanceOf.call(addressWuA4jMQ, {from: accounts[0]});
		const uint256WdltFMM = await CourtFarming_HTStakeKprRSdI.incvRewardInfo.call({from: accounts[1]});
		const uint256ASmhbu = await CourtFarming_HTStakeKprRSdI.totalStaked.call({from: accounts[5]});
		const uint256xUiW3cf = await CourtFarming_HTStakeKprRSdI.unstake.call(uintBpVB0tv, boolczxmHhm, {from: accounts[0]});
		await CourtFarming_HTStakeKprRSdI.changeStakeParameters.call(uintBU0Une8, uintlJaWDA7, uintei0nAPg, {from: accounts[2]});

		assert.equal(uint256ASmhbu, BigInt("0"))
		assert.equal(uint256cnW8xC6, BigInt("0"))
		await expect(CourtFarming_HTStakeKprRSdI.unstake.call(uintBpVB0tv, boolczxmHhm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeS19Ngw = await CourtFarming_HTStake.new({from: accounts[0]});
		const addressBlwrDhw = accounts[4]
		const addressqHw6IoV = accounts[0]
		const uintVhzvAl5 = BigInt("23")
		const uint256LAVZ7RH = await CourtFarming_HTStakeS19Ngw.incvRewardClaim.call({from: accounts[4]});
		const addressE2RKQyJ = await CourtFarming_HTStakeS19Ngw.getBeneficiaryInfo.call(addressBlwrDhw, {from: "0x0000000000000000000000000000000000000001"});
		const addressy3IvOVf = await CourtFarming_HTStakeS19Ngw.updateReward.call(addressqHw6IoV, {from: accounts[0]});
		const uint256AA5WiW = await CourtFarming_HTStakeS19Ngw.totalStaked.call({from: accounts[1]});
		const boolZkiPIZw = await CourtFarming_HTStakeS19Ngw.stakeIncvRewards.call(uintVhzvAl5, {from: accounts[1]});

		assert.equal(boolZkiPIZw, false)
		assert.equal(uint256AA5WiW, BigInt("0"))
		assert.equal(uint256LAVZ7RH, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeXb5YNOG = await CourtFarming_HTStake.new({from: accounts[3]});
		const addressnNhdKrz = accounts[1]
		const uintE7KAtSi = BigInt("0")
		const uinthLcaJtM = BigInt("75")
		const uint256mzcLOZ0 = await CourtFarming_HTStakeXb5YNOG.balanceOf.call(addressnNhdKrz, {from: accounts[3]});
		const uint256dWgBzco = await CourtFarming_HTStakeXb5YNOG.totalStaked.call({from: accounts[1]});
		const boolYlb34kU = await CourtFarming_HTStakeXb5YNOG.stakeIncvRewards.call(uintE7KAtSi, {from: accounts[4]});
		const uint256uVcrnYY = await CourtFarming_HTStakeXb5YNOG.blockNumber.call({from: accounts[5]});
		const boolF7ZfA0M = await CourtFarming_HTStakeXb5YNOG.stakeIncvRewards.call(uinthLcaJtM, {from: accounts[5]});

		assert.equal(boolF7ZfA0M, false)
		assert.equal(boolYlb34kU, false)
		assert.equal(uint256dWgBzco, BigInt("0"))
		assert.equal(uint256mzcLOZ0, BigInt("0"))
		assert.equal(uint256uVcrnYY, BigInt("1683"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeY4LPlvS = await CourtFarming_HTStake.new({from: accounts[2]});
		const uintk7LhTsg = BigInt("1831")
		const uintnANSTrZ = BigInt("1562")
		const uintAqFGbz8 = BigInt("603")
		const uintKHHWPYh = BigInt("1738")
		const uintrV0wn8 = BigInt("1533")
		const uintIKLcQMb = BigInt("1231")
		const uintlYVZ1Rp = BigInt("294")
		const uint256N2RRwXv = await CourtFarming_HTStakeY4LPlvS._stakeParametrsCalculation.call(uintAqFGbz8, uintnANSTrZ, uintk7LhTsg, {from: accounts[0]});
		const uint256ChXuMmn = await CourtFarming_HTStakeY4LPlvS.stake.call(uintKHHWPYh, {from: accounts[4]});
		const uint256vqFXC2j = await CourtFarming_HTStakeY4LPlvS.totalStaked.call({from: accounts[1]});
		await CourtFarming_HTStakeY4LPlvS.changeStakeParameters.call(uintlYVZ1Rp, uintIKLcQMb, uintrV0wn8, {from: accounts[1]});

		await expect(CourtFarming_HTStakeY4LPlvS._stakeParametrsCalculation.call(uintAqFGbz8, uintnANSTrZ, uintk7LhTsg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeA1iqcft = await CourtFarming_HTStake.new({from: "0x0000000000000000000000000000000000000001"});
		const address89oaqe = accounts[3]
		const uintm2D61BN = BigInt("70")
		const uintHUVKVpc = BigInt("1441")
		const uintOBGatQw = BigInt("1125")
		const uint256XGuLZAk = await CourtFarming_HTStakeA1iqcft.rewards.call(address89oaqe, {from: accounts[3]});
		await CourtFarming_HTStakeA1iqcft.changeStakeParameters.call(uintOBGatQw, uintHUVKVpc, uintm2D61BN, {from: accounts[4]});
		const uint256hHpwZ0h = await CourtFarming_HTStakeA1iqcft.incvRewardClaim.call({from: accounts[2]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakefmW9hTW = await CourtFarming_HTStake.new({from: accounts[1]});
		const boolydTXFME = true
		const uintgAO3AHy = BigInt("0")
		const uintRiBmns0 = BigInt("907")
		const uint256diu7UD = await CourtFarming_HTStakefmW9hTW.unstake.call(uintgAO3AHy, boolydTXFME, {from: accounts[1]});
		const uint2568XCCCg = await CourtFarming_HTStakefmW9hTW.stake.call(uintRiBmns0, {from: accounts[5]});

		await expect(CourtFarming_HTStakefmW9hTW.stake.call(uintRiBmns0, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakefmW9hTW = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintg6aboFG = BigInt("0")
		const addresslfwYYIA = "0x0000000000000000000000000000000000000001"
		const uint256d7q6ww = await CourtFarming_HTStakefmW9hTW.stake.call(uintg6aboFG, {from: accounts[2]});
		const addressnvq37lt = await CourtFarming_HTStakefmW9hTW.updateReward.call(addresslfwYYIA, {from: accounts[4]});
		const uint256cDNdswd = await CourtFarming_HTStakefmW9hTW.incvRewardClaim.call({from: accounts[5]});

		assert.equal(uint256cDNdswd, BigInt("0"))
	});
})