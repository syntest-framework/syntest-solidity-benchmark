const MarsStakingRewards = artifacts.require("MarsStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MarsStakingRewards', (accounts) => {
	it('test for MarsStakingRewards', async () => {
		const addressN95Xqzf = accounts[3]
		const addressKwGvAIh = accounts[5]
		const addressCjSFCDP = accounts[1]
		const MarsStakingRewardsRem163 = await MarsStakingRewards.new(addressN95Xqzf, addressKwGvAIh, addressCjSFCDP, {from: accounts[2]});
		const addressGHs4QSe = accounts[3]
		const uint256h0GXHoR = await MarsStakingRewardsRem163.rewardPerToken.call({from: accounts[5]});
//		const addressJTXQ1y8 = await MarsStakingRewardsRem163.updateReward.call(addressGHs4QSe, {from: accounts[4]});
//		await MarsStakingRewardsRem163.nonReentrant.call({from: accounts[0]});

		assert.equal(uint256h0GXHoR, BigInt("0"))
		await expect(MarsStakingRewardsRem163.updateReward.call(addressGHs4QSe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressPU3Pkg8 = accounts[2]
		const addressnLvyMb = accounts[0]
		const addressydhlcbB = accounts[3]
		const MarsStakingRewardsflJ554W = await MarsStakingRewards.new(addressPU3Pkg8, addressnLvyMb, addressydhlcbB, {from: accounts[0]});
		const addressO4pj1vj = accounts[3]
		const uintxrtCHgP = BigInt("60")
		const addressSzKNdXp = accounts[3]
//		await MarsStakingRewardsflJ554W.getReward.call({from: accounts[5]});
		await MarsStakingRewardsflJ554W.getReward.call({from: accounts[5]});
//		const addressrlxOfQ7 = await MarsStakingRewardsflJ554W.updateReward.call(addressO4pj1vj, {from: accounts[4]});
//		const addressxRnB7H = await MarsStakingRewardsflJ554W.inCaseTokensGetStuck.call(addressSzKNdXp, uintxrtCHgP, {from: accounts[2]});

		await expect(MarsStakingRewardsflJ554W.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressqdWkrNe = accounts[2]
		const addresssSyu4la = accounts[1]
		const addresse0FrglP = accounts[0]
		const MarsStakingRewardsqzYwG72 = await MarsStakingRewards.new(addressqdWkrNe, addresssSyu4la, addresse0FrglP, {from: accounts[0]});
		const addressX9j2WHs = accounts[3]
		const uint256du8Ubn7 = await MarsStakingRewardsqzYwG72.totalSupply.call({from: accounts[2]});
//		const addressLYYvynb = await MarsStakingRewardsqzYwG72.updateReward.call(addressX9j2WHs, {from: accounts[1]});
//		const uint256kxF0fyj = await MarsStakingRewardsqzYwG72.lastTimeRewardApplicable.call({from: accounts[3]});

		assert.equal(uint256du8Ubn7, BigInt("0"))
		await expect(MarsStakingRewardsqzYwG72.updateReward.call(addressX9j2WHs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressolmtiSL = "0x0000000000000000000000000000000000000001"
		const addresslBAM6PL = accounts[3]
		const addressBg0ETC2 = accounts[4]
		const MarsStakingRewardsZmJQV8a = await MarsStakingRewards.new(addressolmtiSL, addresslBAM6PL, addressBg0ETC2, {from: "0x0000000000000000000000000000000000000001"});
		const addressVzC21zk = accounts[3]
		const uintWYDReX6 = BigInt("1272")
		const uint256fSXuIN1 = await MarsStakingRewardsZmJQV8a.earned.call(addressVzC21zk, {from: accounts[1]});
		const uint256wOOhQsD = await MarsStakingRewardsZmJQV8a.withdraw.call(uintWYDReX6, {from: accounts[0]});
		const addressHxxthGh = await MarsStakingRewardsZmJQV8a.owner.call({from: accounts[4]});
	});

	it('test for MarsStakingRewards', async () => {
		const addresslcEZuZ9 = accounts[1]
		const addressnBkKGjC = accounts[4]
		const addresspqP0E2B = accounts[5]
		const MarsStakingRewardsdd0AtZ0 = await MarsStakingRewards.new(addresslcEZuZ9, addressnBkKGjC, addresspqP0E2B, {from: accounts[2]});
		const uinthZBNKIJ = BigInt("313")
		const uint256IRhceUq = await MarsStakingRewardsdd0AtZ0.totalSupply.call({from: accounts[1]});
//		await MarsStakingRewardsdd0AtZ0.exit.call({from: accounts[0]});
//		const uint256OCFEEi0 = await MarsStakingRewardsdd0AtZ0.lastTimeRewardApplicable.call({from: accounts[4]});
//		const uint256zpYU6Cc = await MarsStakingRewardsdd0AtZ0.withdraw.call(uinthZBNKIJ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256IRhceUq, BigInt("0"))
		await expect(MarsStakingRewardsdd0AtZ0.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressxQuHENX = accounts[1]
		const addresst0ZcHNM = accounts[4]
		const addressPc4ddMR = accounts[5]
		const MarsStakingRewardsYjwalkj = await MarsStakingRewards.new(addressxQuHENX, addresst0ZcHNM, addressPc4ddMR, {from: accounts[1]});
		const addressEmxI44Q = accounts[4]
//		const addresspxHofE = await MarsStakingRewardsYjwalkj.transferOwnership.call(addressEmxI44Q, {from: accounts[4]});
//		const boolpkAH7Lm = await MarsStakingRewardsYjwalkj.isOwner.call({from: accounts[4]});
//		await MarsStakingRewardsYjwalkj.getReward.call({from: accounts[0]});
//		await MarsStakingRewardsYjwalkj.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolTuVk9K1 = await MarsStakingRewardsYjwalkj.isOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(MarsStakingRewardsYjwalkj.transferOwnership.call(addressEmxI44Q, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressg0wBzBn = accounts[3]
		const addresskTDZsQ9 = "0x0000000000000000000000000000000000000001"
		const addressAyb8QCr = accounts[4]
		const MarsStakingRewardsIbAROe1 = await MarsStakingRewards.new(addressg0wBzBn, addresskTDZsQ9, addressAyb8QCr, {from: accounts[3]});
		const addressLRKdixF = await MarsStakingRewardsIbAROe1.owner.call({from: accounts[1]});
//		await MarsStakingRewardsIbAROe1.nonReentrant.call({from: accounts[3]});
//		await MarsStakingRewardsIbAROe1.getReward.call({from: accounts[0]});

		assert.equal(addressLRKdixF, 0xfaE6e1a0F556bCBD77297738CCC531F95fC36822)
		await expect(MarsStakingRewardsIbAROe1.nonReentrant.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresslptRKng = accounts[5]
		const addressxajSRwR = accounts[4]
		const addressCFIatKZ = accounts[4]
		const MarsStakingRewardspmY3Tzu = await MarsStakingRewards.new(addresslptRKng, addressxajSRwR, addressCFIatKZ, {from: accounts[1]});
		const uint5RaDWK = BigInt("1660")
		const addressxsfL5G3 = "0x0000000000000000000000000000000000000001"
		const addressKIFldu9 = accounts[3]
//		const addressuUOQ4k8 = await MarsStakingRewardspmY3Tzu.inCaseTokensGetStuck.call(addressxsfL5G3, uint5RaDWK, {from: accounts[1]});
//		await MarsStakingRewardspmY3Tzu.exit.call({from: accounts[4]});
//		const uint256JISgBEp = await MarsStakingRewardspmY3Tzu.balanceOf.call(addressKIFldu9, {from: accounts[0]});
//		const uint256sbrhpqL = await MarsStakingRewardspmY3Tzu.getRewardForDuration.call({from: accounts[3]});

		await expect(MarsStakingRewardspmY3Tzu.inCaseTokensGetStuck.call(addressxsfL5G3, uint5RaDWK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressk9nPaA8 = accounts[4]
		const addresswa4bOwn = accounts[4]
		const addressqXeQs07 = accounts[1]
		const MarsStakingRewardsirUVdqs = await MarsStakingRewards.new(addressk9nPaA8, addresswa4bOwn, addressqXeQs07, {from: accounts[4]});
		const addressdCBrO9E = accounts[4]
		const byteKDgSyn0 = "0x0e061b0c100f1f1f1a0a08020b0d1e131b0607120e0e0e1b1e16180e02161d13"
		const byte4TxxPd = "0x1407110e1c001d1e1f101e19060e120d1b1a020c030d1c0e1e0e071d070f0a0a"
		const uintcA2gECf = BigInt("9")
		const uintWIucpUT = BigInt("778")
		const uintFJ021rL = BigInt("1582")
		const byteaOWB8t5 = "0x141b1f071100050f0b1d160d1713060817020a0801061d18061e0609111e1113"
		const byteQe22qkb = "0x0a1b200e181e0e111310061b031610190f02071e06060b1c0a091b14101c1510"
		const uintidZKlP = BigInt("161")
		const uinttWGIZl = BigInt("1057")
		const uintd4VJidB = BigInt("1874")
		const uint256GhM0Ya = await MarsStakingRewardsirUVdqs.balanceOf.call(addressdCBrO9E, {from: accounts[3]});
//		const uint256DSmwXaO = await MarsStakingRewardsirUVdqs.stakeWithPermit.call(uintFJ021rL, uintWIucpUT, uintcA2gECf, byte4TxxPd, byteKDgSyn0, {from: accounts[4]});
//		await MarsStakingRewardsirUVdqs.onlyOwner.call({from: accounts[0]});
//		const uint256Thp8iD = await MarsStakingRewardsirUVdqs.stakeWithPermit.call(uintd4VJidB, uinttWGIZl, uintidZKlP, byteQe22qkb, byteaOWB8t5, {from: accounts[1]});

		assert.equal(uint256GhM0Ya, BigInt("0"))
		await expect(MarsStakingRewardsirUVdqs.stakeWithPermit.call(uintFJ021rL, uintWIucpUT, uintcA2gECf, byte4TxxPd, byteKDgSyn0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressxITL6Vx = accounts[3]
		const addressMbVdgJG = accounts[1]
		const addressDVzQVuL = accounts[4]
		const MarsStakingRewardsJs0GEz = await MarsStakingRewards.new(addressxITL6Vx, addressMbVdgJG, addressDVzQVuL, {from: accounts[1]});
		const addressHUj2w4 = accounts[2]
		const uintAewsfUU = BigInt("320")
		const addressHEMbCJ5 = accounts[2]
		const address84uZg8 = accounts[2]
		const addressGFrW3Hv = await MarsStakingRewardsJs0GEz.setRewardsDistribution.call(addressHUj2w4, {from: accounts[1]});
//		const addressNXFlMq = await MarsStakingRewardsJs0GEz.inCaseTokensGetStuck.call(addressHEMbCJ5, uintAewsfUU, {from: accounts[1]});
//		const uint256KenA5uD = await MarsStakingRewardsJs0GEz.earned.call(address84uZg8, {from: accounts[0]});
//		const boolV1WvUNa = await MarsStakingRewardsJs0GEz.isOwner.call({from: accounts[0]});

		await expect(MarsStakingRewardsJs0GEz.inCaseTokensGetStuck.call(addressHEMbCJ5, uintAewsfUU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressO8MxxKz = accounts[3]
		const addresscxibAD = accounts[5]
		const addressSuRR1IK = accounts[1]
		const MarsStakingRewardsRem163 = await MarsStakingRewards.new(addressO8MxxKz, addresscxibAD, addressSuRR1IK, {from: accounts[2]});
		const addressUgChWwT = accounts[3]
		const uint256h0GXHoR = await MarsStakingRewardsRem163.rewardPerToken.call({from: accounts[5]});
		const uint256Ru2HdBw = await MarsStakingRewardsRem163.earned.call(addressUgChWwT, {from: accounts[0]});
//		await MarsStakingRewardsRem163.nonReentrant.call({from: accounts[0]});

		assert.equal(uint256Ru2HdBw, BigInt("0"))
		assert.equal(uint256h0GXHoR, BigInt("0"))
		await expect(MarsStakingRewardsRem163.nonReentrant.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressbLTrVxR = accounts[5]
		const addressSZkwmZX = accounts[4]
		const address2JtDPX = accounts[4]
		const MarsStakingRewardspmY3Tzu = await MarsStakingRewards.new(addressbLTrVxR, addressSZkwmZX, address2JtDPX, {from: accounts[1]});
		const uintn9aY276 = BigInt("1664")
		const addressM8Q0N2l = accounts[4]
		const addresslC7lUmS = accounts[3]
//		const addressuUOQ4k8 = await MarsStakingRewardspmY3Tzu.inCaseTokensGetStuck.call(addressM8Q0N2l, uintn9aY276, {from: accounts[1]});
//		await MarsStakingRewardspmY3Tzu.exit.call({from: accounts[4]});
//		const uint256OYiw46d = await MarsStakingRewardspmY3Tzu.rewardPerToken.call({from: accounts[0]});
//		await MarsStakingRewardspmY3Tzu.renounceOwnership.call({from: accounts[4]});
//		const uint256JISgBEp = await MarsStakingRewardspmY3Tzu.balanceOf.call(addresslC7lUmS, {from: accounts[0]});
//		await MarsStakingRewardspmY3Tzu.onlyRewardsDistribution.call({from: accounts[0]});
//		const uint256sbrhpqL = await MarsStakingRewardspmY3Tzu.getRewardForDuration.call({from: accounts[3]});

		await expect(MarsStakingRewardspmY3Tzu.inCaseTokensGetStuck.call(addressM8Q0N2l, uintn9aY276, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressDGwRtK = accounts[3]
		const addressu2q59ck = accounts[5]
		const addressryDhJ1 = accounts[1]
		const MarsStakingRewardsRem163 = await MarsStakingRewards.new(addressDGwRtK, addressu2q59ck, addressryDhJ1, {from: accounts[2]});
		const addressv1HRQRy = accounts[1]
		const addressZLeJKiI = accounts[4]
		const addressDvKP27X = accounts[4]
		const uint256iNG0Tz = await MarsStakingRewardsRem163.earned.call(addressv1HRQRy, {from: accounts[0]});
		const uint256h0GXHoR = await MarsStakingRewardsRem163.rewardPerToken.call({from: accounts[5]});
		const uint256a8VKjhf = await MarsStakingRewardsRem163.balanceOf.call(addressZLeJKiI, {from: accounts[2]});
		const addressxPg7Msx = await MarsStakingRewardsRem163.transferOwnership.call(addressDvKP27X, {from: accounts[2]});
//		await MarsStakingRewardsRem163.nonReentrant.call({from: accounts[0]});

		assert.equal(uint256a8VKjhf, BigInt("0"))
		assert.equal(uint256h0GXHoR, BigInt("0"))
		assert.equal(uint256iNG0Tz, BigInt("0"))
		await expect(MarsStakingRewardsRem163.nonReentrant.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressIIjpxYM = accounts[3]
		const addressdjnaVmp = accounts[1]
		const addressxd7tclq = accounts[4]
		const MarsStakingRewardsJs0GEz = await MarsStakingRewards.new(addressIIjpxYM, addressdjnaVmp, addressxd7tclq, {from: accounts[1]});
		const addressGDFQvhU = accounts[3]
		const uint6CBW7o = BigInt("2032")
		const uintJj4AXlO = BigInt("1031")
		const uintOx5dw2s = BigInt("320")
		const addressmyW2Ra3 = accounts[2]
		const addressqpu8vg9 = accounts[3]
		const addressGFrW3Hv = await MarsStakingRewardsJs0GEz.setRewardsDistribution.call(addressGDFQvhU, {from: accounts[1]});
		const uint256jGz1wo1 = await MarsStakingRewardsJs0GEz.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint256gDdzpNn = await MarsStakingRewardsJs0GEz.notifyRewardAmount.call(uintJj4AXlO, uint6CBW7o, {from: accounts[1]});
//		const addressNXFlMq = await MarsStakingRewardsJs0GEz.inCaseTokensGetStuck.call(addressmyW2Ra3, uintOx5dw2s, {from: accounts[1]});
//		const uint256KenA5uD = await MarsStakingRewardsJs0GEz.earned.call(addressqpu8vg9, {from: accounts[0]});

		assert.equal(uint256jGz1wo1, BigInt("0"))
		await expect(MarsStakingRewardsJs0GEz.notifyRewardAmount.call(uintJj4AXlO, uint6CBW7o, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressw82LxIM = accounts[3]
		const addressKQZ9bh = accounts[5]
		const addressnodW88q = accounts[1]
		const MarsStakingRewardsRem163 = await MarsStakingRewards.new(addressw82LxIM, addressKQZ9bh, addressnodW88q, {from: accounts[2]});
		const addressTh29j4v = accounts[3]
		const uint256Z7nCU1G = await MarsStakingRewardsRem163.getRewardForDuration.call({from: accounts[0]});
		const uint256pVzNtl = await MarsStakingRewardsRem163.earned.call(addressTh29j4v, {from: accounts[5]});
		const uint256h0GXHoR = await MarsStakingRewardsRem163.rewardPerToken.call({from: accounts[5]});

		assert.equal(uint256Z7nCU1G, BigInt("0"))
		assert.equal(uint256h0GXHoR, BigInt("0"))
		assert.equal(uint256pVzNtl, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressJSoywNA = accounts[3]
		const addressapDW7Y2 = accounts[1]
		const addressjOlYHqO = accounts[4]
		const MarsStakingRewardsJs0GEz = await MarsStakingRewards.new(addressJSoywNA, addressapDW7Y2, addressjOlYHqO, {from: accounts[1]});
		const uintdghZbyJ = BigInt("338")
		const addressqGZXbN = accounts[6]
//		await MarsStakingRewardsJs0GEz.renounceOwnership.call({from: accounts[1]});
//		const addressNXFlMq = await MarsStakingRewardsJs0GEz.inCaseTokensGetStuck.call(addressqGZXbN, uintdghZbyJ, {from: accounts[1]});

		await expect(MarsStakingRewardsJs0GEz.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresstW5E2bY = accounts[3]
		const addressfbzuzY2 = accounts[5]
		const addresskhNjgze = accounts[1]
		const MarsStakingRewardsRem163 = await MarsStakingRewards.new(addresstW5E2bY, addressfbzuzY2, addresskhNjgze, {from: accounts[2]});
		const uintOg6OGf = BigInt("654")
		const uinttefMC9 = BigInt("1224")
		const uint2560LPMSh = await MarsStakingRewardsRem163.rewardPerToken.call({from: accounts[4]});
		const uint256h0GXHoR = await MarsStakingRewardsRem163.rewardPerToken.call({from: accounts[5]});
//		const uint256f8wtuiE = await MarsStakingRewardsRem163.notifyRewardAmount.call(uinttefMC9, uintOg6OGf, {from: accounts[3]});

		assert.equal(uint2560LPMSh, BigInt("0"))
		assert.equal(uint256h0GXHoR, BigInt("0"))
		await expect(MarsStakingRewardsRem163.notifyRewardAmount.call(uinttefMC9, uintOg6OGf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})