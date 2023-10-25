const MarsStakingRewards = artifacts.require("MarsStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MarsStakingRewards', (accounts) => {
	it('test for MarsStakingRewards', async () => {
		const addressAZAIi1 = accounts[2]
		const addressFxiPZUv = accounts[2]
		const addressurbuSp5 = accounts[0]
		const MarsStakingRewardsV5C2jQ = await MarsStakingRewards.new(addressAZAIi1, addressFxiPZUv, addressurbuSp5, {from: accounts[1]});
		const addressJkljqbJ = accounts[2]
		const uint256VkKre0P = await MarsStakingRewardsV5C2jQ.earned.call(addressJkljqbJ, {from: accounts[4]});
		const boolbZZElbq = await MarsStakingRewardsV5C2jQ.isOwner.call({from: accounts[4]});

		assert.equal(boolbZZElbq, false)
		assert.equal(uint256VkKre0P, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressdWww6O8 = accounts[5]
		const addresscUB7Nx9 = accounts[3]
		const addressMtuVDqe = accounts[5]
		const MarsStakingRewardsGtbj4xZ = await MarsStakingRewards.new(addressdWww6O8, addresscUB7Nx9, addressMtuVDqe, {from: accounts[4]});
		const uintCmG9EmP = BigInt("1186")
		const uintPss3hhp = BigInt("1222")
//		await MarsStakingRewardsGtbj4xZ.onlyOwner.call({from: accounts[0]});
//		const bool1RMcwO = await MarsStakingRewardsGtbj4xZ.isOwner.call({from: accounts[4]});
//		const uint256OcV1Xrp = await MarsStakingRewardsGtbj4xZ.withdraw.call(uintCmG9EmP, {from: accounts[4]});
//		const uint256hO0qU2q = await MarsStakingRewardsGtbj4xZ.stake.call(uintPss3hhp, {from: accounts[2]});

		await expect(MarsStakingRewardsGtbj4xZ.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressIkp9MGY = accounts[1]
		const addressdP0jvJd = accounts[5]
		const addressfKaYvbw = accounts[0]
		const MarsStakingRewardsKl0gvlw = await MarsStakingRewards.new(addressIkp9MGY, addressdP0jvJd, addressfKaYvbw, {from: accounts[4]});
		const addressqdQDr0R = accounts[0]
		const addressoMekdIM = accounts[1]
		const uintzXg2ocR = BigInt("457")
		const uintNcZZwfz = BigInt("2024")
		const addressCYFkgS = await MarsStakingRewardsKl0gvlw.setRewardsDistribution.call(addressqdQDr0R, {from: accounts[4]});
//		const addressgVEORy7 = await MarsStakingRewardsKl0gvlw.setRewardsDistribution.call(addressoMekdIM, {from: accounts[3]});
//		const uint256XMyAVT4 = await MarsStakingRewardsKl0gvlw.notifyRewardAmount.call(uintNcZZwfz, uintzXg2ocR, {from: accounts[2]});

		await expect(MarsStakingRewardsKl0gvlw.setRewardsDistribution.call(addressoMekdIM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressbdYPGs = accounts[1]
		const addressiOWc4VR = accounts[1]
		const addresscGGA4F = accounts[0]
		const MarsStakingRewardsLG6xYhe = await MarsStakingRewards.new(addressbdYPGs, addressiOWc4VR, addresscGGA4F, {from: accounts[3]});
		const byteZvdcPhI = "0x16020a1e1f101b1d0f1b0d180d19090b1f041d0b0d061b160b011c13110f0515"
		const bytez2Efdug = "0x1a1c1b0d190f0a1c1a0714111a200d041e0d0705100d1f1d09110c17181a0612"
		const uinti7WEOZ = BigInt("131")
		const uintqiGxA3N = BigInt("1232")
		const uintM5BE9wZ = BigInt("1362")
		const uintNDOkJGx = BigInt("1630")
		const addressUDvo8S = accounts[0]
//		const uint256dhrcF8O = await MarsStakingRewardsLG6xYhe.stakeWithPermit.call(uintM5BE9wZ, uintqiGxA3N, uinti7WEOZ, bytez2Efdug, byteZvdcPhI, {from: accounts[4]});
//		const uint256f9UjBFR = await MarsStakingRewardsLG6xYhe.stake.call(uintNDOkJGx, {from: accounts[4]});
//		const addressNERqqnf = await MarsStakingRewardsLG6xYhe.setRewardsDistribution.call(addressUDvo8S, {from: accounts[0]});
//		await MarsStakingRewardsLG6xYhe.getReward.call({from: accounts[3]});

		await expect(MarsStakingRewardsLG6xYhe.stakeWithPermit.call(uintM5BE9wZ, uintqiGxA3N, uinti7WEOZ, bytez2Efdug, byteZvdcPhI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressrG5skBV = accounts[2]
		const addressfXqOBPf = accounts[5]
		const addressYFz0zV = accounts[3]
		const MarsStakingRewardsECWaRKj = await MarsStakingRewards.new(addressrG5skBV, addressfXqOBPf, addressYFz0zV, {from: accounts[1]});
		const addressDSh9i3s = accounts[2]
		const byte8QjbKX = "0x12071f09171110011e10010602181d031a1714081b0a060a03090a04041a0f04"
		const byteH0INUbA = "0x161513180201141e0d06110d1e171c1c0a19011e0e12101211012008011f0206"
		const uintOc95EEs = BigInt("228")
		const uintw6z8SVq = BigInt("1211")
		const uinti4AzLZ3 = BigInt("590")
//		await MarsStakingRewardsECWaRKj.exit.call({from: accounts[1]});
//		const uint256kHYJhW = await MarsStakingRewardsECWaRKj.balanceOf.call(addressDSh9i3s, {from: accounts[0]});
//		const uint256siIgacK = await MarsStakingRewardsECWaRKj.stakeWithPermit.call(uinti4AzLZ3, uintw6z8SVq, uintOc95EEs, byteH0INUbA, byte8QjbKX, {from: accounts[3]});

		await expect(MarsStakingRewardsECWaRKj.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressJ3A0M7K = "0x0000000000000000000000000000000000000001"
		const addressGAFpJ6R = accounts[0]
		const addressDKhFioK = accounts[3]
		const MarsStakingRewardsAZ6i8z4 = await MarsStakingRewards.new(addressJ3A0M7K, addressGAFpJ6R, addressDKhFioK, {from: accounts[0]});
		const addressAHH1oJy = accounts[0]
		const uintGIt2ujz = BigInt("1937")
		const addressZeavKaa = accounts[4]
		const uint2560YeyiS = await MarsStakingRewardsAZ6i8z4.lastTimeRewardApplicable.call({from: accounts[3]});
		const addressMhFWiRM = await MarsStakingRewardsAZ6i8z4.transferOwnership.call(addressAHH1oJy, {from: accounts[0]});
//		const uint2569BRdAP = await MarsStakingRewardsAZ6i8z4.withdraw.call(uintGIt2ujz, {from: accounts[0]});
//		await MarsStakingRewardsAZ6i8z4.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256GkFZxX0 = await MarsStakingRewardsAZ6i8z4.balanceOf.call(addressZeavKaa, {from: accounts[0]});

		assert.equal(uint2560YeyiS, BigInt("0"))
		await expect(MarsStakingRewardsAZ6i8z4.withdraw.call(uintGIt2ujz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressMhHLmpd = accounts[2]
		const addresshVBgoZg = accounts[2]
		const addressTcwfnrY = accounts[0]
		const MarsStakingRewardsV5C2jQ = await MarsStakingRewards.new(addressMhHLmpd, addresshVBgoZg, addressTcwfnrY, {from: accounts[1]});
		const addressy75oq3h = accounts[3]
		const uint256VkKre0P = await MarsStakingRewardsV5C2jQ.earned.call(addressy75oq3h, {from: accounts[4]});
		const addresswT5Ckfd = await MarsStakingRewardsV5C2jQ.owner.call({from: accounts[2]});
		const boolbZZElbq = await MarsStakingRewardsV5C2jQ.isOwner.call({from: accounts[4]});

		assert.equal(addresswT5Ckfd, 0xf18d056eCd33DE244EE149250F1c10Cf16C38c35)
		assert.equal(boolbZZElbq, false)
		assert.equal(uint256VkKre0P, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressP1m6MKo = accounts[2]
		const addressbKMevpP = accounts[1]
		const addressi17VbqD = accounts[3]
		const MarsStakingRewardsK95GUs0 = await MarsStakingRewards.new(addressP1m6MKo, addressbKMevpP, addressi17VbqD, {from: "0x0000000000000000000000000000000000000001"});
		const addressYOM3aZC = accounts[3]
		const addressCecm5z = accounts[2]
		const addressxs9jOk = accounts[2]
		const addressbFx9diF = accounts[0]
		const addressYIgK3Zg = await MarsStakingRewardsK95GUs0.updateReward.call(addressYOM3aZC, {from: accounts[2]});
		const addressoJc6YBL = await MarsStakingRewardsK95GUs0.transferOwnership.call(addressCecm5z, {from: accounts[2]});
		const uint256nouoode = await MarsStakingRewardsK95GUs0.earned.call(addressxs9jOk, {from: accounts[4]});
		const uint256RX8pFh2 = await MarsStakingRewardsK95GUs0.balanceOf.call(addressbFx9diF, {from: accounts[0]});
	});

	it('test for MarsStakingRewards', async () => {
		const addressx7hSei = accounts[2]
		const addressD5tsS7i = accounts[2]
		const addressr7yvRWT = accounts[0]
		const MarsStakingRewardsV5C2jQ = await MarsStakingRewards.new(addressx7hSei, addressD5tsS7i, addressr7yvRWT, {from: accounts[1]});
//		await MarsStakingRewardsV5C2jQ.renounceOwnership.call({from: accounts[1]});
//		const boolbZZElbq = await MarsStakingRewardsV5C2jQ.isOwner.call({from: accounts[4]});

		await expect(MarsStakingRewardsV5C2jQ.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresseTPBWrT = accounts[2]
		const addressdRKuXms = accounts[2]
		const addressFxeFhR = accounts[0]
		const MarsStakingRewardsV5C2jQ = await MarsStakingRewards.new(addresseTPBWrT, addressdRKuXms, addressFxeFhR, {from: accounts[1]});
		const uintlKCGGT = BigInt("173")
		const uintqzgeRqW = BigInt("1320")
//		const uint256IYvXh7 = await MarsStakingRewardsV5C2jQ.notifyRewardAmount.call(uintqzgeRqW, uintlKCGGT, {from: accounts[0]});
//		const boolbZZElbq = await MarsStakingRewardsV5C2jQ.isOwner.call({from: accounts[4]});

		await expect(MarsStakingRewardsV5C2jQ.notifyRewardAmount.call(uintqzgeRqW, uintlKCGGT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressQgpgjrK = accounts[2]
		const addressD5pLSaY = accounts[2]
		const addressAcZqZXc = accounts[0]
		const MarsStakingRewardsV5C2jQ = await MarsStakingRewards.new(addressQgpgjrK, addressD5pLSaY, addressAcZqZXc, {from: accounts[1]});
		const addressBfyHXZ = accounts[3]
		const uintZlEWan = BigInt("157")
		const uint256xJEa4Go = await MarsStakingRewardsV5C2jQ.totalSupply.call({from: accounts[0]});
		const uint256VkKre0P = await MarsStakingRewardsV5C2jQ.earned.call(addressBfyHXZ, {from: accounts[4]});
//		const uint256xrBKjKi = await MarsStakingRewardsV5C2jQ.withdraw.call(uintZlEWan, {from: accounts[1]});
//		const uint256Es7baK = await MarsStakingRewardsV5C2jQ.totalSupply.call({from: accounts[0]});

		assert.equal(uint256VkKre0P, BigInt("0"))
		assert.equal(uint256xJEa4Go, BigInt("0"))
		await expect(MarsStakingRewardsV5C2jQ.withdraw.call(uintZlEWan, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressTAMaVUJ = accounts[2]
		const addressTm0JHvT = accounts[2]
		const addresscKwyysr = accounts[0]
		const MarsStakingRewardsV5C2jQ = await MarsStakingRewards.new(addressTAMaVUJ, addressTm0JHvT, addresscKwyysr, {from: accounts[1]});
		const addressMmbJ25j = accounts[3]
		const addressG2gj9eQ = accounts[3]
		const uint256nX7fanA = await MarsStakingRewardsV5C2jQ.balanceOf.call(addressMmbJ25j, {from: accounts[0]});
		const uint256VkKre0P = await MarsStakingRewardsV5C2jQ.earned.call(addressG2gj9eQ, {from: accounts[4]});

		assert.equal(uint256VkKre0P, BigInt("0"))
		assert.equal(uint256nX7fanA, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressT1KPRVr = accounts[2]
		const addressZLoPoE = accounts[2]
		const addressJeHc8Oy = accounts[0]
		const MarsStakingRewardsV5C2jQ = await MarsStakingRewards.new(addressT1KPRVr, addressZLoPoE, addressJeHc8Oy, {from: accounts[1]});
		const addressmnajKPS = accounts[3]
		const uint256VkKre0P = await MarsStakingRewardsV5C2jQ.earned.call(addressmnajKPS, {from: accounts[4]});
		const uint256gMwpsM7 = await MarsStakingRewardsV5C2jQ.getRewardForDuration.call({from: accounts[2]});
		const booloBSnhAo = await MarsStakingRewardsV5C2jQ.isOwner.call({from: accounts[3]});

		assert.equal(booloBSnhAo, false)
		assert.equal(uint256VkKre0P, BigInt("0"))
		assert.equal(uint256gMwpsM7, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressI0dBuW7 = accounts[2]
		const addressxRNWXK = accounts[2]
		const addresstNiyb2X = accounts[0]
		const MarsStakingRewardsV5C2jQ = await MarsStakingRewards.new(addressI0dBuW7, addressxRNWXK, addresstNiyb2X, {from: accounts[1]});
		const uintNuai5Vc = BigInt("691")
		const uintCvZRFAG = BigInt("1831")
		const boolbZZElbq = await MarsStakingRewardsV5C2jQ.isOwner.call({from: accounts[4]});
//		const uint256VhKZt8W = await MarsStakingRewardsV5C2jQ.notifyRewardAmount.call(uintCvZRFAG, uintNuai5Vc, {from: accounts[2]});

		assert.equal(boolbZZElbq, false)
		await expect(MarsStakingRewardsV5C2jQ.notifyRewardAmount.call(uintCvZRFAG, uintNuai5Vc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressVF0p1f7 = accounts[2]
		const addressNHVfOyq = accounts[2]
		const addressOoCmKE3 = accounts[0]
		const MarsStakingRewardsV5C2jQ = await MarsStakingRewards.new(addressVF0p1f7, addressNHVfOyq, addressOoCmKE3, {from: accounts[1]});
		const addressE9JcFjF = accounts[3]
		const uintoRgX0Fu = BigInt("1376")
		const addressFAhCEcy = accounts[4]
		const uint256VkKre0P = await MarsStakingRewardsV5C2jQ.earned.call(addressE9JcFjF, {from: accounts[4]});
//		const addressGNvQbRn = await MarsStakingRewardsV5C2jQ.inCaseTokensGetStuck.call(addressFAhCEcy, uintoRgX0Fu, {from: accounts[1]});

		assert.equal(uint256VkKre0P, BigInt("0"))
		await expect(MarsStakingRewardsV5C2jQ.inCaseTokensGetStuck.call(addressFAhCEcy, uintoRgX0Fu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})