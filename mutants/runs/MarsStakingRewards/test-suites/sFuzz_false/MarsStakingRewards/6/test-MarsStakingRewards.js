const MarsStakingRewards = artifacts.require("MarsStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MarsStakingRewards', (accounts) => {
	it('test for MarsStakingRewards', async () => {
		const addressa4Ha3y = accounts[3]
		const addressvuhrrc9 = accounts[4]
		const addresstbYgVW = accounts[0]
		const MarsStakingRewardsgm5zEwc = await MarsStakingRewards.new(addressa4Ha3y, addressvuhrrc9, addresstbYgVW, {from: accounts[2]});
		const addressVGDas0B = accounts[5]
		const addressJA0qNV5 = accounts[2]
		const boolYCIwTpk = await MarsStakingRewardsgm5zEwc.isOwner.call({from: accounts[3]});
		const boollfh78Qe = await MarsStakingRewardsgm5zEwc.isOwner.call({from: accounts[0]});
		const addressUSOUgZI = await MarsStakingRewardsgm5zEwc.setRewardsDistribution.call(addressVGDas0B, {from: accounts[2]});
		const uint256Nn4jvqt = await MarsStakingRewardsgm5zEwc.earned.call(addressJA0qNV5, {from: accounts[2]});
		const uint256kL8fIFV = await MarsStakingRewardsgm5zEwc.getRewardForDuration.call({from: accounts[2]});

		assert.equal(boolYCIwTpk, false)
		assert.equal(boollfh78Qe, false)
		assert.equal(uint256Nn4jvqt, BigInt("0"))
		assert.equal(uint256kL8fIFV, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressVv6BwDJ = accounts[0]
		const addressz7mFG1S = accounts[0]
		const addressB1bdZBX = accounts[4]
		const MarsStakingRewardsVWM3FC6 = await MarsStakingRewards.new(addressVv6BwDJ, addressz7mFG1S, addressB1bdZBX, {from: accounts[0]});
		const bytegeB4hZ = "0x001a01110e02040215190401131a0106131f0e051114030f0f14140409000d13"
		const byteWarabiG = "0x170807050a03051f0d1a1f11191b1e0b0f0a0a03090b01110c061a0a041f1511"
		const uintFgxa4yR = BigInt("7")
		const uintlc5gmq7 = BigInt("1943")
		const uintbRdcNW3 = BigInt("1795")
		const addressus5l0Q = accounts[2]
		const addressB11C6zl = accounts[1]
		const uint256vEChtvQ = await MarsStakingRewardsVWM3FC6.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256GUgcKiu = await MarsStakingRewardsVWM3FC6.stakeWithPermit.call(uintbRdcNW3, uintlc5gmq7, uintFgxa4yR, byteWarabiG, bytegeB4hZ, {from: accounts[0]});
		const uint256R0w09ws = await MarsStakingRewardsVWM3FC6.lastTimeRewardApplicable.call({from: accounts[5]});
		const boolTJDaZao = await MarsStakingRewardsVWM3FC6.isOwner.call({from: accounts[2]});
		const addressQEiiws = await MarsStakingRewardsVWM3FC6.transferOwnership.call(addressus5l0Q, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Kiy72zT = await MarsStakingRewardsVWM3FC6.earned.call(addressB11C6zl, {from: accounts[3]});

		assert.equal(uint256vEChtvQ, BigInt("0"))
		await expect(MarsStakingRewardsVWM3FC6.stakeWithPermit.call(uintbRdcNW3, uintlc5gmq7, uintFgxa4yR, byteWarabiG, bytegeB4hZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressVOo4CJt = accounts[4]
		const addressNmGiWI4 = accounts[1]
		const addressDo3Eclu = accounts[3]
		const MarsStakingRewardsXbHPzx0 = await MarsStakingRewards.new(addressVOo4CJt, addressNmGiWI4, addressDo3Eclu, {from: accounts[4]});
		const addressBm4J269 = accounts[4]
		const uintXLWU3WE = BigInt("814")
		const addressf7bBy9j = accounts[3]
		await MarsStakingRewardsXbHPzx0.onlyRewardsDistribution.call({from: accounts[0]});
		const addressywtn6TB = await MarsStakingRewardsXbHPzx0.updateReward.call(addressBm4J269, {from: accounts[4]});
		const uint256dngkwg = await MarsStakingRewardsXbHPzx0.withdraw.call(uintXLWU3WE, {from: accounts[5]});
		const uint256OYSHg8L = await MarsStakingRewardsXbHPzx0.balanceOf.call(addressf7bBy9j, {from: accounts[4]});
		await MarsStakingRewardsXbHPzx0.nonReentrant.call({from: accounts[4]});

		await expect(MarsStakingRewardsXbHPzx0.onlyRewardsDistribution.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressnWFzANL = accounts[1]
		const addressyRCJdau = accounts[0]
		const addressVH6uYZF = accounts[0]
		const MarsStakingRewardsJYafgS5 = await MarsStakingRewards.new(addressnWFzANL, addressyRCJdau, addressVH6uYZF, {from: accounts[5]});
		const addresslyzCth = accounts[4]
		const uint256W3udzvM = await MarsStakingRewardsJYafgS5.balanceOf.call(addresslyzCth, {from: accounts[2]});
		const uint256hWwMix = await MarsStakingRewardsJYafgS5.totalSupply.call({from: accounts[1]});

		assert.equal(uint256W3udzvM, BigInt("0"))
		assert.equal(uint256hWwMix, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressMubPoeO = accounts[0]
		const addressaMvWTp9 = accounts[5]
		const addressG2EhZr = accounts[3]
		const MarsStakingRewardsrz1clO = await MarsStakingRewards.new(addressMubPoeO, addressaMvWTp9, addressG2EhZr, {from: accounts[5]});
		const addressMHL1DHv = "0x0000000000000000000000000000000000000001"
		const byteh13f0Ga = "0x0c091f0d100c101220151e0f09151d021a100a1e09011c120714170c170b1b01"
		const byteUGzShWk = "0x03041f0e0f1517190807131f00160516010216081c140807071d141b03031a03"
		const uintWIJErr = BigInt("18")
		const uintUEkGip = BigInt("1879")
		const uintEsuE8K3 = BigInt("228")
		const addressl4m2ORR = accounts[4]
		const uintNQRdNDL = BigInt("1394")
		const addressaljcPbA = await MarsStakingRewardsrz1clO.setRewardsDistribution.call(addressMHL1DHv, {from: accounts[4]});
		const uint256ZoKr87Q = await MarsStakingRewardsrz1clO.stakeWithPermit.call(uintEsuE8K3, uintUEkGip, uintWIJErr, byteUGzShWk, byteh13f0Ga, {from: accounts[4]});
		const uint256ws9wkxx = await MarsStakingRewardsrz1clO.earned.call(addressl4m2ORR, {from: "0x0000000000000000000000000000000000000001"});
		const uint256bgAZHjQ = await MarsStakingRewardsrz1clO.withdraw.call(uintNQRdNDL, {from: accounts[3]});
		await MarsStakingRewardsrz1clO.exit.call({from: accounts[0]});

		await expect(MarsStakingRewardsrz1clO.setRewardsDistribution.call(addressMHL1DHv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresslHZilU = accounts[1]
		const addressMDjwGQ4 = accounts[1]
		const addresskuYLcWz = accounts[1]
		const MarsStakingRewardsol7r6mX = await MarsStakingRewards.new(addresslHZilU, addressMDjwGQ4, addresskuYLcWz, {from: accounts[2]});
		const addresschtr8J6 = accounts[4]
		const addressVXIfCmy = accounts[3]
		const addressbONuucf = accounts[0]
		const uintvmfebYf = BigInt("1815")
		await MarsStakingRewardsol7r6mX.exit.call({from: accounts[5]});
		const uint256qHpL8e2 = await MarsStakingRewardsol7r6mX.earned.call(addresschtr8J6, {from: "0x0000000000000000000000000000000000000001"});
		const uint256mF3d9nm = await MarsStakingRewardsol7r6mX.earned.call(addressVXIfCmy, {from: accounts[4]});
		const uint256DnoLRnw = await MarsStakingRewardsol7r6mX.balanceOf.call(addressbONuucf, {from: accounts[3]});
		const uint256ECF4rXh = await MarsStakingRewardsol7r6mX.withdraw.call(uintvmfebYf, {from: accounts[5]});

		await expect(MarsStakingRewardsol7r6mX.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressrdEOVCF = accounts[0]
		const addressgsG7jX = accounts[0]
		const addressKfTxfGn = accounts[3]
		const MarsStakingRewards6BqJg5 = await MarsStakingRewards.new(addressrdEOVCF, addressgsG7jX, addressKfTxfGn, {from: accounts[3]});
		const uintdNVYr5f = BigInt("968")
		const uint1Ih9v2 = BigInt("1093")
		const uint256KXCn98I = await MarsStakingRewards6BqJg5.totalSupply.call({from: accounts[0]});
		const uint256FZlV2bv = await MarsStakingRewards6BqJg5.getRewardForDuration.call({from: accounts[2]});
		const uint256JWwWvq7 = await MarsStakingRewards6BqJg5.rewardPerToken.call({from: accounts[4]});
		const uint256MXz1e5M = await MarsStakingRewards6BqJg5.notifyRewardAmount.call(uint1Ih9v2, uintdNVYr5f, {from: accounts[1]});
		await MarsStakingRewards6BqJg5.nonReentrant.call({from: accounts[1]});

		assert.equal(uint256FZlV2bv, BigInt("0"))
		assert.equal(uint256JWwWvq7, BigInt("0"))
		assert.equal(uint256KXCn98I, BigInt("0"))
		await expect(MarsStakingRewards6BqJg5.notifyRewardAmount.call(uint1Ih9v2, uintdNVYr5f, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressGu4QFqi = accounts[1]
		const addressTD2UQZo = accounts[0]
		const addressV1uoQiC = accounts[0]
		const MarsStakingRewardsJYafgS5 = await MarsStakingRewards.new(addressGu4QFqi, addressTD2UQZo, addressV1uoQiC, {from: accounts[5]});
		const addressltHdVoD = accounts[1]
		const addressjWgciOe = accounts[4]
		const addresskUoLPr3 = accounts[2]
		const bytevxGepTl = "0x031409061e01141a0317021b1e05041d17081109100d10020410110214120102"
		const byteBSUx9n = "0x0309180e170c13201a1b1a0f05031b0b0e0f1e0a1b0118100916061e1b1f0a15"
		const uintcPVvpqL = BigInt("18")
		const uint3YPP6R = BigInt("97")
		const uintyfyyumU = BigInt("1837")
		const uint256UMtozkm = await MarsStakingRewardsJYafgS5.earned.call(addressltHdVoD, {from: accounts[1]});
		const uint256GkT2aTV = await MarsStakingRewardsJYafgS5.rewardPerToken.call({from: accounts[4]});
		const uint256m24xlkS = await MarsStakingRewardsJYafgS5.balanceOf.call(addressjWgciOe, {from: accounts[4]});
		await MarsStakingRewardsJYafgS5.renounceOwnership.call({from: accounts[5]});
		const uint256W3udzvM = await MarsStakingRewardsJYafgS5.balanceOf.call(addresskUoLPr3, {from: accounts[2]});
		const uint256OLbtDk8 = await MarsStakingRewardsJYafgS5.stakeWithPermit.call(uintyfyyumU, uint3YPP6R, uintcPVvpqL, byteBSUx9n, bytevxGepTl, {from: accounts[2]});

		assert.equal(uint256GkT2aTV, BigInt("0"))
		assert.equal(uint256UMtozkm, BigInt("0"))
		assert.equal(uint256m24xlkS, BigInt("0"))
		await expect(MarsStakingRewardsJYafgS5.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressXwB6LDx = accounts[1]
		const addressdRQjgcC = accounts[0]
		const addressdPTYjwi = accounts[0]
		const MarsStakingRewardsJYafgS5 = await MarsStakingRewards.new(addressXwB6LDx, addressdRQjgcC, addressdPTYjwi, {from: accounts[5]});
		const addressHaNZo7 = accounts[5]
		const addressreGL1Zr = await MarsStakingRewardsJYafgS5.owner.call({from: accounts[0]});
		await MarsStakingRewardsJYafgS5.exit.call({from: accounts[5]});
		const uint256W3udzvM = await MarsStakingRewardsJYafgS5.balanceOf.call(addressHaNZo7, {from: accounts[2]});

		assert.equal(addressreGL1Zr, 0x780cd1d8B8FA94EaAB0809CfB9d4b8846a9acf59)
		await expect(MarsStakingRewardsJYafgS5.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresslGFIWIH = accounts[0]
		const addressVrwF0rI = accounts[0]
		const addressIi8DeDa = accounts[5]
		const MarsStakingRewardsllchsnt = await MarsStakingRewards.new(addresslGFIWIH, addressVrwF0rI, addressIi8DeDa, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ur97a6u = await MarsStakingRewardsllchsnt.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		await MarsStakingRewardsllchsnt.exit.call({from: accounts[2]});
	});

	it('test for MarsStakingRewards', async () => {
		const addresskYafAcF = accounts[0]
		const addresstMG8Dtu = accounts[0]
		const addressJvaJVNR = accounts[3]
		const MarsStakingRewards6BqJg5 = await MarsStakingRewards.new(addresskYafAcF, addresstMG8Dtu, addressJvaJVNR, {from: accounts[3]});
		const addressh9YldzZ = accounts[1]
		const addressHoeIQO = accounts[0]
		const uint2568Vxh4f = await MarsStakingRewards6BqJg5.balanceOf.call(addressh9YldzZ, {from: accounts[3]});
		const addressx6Pgq8Z = await MarsStakingRewards6BqJg5.transferOwnership.call(addressHoeIQO, {from: accounts[3]});
		const uint256kHav1oT = await MarsStakingRewards6BqJg5.totalSupply.call({from: accounts[4]});
		const uint256FZlV2bv = await MarsStakingRewards6BqJg5.getRewardForDuration.call({from: accounts[2]});

		assert.equal(uint2568Vxh4f, BigInt("0"))
		assert.equal(uint256FZlV2bv, BigInt("0"))
		assert.equal(uint256kHav1oT, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressdLWzv2V = accounts[0]
		const addressRV7JNBo = accounts[0]
		const addressZkIGjdg = accounts[3]
		const MarsStakingRewards6BqJg5 = await MarsStakingRewards.new(addressdLWzv2V, addressRV7JNBo, addressZkIGjdg, {from: accounts[3]});
		const uintKjMj2TS = BigInt("250")
		const uintQvCY7rw = BigInt("1093")
		const uint256YvqnaNG = await MarsStakingRewards6BqJg5.notifyRewardAmount.call(uintQvCY7rw, uintKjMj2TS, {from: accounts[0]});
		const uint256c1U0LwR = await MarsStakingRewards6BqJg5.rewardPerToken.call({from: accounts[3]});
		const uint256FZlV2bv = await MarsStakingRewards6BqJg5.getRewardForDuration.call({from: accounts[2]});

		await expect(MarsStakingRewards6BqJg5.notifyRewardAmount.call(uintQvCY7rw, uintKjMj2TS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressDMb2UeI = accounts[0]
		const address4eRnWn = accounts[0]
		const addressHLoDx4H = accounts[3]
		const MarsStakingRewards6BqJg5 = await MarsStakingRewards.new(addressDMb2UeI, address4eRnWn, addressHLoDx4H, {from: accounts[3]});
		const uintWpBPXcr = BigInt("87")
		const addressLl4SSkp = accounts[4]
		const uintmArfIz = BigInt("174")
		const addressNtlgp8 = "0x0000000000000000000000000000000000000001"
		const uint256aDUlhOl = await MarsStakingRewards6BqJg5.rewardPerToken.call({from: accounts[5]});
		const addressLSBllRg = await MarsStakingRewards6BqJg5.inCaseTokensGetStuck.call(addressLl4SSkp, uintWpBPXcr, {from: accounts[3]});
		const addressyypf8L = await MarsStakingRewards6BqJg5.inCaseTokensGetStuck.call(addressNtlgp8, uintmArfIz, {from: accounts[0]});
		const uint256FZlV2bv = await MarsStakingRewards6BqJg5.getRewardForDuration.call({from: accounts[2]});

		assert.equal(uint256aDUlhOl, BigInt("0"))
		await expect(MarsStakingRewards6BqJg5.inCaseTokensGetStuck.call(addressLl4SSkp, uintWpBPXcr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresspXOgnnm = accounts[0]
		const addressjMRlTqP = "0x0000000000000000000000000000000000000001"
		const addressNlBBTXJ = accounts[1]
		const MarsStakingRewardsMItadn = await MarsStakingRewards.new(addresspXOgnnm, addressjMRlTqP, addressNlBBTXJ, {from: accounts[2]});
		const addressCEvJyNt = accounts[0]
		const uintNXGOb7U = BigInt("329")
		const addressLAKmX7r = accounts[1]
		const uint256k6SjnWR = await MarsStakingRewardsMItadn.earned.call(addressCEvJyNt, {from: accounts[4]});
		const addressI4bR9cr = await MarsStakingRewardsMItadn.inCaseTokensGetStuck.call(addressLAKmX7r, uintNXGOb7U, {from: accounts[2]});
		const uint256CciNBCa = await MarsStakingRewardsMItadn.lastTimeRewardApplicable.call({from: accounts[4]});
		const boolp5sC67w = await MarsStakingRewardsMItadn.isOwner.call({from: accounts[1]});
		await MarsStakingRewardsMItadn.getReward.call({from: accounts[2]});

		assert.equal(uint256k6SjnWR, BigInt("0"))
		await expect(MarsStakingRewardsMItadn.inCaseTokensGetStuck.call(addressLAKmX7r, uintNXGOb7U, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})