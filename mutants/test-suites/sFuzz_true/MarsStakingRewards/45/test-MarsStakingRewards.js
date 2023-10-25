const MarsStakingRewards = artifacts.require("MarsStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MarsStakingRewards', (accounts) => {
	it('test for MarsStakingRewards', async () => {
		const addressdtduSaG = "0x0000000000000000000000000000000000000001"
		const addressXKiutwI = accounts[2]
		const addressu0zBzN0 = accounts[4]
		const MarsStakingRewardsvMfgH5d = await MarsStakingRewards.new(addressdtduSaG, addressXKiutwI, addressu0zBzN0, {from: accounts[3]});
		const addressmv1usdW = accounts[2]
		const addressqxyzCq7 = accounts[1]
		const addressJFeGgIn = accounts[3]
		const uint256TJ0rM5u = await MarsStakingRewardsvMfgH5d.earned.call(addressmv1usdW, {from: accounts[2]});
//		const addressN1fYdYh = await MarsStakingRewardsvMfgH5d.transferOwnership.call(addressqxyzCq7, {from: accounts[2]});
//		const addressemuBjDd = await MarsStakingRewardsvMfgH5d.owner.call({from: accounts[3]});
//		const uint256Xjqw9d0 = await MarsStakingRewardsvMfgH5d.getRewardForDuration.call({from: accounts[2]});
//		const addressvXuORje = await MarsStakingRewardsvMfgH5d.setRewardsDistribution.call(addressJFeGgIn, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256TJ0rM5u, BigInt("0"))
		await expect(MarsStakingRewardsvMfgH5d.transferOwnership.call(addressqxyzCq7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressLtXWX1V = accounts[3]
		const addressC49DsF = accounts[3]
		const addresszfLXDhw = accounts[2]
		const MarsStakingRewardsiL4NtRk = await MarsStakingRewards.new(addressLtXWX1V, addressC49DsF, addresszfLXDhw, {from: accounts[0]});
		const addressNyTl6n6 = accounts[1]
		const addressUZczeLS = accounts[5]
		const uint256lmuGWY = await MarsStakingRewardsiL4NtRk.balanceOf.call(addressNyTl6n6, {from: accounts[5]});
//		await MarsStakingRewardsiL4NtRk.exit.call({from: accounts[3]});
//		const addressgKOina9 = await MarsStakingRewardsiL4NtRk.updateReward.call(addressUZczeLS, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256lmuGWY, BigInt("0"))
		await expect(MarsStakingRewardsiL4NtRk.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressmKZHDqW = accounts[1]
		const addressALbjw3j = "0x0000000000000000000000000000000000000001"
		const addressvGyg06F = accounts[2]
		const MarsStakingRewardski9E7qt = await MarsStakingRewards.new(addressmKZHDqW, addressALbjw3j, addressvGyg06F, {from: accounts[2]});
		const addressaQFHHNO = accounts[2]
		const addressfYi4exe = accounts[5]
		const uintEIv6pDL = BigInt("6")
//		const addressT4O4Ffe = await MarsStakingRewardski9E7qt.updateReward.call(addressaQFHHNO, {from: accounts[5]});
//		const uint256fDS1Stg = await MarsStakingRewardski9E7qt.lastTimeRewardApplicable.call({from: accounts[3]});
//		const addressBQns7w6 = await MarsStakingRewardski9E7qt.updateReward.call(addressfYi4exe, {from: accounts[1]});
//		const uint256URe0yfG = await MarsStakingRewardski9E7qt.stake.call(uintEIv6pDL, {from: accounts[2]});

		await expect(MarsStakingRewardski9E7qt.updateReward.call(addressaQFHHNO, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresskaMjzC = accounts[5]
		const addressE4jVFy = accounts[4]
		const addressKHaQBSd = accounts[1]
		const MarsStakingRewardsGrr3wQo = await MarsStakingRewards.new(addresskaMjzC, addressE4jVFy, addressKHaQBSd, {from: accounts[3]});
		const addresspIwbJ8s = accounts[5]
		const addresswbKv2in = accounts[5]
		const addresseLV3lOt = accounts[3]
		const byteOue3Udh = "0x0a0e1e021807041713061f191517121210010e011014091b0b101e19131f0c1f"
		const bytenr2IdV3 = "0x1308121c06150017031c1e15170f18050504081111040303060c0f030c060f10"
		const uintiO034cb = BigInt("162")
		const uintIfySkEk = BigInt("449")
		const uintfBH8UWR = BigInt("1919")
		const uint2564sxF2N = await MarsStakingRewardsGrr3wQo.balanceOf.call(addresspIwbJ8s, {from: accounts[1]});
		const uint256ou7agW0 = await MarsStakingRewardsGrr3wQo.earned.call(addresswbKv2in, {from: accounts[2]});
		const uint256hQjGr8 = await MarsStakingRewardsGrr3wQo.totalSupply.call({from: accounts[3]});
		const uint256je3pJWv = await MarsStakingRewardsGrr3wQo.balanceOf.call(addresseLV3lOt, {from: accounts[3]});
//		const uint256t5gyd7K = await MarsStakingRewardsGrr3wQo.stakeWithPermit.call(uintfBH8UWR, uintIfySkEk, uintiO034cb, bytenr2IdV3, byteOue3Udh, {from: accounts[0]});

		assert.equal(uint2564sxF2N, BigInt("0"))
		assert.equal(uint256hQjGr8, BigInt("0"))
		assert.equal(uint256je3pJWv, BigInt("0"))
		assert.equal(uint256ou7agW0, BigInt("0"))
		await expect(MarsStakingRewardsGrr3wQo.stakeWithPermit.call(uintfBH8UWR, uintIfySkEk, uintiO034cb, bytenr2IdV3, byteOue3Udh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressam1xmbz = accounts[5]
		const addressgYgdaOf = accounts[4]
		const addressIuR2ICn = accounts[1]
		const MarsStakingRewardsGrr3wQo = await MarsStakingRewards.new(addressam1xmbz, addressgYgdaOf, addressIuR2ICn, {from: accounts[3]});
		const addressH0d8D1D = accounts[5]
		const addressGLhggEQ = accounts[4]
		const byteOR5atO = "0x0a0e1e021807041713061f191517121210010e011014091b0b101e19131f0c1f"
		const byteEDwXMdo = "0x1308121c06150017031c1e15170f18050504081111040303060c0f030c060f10"
		const uintVas0jCs = BigInt("162")
		const uintjkybT5i = BigInt("458")
		const uintNljLgFs = BigInt("1919")
		const uint2564sxF2N = await MarsStakingRewardsGrr3wQo.balanceOf.call(addressH0d8D1D, {from: accounts[1]});
		const uint256ou7agW0 = await MarsStakingRewardsGrr3wQo.earned.call(addressGLhggEQ, {from: accounts[2]});
		const uint256U26MtW4 = await MarsStakingRewardsGrr3wQo.getRewardForDuration.call({from: accounts[0]});
//		const uint256t5gyd7K = await MarsStakingRewardsGrr3wQo.stakeWithPermit.call(uintNljLgFs, uintjkybT5i, uintVas0jCs, byteEDwXMdo, byteOR5atO, {from: accounts[0]});

		assert.equal(uint2564sxF2N, BigInt("0"))
		assert.equal(uint256U26MtW4, BigInt("0"))
		assert.equal(uint256ou7agW0, BigInt("0"))
		await expect(MarsStakingRewardsGrr3wQo.stakeWithPermit.call(uintNljLgFs, uintjkybT5i, uintVas0jCs, byteEDwXMdo, byteOR5atO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressXHiLiOS = accounts[3]
		const addressUJOUDTA = accounts[0]
		const addressuFJhnEV = accounts[3]
		const MarsStakingRewards8RfwpD = await MarsStakingRewards.new(addressXHiLiOS, addressUJOUDTA, addressuFJhnEV, {from: accounts[2]});
		const addressCoXINIo = accounts[3]
		const uintHWVnfKL = BigInt("187")
		const addressOhQYUCI = await MarsStakingRewards8RfwpD.transferOwnership.call(addressCoXINIo, {from: accounts[2]});
//		await MarsStakingRewards8RfwpD.getReward.call({from: accounts[1]});
//		const uint256WXGiunG = await MarsStakingRewards8RfwpD.stake.call(uintHWVnfKL, {from: accounts[1]});

		await expect(MarsStakingRewards8RfwpD.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressxcYUjCU = accounts[3]
		const addressttHx9y = accounts[0]
		const addressxHecHrs = accounts[3]
		const MarsStakingRewards8RfwpD = await MarsStakingRewards.new(addressxcYUjCU, addressttHx9y, addressxHecHrs, {from: accounts[2]});
		const uint256DGcwnrn = await MarsStakingRewards8RfwpD.totalSupply.call({from: accounts[1]});
		const uint256LRrVVrj = await MarsStakingRewards8RfwpD.lastTimeRewardApplicable.call({from: accounts[2]});
//		await MarsStakingRewards8RfwpD.getReward.call({from: accounts[1]});

		assert.equal(uint256DGcwnrn, BigInt("0"))
		assert.equal(uint256LRrVVrj, BigInt("0"))
		await expect(MarsStakingRewards8RfwpD.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressmdzz6e7 = accounts[4]
		const addressalxMwY = accounts[2]
		const addressaRbM0nZ = accounts[3]
		const MarsStakingRewardsS6B0ZPN = await MarsStakingRewards.new(addressmdzz6e7, addressalxMwY, addressaRbM0nZ, {from: "0x0000000000000000000000000000000000000001"});
		const uintZoe2EnF = BigInt("520")
		const addressTMtkeU1 = accounts[2]
		const addressoP1eqCf = accounts[3]
		const addressvOgUpOo = await MarsStakingRewardsS6B0ZPN.inCaseTokensGetStuck.call(addressTMtkeU1, uintZoe2EnF, {from: accounts[5]});
		const uint256I91cAEc = await MarsStakingRewardsS6B0ZPN.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256kPYql16 = await MarsStakingRewardsS6B0ZPN.earned.call(addressoP1eqCf, {from: accounts[2]});
	});

	it('test for MarsStakingRewards', async () => {
		const addressqjSfUfO = accounts[5]
		const address8aDsce = accounts[4]
		const addressRtKgVh1 = accounts[1]
		const MarsStakingRewardsGrr3wQo = await MarsStakingRewards.new(addressqjSfUfO, address8aDsce, addressRtKgVh1, {from: accounts[3]});
		const addressRV8JADe = accounts[6]
		const uintkvnHDI0 = BigInt("769")
		const addressKIOfqEL = accounts[4]
		const addressQHklXrr = accounts[0]
		const uint256ou7agW0 = await MarsStakingRewardsGrr3wQo.earned.call(addressRV8JADe, {from: accounts[2]});
//		const addressRSV7bzw = await MarsStakingRewardsGrr3wQo.inCaseTokensGetStuck.call(addressKIOfqEL, uintkvnHDI0, {from: accounts[3]});
//		const booljMQJVGC = await MarsStakingRewardsGrr3wQo.isOwner.call({from: accounts[4]});
//		const uint256BzBOmu = await MarsStakingRewardsGrr3wQo.earned.call(addressQHklXrr, {from: accounts[2]});

		assert.equal(uint256ou7agW0, BigInt("0"))
		await expect(MarsStakingRewardsGrr3wQo.inCaseTokensGetStuck.call(addressKIOfqEL, uintkvnHDI0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressJkGNLd3 = "0x0000000000000000000000000000000000000001"
		const addressgrk5XWS = accounts[1]
		const addressKWad8J1 = accounts[4]
		const MarsStakingRewardsIhtsS9D = await MarsStakingRewards.new(addressJkGNLd3, addressgrk5XWS, addressKWad8J1, {from: accounts[4]});
		const uintGzt7AZx = BigInt("1400")
		const uintfCLtZ0n = BigInt("1312")
		const addressW3J7RHH = accounts[0]
		const addressHXR5s1F = accounts[1]
		const uintRmFMccN = BigInt("1871")
		const uintpDZTDrm = BigInt("1907")
//		const uint256QgpPM2X = await MarsStakingRewardsIhtsS9D.notifyRewardAmount.call(uintfCLtZ0n, uintGzt7AZx, {from: accounts[3]});
//		const uint256FlMyeg7 = await MarsStakingRewardsIhtsS9D.totalSupply.call({from: accounts[5]});
//		const uint256aaVrJA7 = await MarsStakingRewardsIhtsS9D.totalSupply.call({from: accounts[1]});
//		const uint256IMux4iH = await MarsStakingRewardsIhtsS9D.balanceOf.call(addressW3J7RHH, {from: "0x0000000000000000000000000000000000000001"});
//		const addressS69N7w9 = await MarsStakingRewardsIhtsS9D.transferOwnership.call(addressHXR5s1F, {from: accounts[1]});
//		const uint256SpO297R = await MarsStakingRewardsIhtsS9D.notifyRewardAmount.call(uintpDZTDrm, uintRmFMccN, {from: accounts[0]});

		await expect(MarsStakingRewardsIhtsS9D.notifyRewardAmount.call(uintfCLtZ0n, uintGzt7AZx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const address8NCqiQ = accounts[5]
		const addressVUxA1L2 = accounts[4]
		const addressTqOcNfs = accounts[1]
		const MarsStakingRewardsGrr3wQo = await MarsStakingRewards.new(address8NCqiQ, addressVUxA1L2, addressTqOcNfs, {from: accounts[3]});
		const addresslitNa2 = accounts[0]
		const addressBtB5BGD = accounts[6]
		const uint256JnSiK7s = await MarsStakingRewardsGrr3wQo.earned.call(addresslitNa2, {from: accounts[3]});
//		await MarsStakingRewardsGrr3wQo.renounceOwnership.call({from: accounts[3]});
//		const uint256ou7agW0 = await MarsStakingRewardsGrr3wQo.earned.call(addressBtB5BGD, {from: accounts[2]});

		assert.equal(uint256JnSiK7s, BigInt("0"))
		await expect(MarsStakingRewardsGrr3wQo.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresspwlNxvU = accounts[4]
		const addressRIAebAS = accounts[5]
		const addresssUo7BAp = accounts[2]
		const MarsStakingRewardsX5s9zY2 = await MarsStakingRewards.new(addresspwlNxvU, addressRIAebAS, addresssUo7BAp, {from: accounts[0]});
		const addressL4ai5VC = "0x0000000000000000000000000000000000000001"
		const uintwoZTq5s = BigInt("503")
		const addressZbMKjuj = accounts[3]
		const addressCRb7PE = await MarsStakingRewardsX5s9zY2.setRewardsDistribution.call(addressL4ai5VC, {from: accounts[0]});
//		const uint256mAiz0rA = await MarsStakingRewardsX5s9zY2.withdraw.call(uintwoZTq5s, {from: "0x0000000000000000000000000000000000000001"});
//		const addresshcTz0np = await MarsStakingRewardsX5s9zY2.updateReward.call(addressZbMKjuj, {from: accounts[4]});
//		const uint256PiRXm9c = await MarsStakingRewardsX5s9zY2.totalSupply.call({from: accounts[0]});
//		const uint256u8QUoD2 = await MarsStakingRewardsX5s9zY2.rewardPerToken.call({from: accounts[1]});

		await expect(MarsStakingRewardsX5s9zY2.withdraw.call(uintwoZTq5s, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressfMbxaO = accounts[5]
		const addressPfbSSeI = accounts[4]
		const addressbA9TMGS = accounts[1]
		const MarsStakingRewardsGrr3wQo = await MarsStakingRewards.new(addressfMbxaO, addressPfbSSeI, addressbA9TMGS, {from: accounts[3]});
		const uintZuZMoSC = BigInt("783")
		const uintnmMegny = BigInt("2020")
		const uintlN49Ij = BigInt("1360")
		const uintXZN98U2 = BigInt("534")
		const addresst9jZ4ze = accounts[6]
//		const uint256khUqBhR = await MarsStakingRewardsGrr3wQo.notifyRewardAmount.call(uintnmMegny, uintZuZMoSC, {from: accounts[5]});
//		const uint256vqacScg = await MarsStakingRewardsGrr3wQo.notifyRewardAmount.call(uintXZN98U2, uintlN49Ij, {from: accounts[2]});
//		const uint256ou7agW0 = await MarsStakingRewardsGrr3wQo.earned.call(addresst9jZ4ze, {from: accounts[2]});

		await expect(MarsStakingRewardsGrr3wQo.notifyRewardAmount.call(uintnmMegny, uintZuZMoSC, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressY5pPHbL = accounts[3]
		const addressvM0VUQb = accounts[1]
		const addressCOT2YKC = accounts[1]
		const MarsStakingRewardsEl4k87l = await MarsStakingRewards.new(addressY5pPHbL, addressvM0VUQb, addressCOT2YKC, {from: accounts[3]});
		const uintgsg7FV2 = BigInt("1147")
		const addressNc3xkDf = accounts[1]
		const uintDd0nfT = BigInt("474")
		const addresstZXV3Mw = accounts[1]
//		const addresstXq8bm7 = await MarsStakingRewardsEl4k87l.inCaseTokensGetStuck.call(addressNc3xkDf, uintgsg7FV2, {from: accounts[3]});
//		const uint256iEpEGYo = await MarsStakingRewardsEl4k87l.lastTimeRewardApplicable.call({from: accounts[4]});
//		const uint256bo2FOHd = await MarsStakingRewardsEl4k87l.withdraw.call(uintDd0nfT, {from: accounts[3]});
//		const addressbkYYCBb = await MarsStakingRewardsEl4k87l.setRewardsDistribution.call(addresstZXV3Mw, {from: accounts[4]});
//		const uint256Ilp1lLU = await MarsStakingRewardsEl4k87l.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256z9aqKxd = await MarsStakingRewardsEl4k87l.rewardPerToken.call({from: accounts[2]});

		await expect(MarsStakingRewardsEl4k87l.inCaseTokensGetStuck.call(addressNc3xkDf, uintgsg7FV2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})