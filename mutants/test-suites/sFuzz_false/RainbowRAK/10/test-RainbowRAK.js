const RainbowRAK = artifacts.require("RainbowRAK");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RainbowRAK', (accounts) => {
	it('test for RainbowRAK', async () => {
		const RainbowRAKpLlC1pU = await RainbowRAK.new({from: accounts[5]});
		const uintt7S360 = BigInt("1932")
		const addressNvkQDJR = "0x0000000000000000000000000000000000000001"
//		await RainbowRAKpLlC1pU.exit.call({from: accounts[1]});
//		const uint256mNV4ya5 = await RainbowRAKpLlC1pU.lastTimeRewardApplicable.call({from: accounts[4]});
//		const uint256lOsN8Po = await RainbowRAKpLlC1pU.stake.call(uintt7S360, {from: "0x0000000000000000000000000000000000000001"});
//		const addresswAjgyi = await RainbowRAKpLlC1pU.updateReward.call(addressNvkQDJR, {from: accounts[3]});
//		await RainbowRAKpLlC1pU.claimRewards.call({from: accounts[3]});
//		const boolGsQXmDP = await RainbowRAKpLlC1pU.isOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(RainbowRAKpLlC1pU.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKMzVPvba = await RainbowRAK.new({from: accounts[1]});
		const uintZs7mdCm = BigInt("1440")
		const uint256H4b855A = await RainbowRAKMzVPvba.rewardPerToken.call({from: accounts[2]});
//		const uint256T4B6Epf = await RainbowRAKMzVPvba.stake.call(uintZs7mdCm, {from: accounts[4]});
//		const addressarraykEC4fFK = await RainbowRAKMzVPvba.getCommunity.call({from: accounts[1]});

		assert.equal(uint256H4b855A, BigInt("0"))
		await expect(RainbowRAKMzVPvba.stake.call(uintZs7mdCm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKzDBZWQd = await RainbowRAK.new({from: accounts[3]});
		const addressne663O3 = accounts[5]
		const addressapKmQEI = accounts[2]
		const addressarrayai48qFN = await RainbowRAKzDBZWQd.getCommunity.call({from: accounts[4]});
		const addressarrayRwxTE9r = await RainbowRAKzDBZWQd.getCommunity.call({from: accounts[2]});
//		const addressYESydFL = await RainbowRAKzDBZWQd.transferOwnership.call(addressne663O3, {from: "0x0000000000000000000000000000000000000001"});
//		const addresssN2UMWm = await RainbowRAKzDBZWQd.updateReward.call(addressapKmQEI, {from: accounts[4]});

		assert.equal(addressarrayRwxTE9r, )
		assert.equal(addressarrayai48qFN, )
		await expect(RainbowRAKzDBZWQd.transferOwnership.call(addressne663O3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKkaqirYG = await RainbowRAK.new({from: accounts[2]});
		const uintrL10Ist = BigInt("614")
		const addressR5fkHA8 = accounts[4]
		const addressLWWOEID = accounts[2]
		const uintBLlmVqq = BigInt("1594")
//		const uint256KbjyKpv = await RainbowRAKkaqirYG.unstake.call(uintrL10Ist, {from: accounts[0]});
//		const uint256JX0sF2 = await RainbowRAKkaqirYG.earned.call(addressR5fkHA8, {from: accounts[0]});
//		const addresspTJJkk5 = await RainbowRAKkaqirYG.updateReward.call(addressLWWOEID, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256vZei2ft = await RainbowRAKkaqirYG.unstake.call(uintBLlmVqq, {from: accounts[2]});

		await expect(RainbowRAKkaqirYG.unstake.call(uintrL10Ist, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKDokRZE7 = await RainbowRAK.new({from: accounts[0]});
		const addresssSvsl9z = "0x0000000000000000000000000000000000000001"
		const addressoqF3TOn = await RainbowRAKDokRZE7.owner.call({from: accounts[4]});
		const uint256ZRKyKCE = await RainbowRAKDokRZE7.getCurrentRewardReserve.call({from: accounts[2]});
		const uint256LFXsUL = await RainbowRAKDokRZE7.earned.call(addresssSvsl9z, {from: accounts[3]});

		assert.equal(addressoqF3TOn, 0x3CB222F2DDc88bF62d0905A322eAa1974D4d616B)
		assert.equal(uint256LFXsUL, BigInt("0"))
		assert.equal(uint256ZRKyKCE, BigInt("0"))
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKfzIdZmh = await RainbowRAK.new({from: accounts[3]});
		const addresskhxY1r8 = accounts[4]
//		const addressONmC1aZ = await RainbowRAKfzIdZmh.updateReward.call(addresskhxY1r8, {from: "0x0000000000000000000000000000000000000001"});
//		await RainbowRAKfzIdZmh.claimRewards.call({from: accounts[3]});
//		await RainbowRAKfzIdZmh.onlyOwner.call({from: accounts[3]});
//		await RainbowRAKfzIdZmh.claimRewards.call({from: accounts[2]});
//		await RainbowRAKfzIdZmh.exit.call({from: accounts[2]});

		await expect(RainbowRAKfzIdZmh.updateReward.call(addresskhxY1r8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKke4KbiR = await RainbowRAK.new({from: accounts[0]});
//		await RainbowRAKke4KbiR.claimRewards.call({from: accounts[1]});
//		const addressarrayO7oy01i = await RainbowRAKke4KbiR.getCommunity.call({from: accounts[5]});

		await expect(RainbowRAKke4KbiR.claimRewards.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKke4KbiR = await RainbowRAK.new({from: accounts[0]});
//		await RainbowRAKke4KbiR.renounceOwnership.call({from: accounts[0]});
//		await RainbowRAKke4KbiR.onlyOwner.call({from: accounts[3]});
//		const addressarrayO7oy01i = await RainbowRAKke4KbiR.getCommunity.call({from: accounts[5]});

		await expect(RainbowRAKke4KbiR.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKFcJCHJG = await RainbowRAK.new({from: "0x0000000000000000000000000000000000000001"});
		const uintShM5mu4 = BigInt("606")
		const uintjslQBXC = BigInt("658")
		await RainbowRAKFcJCHJG.onlyOwner.call({from: accounts[4]});
		const uint256SF4aHde = await RainbowRAKFcJCHJG.stake.call(uintShM5mu4, {from: accounts[2]});
		const uint256Hc7nal7 = await RainbowRAKFcJCHJG.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256qEfrFQd = await RainbowRAKFcJCHJG.unstake.call(uintjslQBXC, {from: accounts[4]});
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKTAgPQo9 = await RainbowRAK.new({from: accounts[2]});
		const addressFt4MnkW = accounts[5]
		const uintWEr5ZWa = BigInt("480")
		const addresszzGI6ck = await RainbowRAKTAgPQo9.transferOwnership.call(addressFt4MnkW, {from: accounts[2]});
//		const uint256Bj8z3hY = await RainbowRAKTAgPQo9.stake.call(uintWEr5ZWa, {from: accounts[4]});
//		const addressarrayJdCJ2A = await RainbowRAKTAgPQo9.getCommunity.call({from: accounts[2]});

		await expect(RainbowRAKTAgPQo9.stake.call(uintWEr5ZWa, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKke4KbiR = await RainbowRAK.new({from: accounts[0]});
		const uintmK31av = BigInt("469")
//		const uint256g2ELih1 = await RainbowRAKke4KbiR.notifyRewardAmount.call(uintmK31av, {from: accounts[0]});
//		const addressarrayy93J7Ht = await RainbowRAKke4KbiR.getCommunity.call({from: accounts[4]});
//		const addressarrayO7oy01i = await RainbowRAKke4KbiR.getCommunity.call({from: accounts[5]});
//		const addressarrayVbSzLV = await RainbowRAKke4KbiR.getCommunity.call({from: accounts[3]});

		await expect(RainbowRAKke4KbiR.notifyRewardAmount.call(uintmK31av, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})