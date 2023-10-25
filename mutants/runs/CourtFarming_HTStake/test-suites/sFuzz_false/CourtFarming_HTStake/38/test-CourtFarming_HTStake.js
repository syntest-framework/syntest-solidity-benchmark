const CourtFarming_HTStake = artifacts.require("CourtFarming_HTStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_HTStake', (accounts) => {
	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakepE5I2LW = await CourtFarming_HTStake.new({from: accounts[4]});
		const addressuvY5JF = accounts[1]
		const addressqZS8aro = accounts[2]
		const uintqN9SOp = BigInt("1897")
		const addressoXC5hwR = accounts[2]
		const uintd90DTrz = BigInt("820")
		const uint256AzkHsIn = await CourtFarming_HTStakepE5I2LW.rewards.call(addressuvY5JF, {from: accounts[1]});
		const uint256eUSQv2P = await CourtFarming_HTStakepE5I2LW.balanceOf.call(addressqZS8aro, {from: accounts[4]});
		const boolwCyvObn = await CourtFarming_HTStakepE5I2LW.stakeIncvRewards.call(uintqN9SOp, {from: accounts[3]});
		const addresspHPhvxv = await CourtFarming_HTStakepE5I2LW.setCourtStake.call(addressoXC5hwR, {from: accounts[1]});
		const booltneBoSi = await CourtFarming_HTStakepE5I2LW.stakeIncvRewards.call(uintd90DTrz, {from: accounts[1]});

		assert.equal(boolwCyvObn, false)
		assert.equal(uint256eUSQv2P, BigInt("0"))
		await expect(CourtFarming_HTStakepE5I2LW.setCourtStake.call(addressoXC5hwR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakenG3ibXT = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressFGhUgPz = accounts[0]
		const addressbDyFmTx = accounts[3]
		const uintLq1m2GC = BigInt("1271")
		const addresscEl3Ml3 = accounts[4]
		const uint256vxsrVpz = await CourtFarming_HTStakenG3ibXT.incvRewardClaim.call({from: accounts[1]});
		const uint256cvQ7hxm = await CourtFarming_HTStakenG3ibXT.incvRewardClaim.call({from: accounts[1]});
		const addressN7OcKc5 = await CourtFarming_HTStakenG3ibXT.getBeneficiaryInfo.call(addressFGhUgPz, {from: accounts[4]});
		const addressA9xTZrl = await CourtFarming_HTStakenG3ibXT.setCourtStake.call(addressbDyFmTx, {from: accounts[1]});
		const booldokMNv8 = await CourtFarming_HTStakenG3ibXT.stakeIncvRewards.call(uintLq1m2GC, {from: accounts[4]});
		const addresshNpL2JM = await CourtFarming_HTStakenG3ibXT.setCourtStake.call(addresscEl3Ml3, {from: accounts[1]});

		assert.equal(uint256cvQ7hxm, BigInt("0"))
		assert.equal(uint256vxsrVpz, BigInt("0"))
		await expect(CourtFarming_HTStakenG3ibXT.setCourtStake.call(addressbDyFmTx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeJWPFs6D = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintIUu1lZM = BigInt("1398")
		const uintbeGKyRp = BigInt("1649")
		const uintK8QL8L8 = BigInt("224")
		const addressK1R9s8 = accounts[1]
		const booltMtBdhZ = false
		const uintTZiU4so = BigInt("1026")
		const uint256vtuorUv = await CourtFarming_HTStakeJWPFs6D.incvRewardInfo.call({from: accounts[0]});
		await CourtFarming_HTStakeJWPFs6D.changeStakeParameters.call(uintK8QL8L8, uintbeGKyRp, uintIUu1lZM, {from: accounts[1]});
		const uint256vC6loSd = await CourtFarming_HTStakeJWPFs6D.blockNumber.call({from: accounts[4]});
		const addressxhitNvH = await CourtFarming_HTStakeJWPFs6D.setCourtStake.call(addressK1R9s8, {from: accounts[4]});
		const uint256gGUyyZR = await CourtFarming_HTStakeJWPFs6D.unstake.call(uintTZiU4so, booltMtBdhZ, {from: accounts[2]});

		await expect(CourtFarming_HTStakeJWPFs6D.changeStakeParameters.call(uintK8QL8L8, uintbeGKyRp, uintIUu1lZM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakebO8Wj1F = await CourtFarming_HTStake.new({from: accounts[2]});
		const uintgvwENVm = BigInt("737")
		const uintIE22RLk = BigInt("439")
		const uintnqeCfFd = BigInt("834")
		const uintl8mNZfO = BigInt("1306")
		const boolkUqMMhc = true
		const uintsfaYtft = BigInt("1837")
		const uint256vmisi6y = await CourtFarming_HTStakebO8Wj1F.incvRewardInfo.call({from: accounts[1]});
		const uint256oBu4pn = await CourtFarming_HTStakebO8Wj1F.expectedRewardsToday.call(uintgvwENVm, {from: accounts[0]});
		await CourtFarming_HTStakebO8Wj1F.changeStakeParameters.call(uintl8mNZfO, uintnqeCfFd, uintIE22RLk, {from: accounts[3]});
		const uint256oZchQzs = await CourtFarming_HTStakebO8Wj1F.totalStaked.call({from: accounts[3]});
		const uint256KLu477d = await CourtFarming_HTStakebO8Wj1F.unstake.call(uintsfaYtft, boolkUqMMhc, {from: accounts[4]});

		await expect(CourtFarming_HTStakebO8Wj1F.changeStakeParameters.call(uintl8mNZfO, uintnqeCfFd, uintIE22RLk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeoxoPZkq = await CourtFarming_HTStake.new({from: accounts[1]});
		const boolL222Yvo = false
		const uintkNlzwZK = BigInt("1309")
		const uintbGvfCxu = BigInt("1440")
		const uintj4yDKU = BigInt("1559")
		const uintskd0Hzd = BigInt("1637")
		const uint256fWJzNS = await CourtFarming_HTStakeoxoPZkq.incvRewardInfo.call({from: accounts[4]});
		const uint256wqbnMg8 = await CourtFarming_HTStakeoxoPZkq.lastUpdateBlock.call({from: accounts[2]});
		const uint256oniVwCf = await CourtFarming_HTStakeoxoPZkq.blockNumber.call({from: accounts[2]});
		const uint256xKBNxDq = await CourtFarming_HTStakeoxoPZkq.unstake.call(uintkNlzwZK, boolL222Yvo, {from: accounts[4]});
		await CourtFarming_HTStakeoxoPZkq.changeStakeParameters.call(uintskd0Hzd, uintj4yDKU, uintbGvfCxu, {from: accounts[2]});
		const uint256QAZhTao = await CourtFarming_HTStakeoxoPZkq.totalStaked.call({from: accounts[4]});

		assert.equal(uint256oniVwCf, BigInt("1749"))
		assert.equal(uint256wqbnMg8, BigInt("1749"))
		await expect(CourtFarming_HTStakeoxoPZkq.unstake.call(uintkNlzwZK, boolL222Yvo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeftpXnVR = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressWEgpxS = accounts[3]
		const addressm79T8li = accounts[0]
		const addressR0U29wJ = accounts[3]
		const uint256K1UlrRA = await CourtFarming_HTStakeftpXnVR.lastUpdateBlock.call({from: accounts[2]});
		const uint256qtSiHCB = await CourtFarming_HTStakeftpXnVR.balanceOf.call(addressWEgpxS, {from: accounts[4]});
		const uint256iy2ocHt = await CourtFarming_HTStakeftpXnVR.balanceOf.call(addressm79T8li, {from: accounts[4]});
		const uint256xVAsvuw = await CourtFarming_HTStakeftpXnVR.lastUpdateBlock.call({from: accounts[5]});
		const addressGNJKoxc = await CourtFarming_HTStakeftpXnVR.updateReward.call(addressR0U29wJ, {from: accounts[0]});
		const uint256YJoAAH = await CourtFarming_HTStakeftpXnVR.totalStaked.call({from: accounts[2]});

		assert.equal(uint256K1UlrRA, BigInt("1749"))
		assert.equal(uint256YJoAAH, BigInt("0"))
		assert.equal(uint256iy2ocHt, BigInt("0"))
		assert.equal(uint256qtSiHCB, BigInt("0"))
		assert.equal(uint256xVAsvuw, BigInt("1749"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakecTiHCP = await CourtFarming_HTStake.new({from: "0x0000000000000000000000000000000000000001"});
		const addressLeAjePk = accounts[1]
		const uint256UE2x6zd = await CourtFarming_HTStakecTiHCP.blockNumber.call({from: accounts[0]});
		const addressIbf912f = await CourtFarming_HTStakecTiHCP.setCourtStake.call(addressLeAjePk, {from: accounts[3]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakezFwITt = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintARohNPW = BigInt("1266")
		const uintC8ajwvx = BigInt("1481")
		const uintvfoTzq = BigInt("1218")
		const uintjrGEw8N = BigInt("800")
		const uint256t7uaVJM = await CourtFarming_HTStakezFwITt.blockNumber.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256kZawWL2 = await CourtFarming_HTStakezFwITt.stake.call(uintARohNPW, {from: accounts[3]});
		await CourtFarming_HTStakezFwITt.changeStakeParameters.call(uintjrGEw8N, uintvfoTzq, uintC8ajwvx, {from: accounts[5]});

		assert.equal(uint256t7uaVJM, BigInt("1749"))
		await expect(CourtFarming_HTStakezFwITt.stake.call(uintARohNPW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakepE5I2LW = await CourtFarming_HTStake.new({from: accounts[4]});
		const addressPL5ts5P = accounts[1]
		const addressrMaYklV = accounts[2]
		const uintlkgUCl5 = BigInt("129")
		const uintUH7ZztM = BigInt("1736")
		const uintvZYycip = BigInt("1589")
		const uintXAr6atC = BigInt("1894")
		const addressKCM9VJk = accounts[2]
		const uintEF8l3HX = BigInt("820")
		const uint256AzkHsIn = await CourtFarming_HTStakepE5I2LW.rewards.call(addressPL5ts5P, {from: accounts[1]});
		const uint256eUSQv2P = await CourtFarming_HTStakepE5I2LW.balanceOf.call(addressrMaYklV, {from: accounts[4]});
		const uint256FcCnit = await CourtFarming_HTStakepE5I2LW._stakeParametrsCalculation.call(uintvZYycip, uintUH7ZztM, uintlkgUCl5, {from: accounts[1]});
		const boolwCyvObn = await CourtFarming_HTStakepE5I2LW.stakeIncvRewards.call(uintXAr6atC, {from: accounts[3]});
		const uint256o4Kx9r1 = await CourtFarming_HTStakepE5I2LW.incvRewardClaim.call({from: accounts[2]});
		const addresspHPhvxv = await CourtFarming_HTStakepE5I2LW.setCourtStake.call(addressKCM9VJk, {from: accounts[1]});
		const booltneBoSi = await CourtFarming_HTStakepE5I2LW.stakeIncvRewards.call(uintEF8l3HX, {from: accounts[1]});

		assert.equal(uint256eUSQv2P, BigInt("0"))
		await expect(CourtFarming_HTStakepE5I2LW._stakeParametrsCalculation.call(uintvZYycip, uintUH7ZztM, uintlkgUCl5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeJWPFs6D = await CourtFarming_HTStake.new({from: accounts[0]});
		const addressllCjgjV = accounts[4]
		const uintUo2C3j = BigInt("1398")
		const uintiVOtjhg = BigInt("1649")
		const uintEpeRmhE = BigInt("224")
		const addressWzYjnY3 = accounts[1]
		const addressS31Fd8Z = accounts[1]
		const booltMtBdhZ = true
		const uintfvcz55N = BigInt("1026")
		const uint256vtuorUv = await CourtFarming_HTStakeJWPFs6D.incvRewardInfo.call({from: accounts[0]});
		const addresszWISoY = await CourtFarming_HTStakeJWPFs6D.setCourtStake.call(addressllCjgjV, {from: accounts[0]});
		await CourtFarming_HTStakeJWPFs6D.changeStakeParameters.call(uintEpeRmhE, uintiVOtjhg, uintUo2C3j, {from: accounts[1]});
		const uint256vC6loSd = await CourtFarming_HTStakeJWPFs6D.blockNumber.call({from: accounts[4]});
		const addressxhitNvH = await CourtFarming_HTStakeJWPFs6D.setCourtStake.call(addressWzYjnY3, {from: accounts[4]});
		const uint256ZdVJLP = await CourtFarming_HTStakeJWPFs6D.balanceOf.call(addressS31Fd8Z, {from: "0x0000000000000000000000000000000000000001"});
		const uint256gGUyyZR = await CourtFarming_HTStakeJWPFs6D.unstake.call(uintfvcz55N, booltMtBdhZ, {from: accounts[2]});

		await expect(CourtFarming_HTStakeJWPFs6D.setCourtStake.call(addressllCjgjV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakenG3ibXT = await CourtFarming_HTStake.new({from: accounts[2]});
		const uinttoefmVw = BigInt("0")
		const uintdV2G6r = BigInt("1271")
		const addresskeuJXGo = accounts[4]
		const boolUI8tCxy = await CourtFarming_HTStakenG3ibXT.stakeIncvRewards.call(uinttoefmVw, {from: accounts[5]});
		const booldokMNv8 = await CourtFarming_HTStakenG3ibXT.stakeIncvRewards.call(uintdV2G6r, {from: accounts[4]});
		const addresshNpL2JM = await CourtFarming_HTStakenG3ibXT.setCourtStake.call(addresskeuJXGo, {from: accounts[1]});

		assert.equal(boolUI8tCxy, false)
		assert.equal(booldokMNv8, false)
		await expect(CourtFarming_HTStakenG3ibXT.setCourtStake.call(addresskeuJXGo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeMCYz96 = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressAgKrVAP = accounts[0]
		const boolz1Vb5i = false
		const uintle2yR6d = BigInt("0")
		const uint256Pymea6d = await CourtFarming_HTStakeMCYz96.getCurrentTime.call({from: accounts[1]});
		const uint256OTZTHyR = await CourtFarming_HTStakeMCYz96.incvRewardClaim.call({from: accounts[2]});
		const addresspbJ8cTv = await CourtFarming_HTStakeMCYz96.getBeneficiaryInfo.call(addressAgKrVAP, {from: accounts[0]});
		const uint256qRPIB5I = await CourtFarming_HTStakeMCYz96.unstake.call(uintle2yR6d, boolz1Vb5i, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256OTZTHyR, BigInt("0"))
		assert.equal(uint256Pymea6d, BigInt("1630201381"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeMCYz96 = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintwyOiOP = BigInt("0")
		const uint256AXT4PSA = await CourtFarming_HTStakeMCYz96.incvRewardInfo.call({from: accounts[5]});
		const uint256nADfbcf = await CourtFarming_HTStakeMCYz96.stake.call(uintwyOiOP, {from: accounts[2]});
	});
})