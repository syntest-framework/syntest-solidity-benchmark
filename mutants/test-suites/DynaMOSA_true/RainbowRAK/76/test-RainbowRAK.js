const RainbowRAK = artifacts.require("RainbowRAK");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RainbowRAK', (accounts) => {
	it('test for RainbowRAK', async () => {
		const RainbowRAKHkEaLpv = await RainbowRAK.new({from: accounts[1]});
		const addresspgWJRVl = accounts[0]
		const addressxJCxx0O = accounts[0]
		const uint25650MgfT = await RainbowRAKHkEaLpv.earned.call(addresspgWJRVl, {from: accounts[0]});
//		const addressUuGte5Z = await RainbowRAKHkEaLpv.transferOwnership.call(addressxJCxx0O, {from: accounts[2]});
//		await RainbowRAKHkEaLpv.onlyOwner.call({from: accounts[2]});

		assert.equal(uint25650MgfT, BigInt("0"))
		await expect(RainbowRAKHkEaLpv.transferOwnership.call(addressxJCxx0O, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKOZ1BwxG = await RainbowRAK.new({from: accounts[0]});
		const uinthfBo0Yv = BigInt("1131")
//		await RainbowRAKOZ1BwxG.claimRewards.call({from: accounts[3]});
//		const uint256BQ9GBgl = await RainbowRAKOZ1BwxG.unstake.call(uinthfBo0Yv, {from: accounts[4]});
//		const uint256gPDwDfI = await RainbowRAKOZ1BwxG.rewardPerToken.call({from: accounts[2]});
//		const uint256azTMzrK = await RainbowRAKOZ1BwxG.getCurrentRewardReserve.call({from: accounts[3]});
//		const uint256FrzOAuf = await RainbowRAKOZ1BwxG.rewardPerToken.call({from: accounts[3]});

		await expect(RainbowRAKOZ1BwxG.claimRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKXZXe3pl = await RainbowRAK.new({from: accounts[2]});
		const uintrwx5QjH = BigInt("326")
//		await RainbowRAKXZXe3pl.onlyOwner.call({from: accounts[5]});
//		const uint256eSbX9Yy = await RainbowRAKXZXe3pl.stake.call(uintrwx5QjH, {from: accounts[4]});

		await expect(RainbowRAKXZXe3pl.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKa8btNav = await RainbowRAK.new({from: accounts[5]});
		const uintObEnax4 = BigInt("1577")
//		const uint256k2nk0Df = await RainbowRAKa8btNav.unstake.call(uintObEnax4, {from: accounts[3]});
//		await RainbowRAKa8btNav.renounceOwnership.call({from: accounts[0]});

		await expect(RainbowRAKa8btNav.unstake.call(uintObEnax4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKqIUl5UQ = await RainbowRAK.new({from: accounts[4]});
		const uintKBRXrBI = BigInt("1564")
		const addressjgAyvp = accounts[1]
		const addresscPGfNR = accounts[3]
//		await RainbowRAKqIUl5UQ.exit.call({from: accounts[2]});
//		const uint256YFClr92 = await RainbowRAKqIUl5UQ.unstake.call(uintKBRXrBI, {from: accounts[3]});
//		const addressOxvQURP = await RainbowRAKqIUl5UQ.transferOwnership.call(addressjgAyvp, {from: "0x0000000000000000000000000000000000000001"});
//		const addressTQNb7B = await RainbowRAKqIUl5UQ.transferOwnership.call(addresscPGfNR, {from: accounts[1]});
//		const uint256hy5Qprc = await RainbowRAKqIUl5UQ.lastTimeRewardApplicable.call({from: accounts[1]});

		await expect(RainbowRAKqIUl5UQ.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKK6g8wvb = await RainbowRAK.new({from: "0x0000000000000000000000000000000000000001"});
		const uintwsB8qFh = BigInt("680")
		const boolPaa3PNf = await RainbowRAKK6g8wvb.isOwner.call({from: accounts[3]});
		const uint256JkUG4az = await RainbowRAKK6g8wvb.unstake.call(uintwsB8qFh, {from: accounts[1]});
		const uint256CZca16 = await RainbowRAKK6g8wvb.lastTimeRewardApplicable.call({from: accounts[1]});
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKfFEc9Q7 = await RainbowRAK.new({from: accounts[2]});
		const addressLSP2u0q = "0x0000000000000000000000000000000000000001"
		const addresszQ1mw3P = accounts[4]
		const addressarraybUVeHf = await RainbowRAKfFEc9Q7.getCommunity.call({from: accounts[3]});
//		await RainbowRAKfFEc9Q7.onlyOwner.call({from: accounts[4]});
//		const addressDVUKULG = await RainbowRAKfFEc9Q7.transferOwnership.call(addressLSP2u0q, {from: accounts[1]});
//		await RainbowRAKfFEc9Q7.exit.call({from: accounts[3]});
//		const uint256Cc86OlM = await RainbowRAKfFEc9Q7.earned.call(addresszQ1mw3P, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressarraybUVeHf, )
		await expect(RainbowRAKfFEc9Q7.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKjhxuVDD = await RainbowRAK.new({from: accounts[2]});
		const uintxiMkn3U = BigInt("770")
		const uint256durSIAZ = await RainbowRAKjhxuVDD.rewardPerToken.call({from: accounts[4]});
		const uint256aWukYB = await RainbowRAKjhxuVDD.getCurrentRewardReserve.call({from: accounts[5]});
//		const uint256lHErUgp = await RainbowRAKjhxuVDD.unstake.call(uintxiMkn3U, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256aWukYB, BigInt("0"))
		assert.equal(uint256durSIAZ, BigInt("0"))
		await expect(RainbowRAKjhxuVDD.unstake.call(uintxiMkn3U, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKfFEc9Q7 = await RainbowRAK.new({from: accounts[2]});
		const uintCz2TW5N = BigInt("676")
		const uintPQ6PeT0 = BigInt("1216")
		const addressTv1svez = accounts[7]
//		const uint256rlmU1Y6 = await RainbowRAKfFEc9Q7.notifyRewardAmount.call(uintCz2TW5N, {from: accounts[2]});
//		const uint256HjJkhh1 = await RainbowRAKfFEc9Q7.notifyRewardAmount.call(uintPQ6PeT0, {from: accounts[1]});
//		const uint256Cc86OlM = await RainbowRAKfFEc9Q7.earned.call(addressTv1svez, {from: "0x0000000000000000000000000000000000000001"});

		await expect(RainbowRAKfFEc9Q7.notifyRewardAmount.call(uintCz2TW5N, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKSlODS6 = await RainbowRAK.new({from: accounts[4]});
		const addressXX3Sa15 = accounts[2]
		const addressvDqJW8i = accounts[5]
		const addressaAlF4y = await RainbowRAKSlODS6.transferOwnership.call(addressXX3Sa15, {from: accounts[4]});
		const uint256sLX4Qpa = await RainbowRAKSlODS6.rewardPerToken.call({from: accounts[4]});
//		const addressXE8RiEL = await RainbowRAKSlODS6.transferOwnership.call(addressvDqJW8i, {from: accounts[2]});
//		const boolRSi6X9a = await RainbowRAKSlODS6.isOwner.call({from: accounts[0]});

		assert.equal(uint256sLX4Qpa, BigInt("0"))
		await expect(RainbowRAKSlODS6.transferOwnership.call(addressvDqJW8i, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKfFEc9Q7 = await RainbowRAK.new({from: accounts[2]});
		const addressKf52MZ = accounts[8]
		const uintBdvOoJc = BigInt("521")
		const addresspWrYAlT = "0x0000000000000000000000000000000000000001"
		const uint256Cc86OlM = await RainbowRAKfFEc9Q7.earned.call(addressKf52MZ, {from: "0x0000000000000000000000000000000000000001"});
//		await RainbowRAKfFEc9Q7.renounceOwnership.call({from: accounts[2]});
//		const uint256cyetpdJ = await RainbowRAKfFEc9Q7.unstake.call(uintBdvOoJc, {from: accounts[3]});
//		const uint256XlbOWxa = await RainbowRAKfFEc9Q7.getCurrentRewardReserve.call({from: accounts[2]});
//		const addressDH3VScH = await RainbowRAKfFEc9Q7.updateReward.call(addresspWrYAlT, {from: accounts[5]});
//		await RainbowRAKfFEc9Q7.claimRewards.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256Cc86OlM, BigInt("0"))
		await expect(RainbowRAKfFEc9Q7.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKSqOhFl0 = await RainbowRAK.new({from: accounts[1]});
		const uintQwgWzfE = BigInt("1771")
		const uint256dy1aVn = await RainbowRAKSqOhFl0.getCurrentRewardReserve.call({from: accounts[0]});
//		const uint256kVTGEuV = await RainbowRAKSqOhFl0.stake.call(uintQwgWzfE, {from: accounts[0]});
//		await RainbowRAKSqOhFl0.renounceOwnership.call({from: accounts[1]});

		assert.equal(uint256dy1aVn, BigInt("0"))
		await expect(RainbowRAKSqOhFl0.stake.call(uintQwgWzfE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKgTOwM7n = await RainbowRAK.new({from: accounts[4]});
		const uintAfpJqVQ = BigInt("1867")
		const addressdz8h9zV = await RainbowRAKgTOwM7n.owner.call({from: accounts[1]});
		const addressw99elQx = await RainbowRAKgTOwM7n.owner.call({from: accounts[1]});
//		const uint256n3yzltX = await RainbowRAKgTOwM7n.unstake.call(uintAfpJqVQ, {from: accounts[1]});

		assert.equal(addressdz8h9zV, 0xBAFE56b0A6716816871926D35714BE45D1da560C)
		assert.equal(addressw99elQx, 0xBAFE56b0A6716816871926D35714BE45D1da560C)
		await expect(RainbowRAKgTOwM7n.unstake.call(uintAfpJqVQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKfFEc9Q7 = await RainbowRAK.new({from: accounts[2]});
		const addresswMVWdaq = accounts[10]
		const uintk8dcRto = BigInt("285")
//		const uint256Cc86OlM = await RainbowRAKfFEc9Q7.earned.call(addresswMVWdaq, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256fb2F2vN = await RainbowRAKfFEc9Q7.stake.call(uintk8dcRto, {from: accounts[1]});

		await expect(RainbowRAKfFEc9Q7.earned.call(addresswMVWdaq, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})