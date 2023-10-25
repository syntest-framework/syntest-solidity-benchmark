const RainbowRAK = artifacts.require("RainbowRAK");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RainbowRAK', (accounts) => {
	it('test for RainbowRAK', async () => {
		const RainbowRAKT3QJcK3 = await RainbowRAK.new({from: accounts[4]});
		const uintUBBTlqJ = BigInt("538")
		const addressFSnHuKs = "0x0000000000000000000000000000000000000001"
		const uint256n3hZof5 = await RainbowRAKT3QJcK3.stake.call(uintUBBTlqJ, {from: accounts[1]});
		const addresstKEwQj = await RainbowRAKT3QJcK3.transferOwnership.call(addressFSnHuKs, {from: accounts[5]});

		await expect(RainbowRAKT3QJcK3.stake.call(uintUBBTlqJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKGfJTHsT = await RainbowRAK.new({from: accounts[4]});
		const uintlWFUeyd = BigInt("1712")
		const uint256RNw8mR = await RainbowRAKGfJTHsT.lastTimeRewardApplicable.call({from: accounts[4]});
		await RainbowRAKGfJTHsT.exit.call({from: accounts[2]});
		await RainbowRAKGfJTHsT.exit.call({from: accounts[1]});
		const uint256ZfTnQQ0 = await RainbowRAKGfJTHsT.stake.call(uintlWFUeyd, {from: accounts[2]});

		assert.equal(uint256RNw8mR, BigInt("0"))
		await expect(RainbowRAKGfJTHsT.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKxEFoNIT = await RainbowRAK.new({from: accounts[3]});
		const uint256PprbKSA = await RainbowRAKxEFoNIT.getCurrentRewardReserve.call({from: accounts[4]});
		const addressgptqcW = await RainbowRAKxEFoNIT.owner.call({from: accounts[3]});
		await RainbowRAKxEFoNIT.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256FsrnNm6 = await RainbowRAKxEFoNIT.lastTimeRewardApplicable.call({from: accounts[3]});

		assert.equal(addressgptqcW, 0x710AAF2A38a33859E0E7BBc598AaF9cd9236eAeA)
		assert.equal(uint256PprbKSA, BigInt("0"))
		await expect(RainbowRAKxEFoNIT.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKWe0ZFt = await RainbowRAK.new({from: "0x0000000000000000000000000000000000000001"});
		const addressWW5C4ta = accounts[4]
		const uintP3I9whF = BigInt("1897")
		await RainbowRAKWe0ZFt.onlyOwner.call({from: accounts[4]});
		const addressrhribTb = await RainbowRAKWe0ZFt.transferOwnership.call(addressWW5C4ta, {from: accounts[3]});
		const uint256gUf2MGZ = await RainbowRAKWe0ZFt.unstake.call(uintP3I9whF, {from: accounts[4]});
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKefkTJrD = await RainbowRAK.new({from: accounts[5]});
		const addressKlI5ZGQ = accounts[4]
		const addressctdHIa7 = await RainbowRAKefkTJrD.updateReward.call(addressKlI5ZGQ, {from: accounts[1]});
		const boolSplACGj = await RainbowRAKefkTJrD.isOwner.call({from: accounts[2]});

		await expect(RainbowRAKefkTJrD.updateReward.call(addressKlI5ZGQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKCU37kKI = await RainbowRAK.new({from: accounts[0]});
		const uintH8LcFAk = BigInt("1590")
		const uintG8l8cS2 = BigInt("1157")
		await RainbowRAKCU37kKI.claimRewards.call({from: accounts[4]});
		const uint2563sGtGU = await RainbowRAKCU37kKI.getCurrentRewardReserve.call({from: accounts[0]});
		const addressarrayWQKBbZY = await RainbowRAKCU37kKI.getCommunity.call({from: accounts[4]});
		await RainbowRAKCU37kKI.onlyOwner.call({from: accounts[0]});
		const uint256kY3ZpvY = await RainbowRAKCU37kKI.notifyRewardAmount.call(uintH8LcFAk, {from: accounts[1]});
		const uint256AlGoZ9g = await RainbowRAKCU37kKI.unstake.call(uintG8l8cS2, {from: accounts[0]});

		await expect(RainbowRAKCU37kKI.claimRewards.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKx44Q7BS = await RainbowRAK.new({from: accounts[0]});
		const uintMGRpPk4 = BigInt("1764")
		const uintiklNLz2 = BigInt("1629")
		const boolIx3cSl1 = await RainbowRAKx44Q7BS.isOwner.call({from: accounts[1]});
		await RainbowRAKx44Q7BS.renounceOwnership.call({from: accounts[2]});
		const uint256ke66uRl = await RainbowRAKx44Q7BS.stake.call(uintMGRpPk4, {from: accounts[5]});
		const uint256qiW0KTJ = await RainbowRAKx44Q7BS.stake.call(uintiklNLz2, {from: accounts[2]});

		assert.equal(boolIx3cSl1, false)
		await expect(RainbowRAKx44Q7BS.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKT3QJcK3 = await RainbowRAK.new({from: accounts[4]});
		const uint2JU7Mo = BigInt("538")
		const addressqUsCSj3 = accounts[1]
		const addressmP5y6qH = "0x0000000000000000000000000000000000000000"
		const addressarrayGZhULT = await RainbowRAKT3QJcK3.getCommunity.call({from: accounts[3]});
		const uint256n3hZof5 = await RainbowRAKT3QJcK3.stake.call(uint2JU7Mo, {from: accounts[1]});
		await RainbowRAKT3QJcK3.onlyOwner.call({from: accounts[1]});
		const addressUu0qgHS = await RainbowRAKT3QJcK3.updateReward.call(addressqUsCSj3, {from: accounts[2]});
		const addresstKEwQj = await RainbowRAKT3QJcK3.transferOwnership.call(addressmP5y6qH, {from: accounts[5]});

		assert.equal(addressarrayGZhULT, )
		await expect(RainbowRAKT3QJcK3.stake.call(uint2JU7Mo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKFIH350 = await RainbowRAK.new({from: accounts[5]});
		const uintAkewezO = BigInt("398")
		const uintZOlOYZU = BigInt("1020")
		const uint256pkXOqJ2 = await RainbowRAKFIH350.unstake.call(uintAkewezO, {from: accounts[3]});
		await RainbowRAKFIH350.renounceOwnership.call({from: accounts[2]});
		const uint256Z1M5PnX = await RainbowRAKFIH350.notifyRewardAmount.call(uintZOlOYZU, {from: "0x0000000000000000000000000000000000000001"});
		await RainbowRAKFIH350.exit.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(RainbowRAKFIH350.unstake.call(uintAkewezO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKT3QJcK3 = await RainbowRAK.new({from: accounts[4]});
		const addresswCE3ZKW = accounts[1]
		const uinthsoY3LI = BigInt("481")
		const addresswLoALdP = await RainbowRAKT3QJcK3.transferOwnership.call(addresswCE3ZKW, {from: accounts[4]});
		const addresszfxnyEr = await RainbowRAKT3QJcK3.owner.call({from: accounts[0]});
		const uint256n3hZof5 = await RainbowRAKT3QJcK3.stake.call(uinthsoY3LI, {from: accounts[1]});

		assert.equal(addresszfxnyEr, 0x420ff1A933EC799a8C54C4cE8F7fd9A2aFf0882A)
		await expect(RainbowRAKT3QJcK3.stake.call(uinthsoY3LI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKIxRvoQ3 = await RainbowRAK.new({from: accounts[2]});
		const uintRLAMiWx = BigInt("544")
		const addressjwKvCjR = accounts[4]
		const uint256VySZ9kf = await RainbowRAKIxRvoQ3.notifyRewardAmount.call(uintRLAMiWx, {from: accounts[2]});
		await RainbowRAKIxRvoQ3.onlyOwner.call({from: accounts[1]});
		const addressarrayXmp3UIn = await RainbowRAKIxRvoQ3.getCommunity.call({from: accounts[3]});
		const addressvYFLwXb = await RainbowRAKIxRvoQ3.transferOwnership.call(addressjwKvCjR, {from: accounts[4]});

		await expect(RainbowRAKIxRvoQ3.notifyRewardAmount.call(uintRLAMiWx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKT3QJcK3 = await RainbowRAK.new({from: accounts[4]});
		const addressKsHQ8Sj = accounts[3]
		const uintrRpd1L = BigInt("1410")
		await RainbowRAKT3QJcK3.renounceOwnership.call({from: accounts[4]});
		const uint256vDleh4K = await RainbowRAKT3QJcK3.earned.call(addressKsHQ8Sj, {from: "0x0000000000000000000000000000000000000001"});
		const uint256n3hZof5 = await RainbowRAKT3QJcK3.stake.call(uintrRpd1L, {from: accounts[1]});

		await expect(RainbowRAKT3QJcK3.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})