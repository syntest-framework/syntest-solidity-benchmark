const RainbowRAK = artifacts.require("RainbowRAK");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RainbowRAK', (accounts) => {
	it('test for RainbowRAK', async () => {
		const RainbowRAKR3hplO = await RainbowRAK.new({from: accounts[4]});
		const addresspS2Ecgy = accounts[4]
		const addressB62gS5s = accounts[3]
		const uint256k3CFkU = await RainbowRAKR3hplO.earned.call(addresspS2Ecgy, {from: accounts[4]});
		const addressarrayhLggoO8 = await RainbowRAKR3hplO.getCommunity.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Ud9yWu = await RainbowRAKR3hplO.rewardPerToken.call({from: accounts[0]});
		const addressCgaIja7 = await RainbowRAKR3hplO.transferOwnership.call(addressB62gS5s, {from: accounts[4]});
		const addressarrayTPZ766V = await RainbowRAKR3hplO.getCommunity.call({from: accounts[2]});

		assert.equal(addressarrayTPZ766V, )
		assert.equal(addressarrayhLggoO8, )
		assert.equal(uint256Ud9yWu, BigInt("0"))
		assert.equal(uint256k3CFkU, BigInt("0"))
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKzn4Y1he = await RainbowRAK.new({from: accounts[3]});
		const addressses80c = accounts[3]
		await RainbowRAKzn4Y1he.renounceOwnership.call({from: accounts[0]});
		const addresssgJkjLQ = await RainbowRAKzn4Y1he.transferOwnership.call(addressses80c, {from: "0x0000000000000000000000000000000000000001"});
		await RainbowRAKzn4Y1he.exit.call({from: accounts[0]});
		await RainbowRAKzn4Y1he.exit.call({from: accounts[2]});
		await RainbowRAKzn4Y1he.exit.call({from: accounts[0]});
		const uint256vCuQSuv = await RainbowRAKzn4Y1he.lastTimeRewardApplicable.call({from: accounts[3]});

		await expect(RainbowRAKzn4Y1he.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKDZUX6N0 = await RainbowRAK.new({from: accounts[5]});
		const uintncgPRlX = BigInt("593")
		const uinthE5I474 = BigInt("692")
		const uint256nF5HIp = await RainbowRAKDZUX6N0.unstake.call(uintncgPRlX, {from: accounts[1]});
		await RainbowRAKDZUX6N0.onlyOwner.call({from: accounts[0]});
		const addressfvoDMmD = await RainbowRAKDZUX6N0.owner.call({from: accounts[5]});
		await RainbowRAKDZUX6N0.renounceOwnership.call({from: accounts[0]});
		const uint256pHk4RFs = await RainbowRAKDZUX6N0.unstake.call(uinthE5I474, {from: accounts[0]});

		await expect(RainbowRAKDZUX6N0.unstake.call(uintncgPRlX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKojApvo5 = await RainbowRAK.new({from: accounts[4]});
		const uintACALMH6 = BigInt("106")
		const uint256DyRaQnO = await RainbowRAKojApvo5.stake.call(uintACALMH6, {from: "0x0000000000000000000000000000000000000001"});
		const boolXDvIOdq = await RainbowRAKojApvo5.isOwner.call({from: accounts[1]});
		const uint256irUVCa = await RainbowRAKojApvo5.getCurrentRewardReserve.call({from: accounts[4]});
		const booltq6D0Ip = await RainbowRAKojApvo5.isOwner.call({from: accounts[0]});
		const uint256v02BCo8 = await RainbowRAKojApvo5.rewardPerToken.call({from: accounts[3]});
		const uint256vMLfX8H = await RainbowRAKojApvo5.rewardPerToken.call({from: accounts[5]});

		await expect(RainbowRAKojApvo5.stake.call(uintACALMH6, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKKCUpQ5L = await RainbowRAK.new({from: accounts[1]});
		const addressC6WRacg = "0x0000000000000000000000000000000000000001"
		const uintGkPk2pn = BigInt("635")
		const uint256ivBWRo = await RainbowRAKKCUpQ5L.getCurrentRewardReserve.call({from: accounts[0]});
		const addressC1Bstd = await RainbowRAKKCUpQ5L.transferOwnership.call(addressC6WRacg, {from: accounts[2]});
		const uint256UNocAcS = await RainbowRAKKCUpQ5L.stake.call(uintGkPk2pn, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256ivBWRo, BigInt("0"))
		await expect(RainbowRAKKCUpQ5L.transferOwnership.call(addressC6WRacg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKLjoGxj1 = await RainbowRAK.new({from: accounts[3]});
		const addressnoaMAT = accounts[2]
		const addresstbaDN0g = await RainbowRAKLjoGxj1.updateReward.call(addressnoaMAT, {from: accounts[0]});
		const boolnRPHcZ6 = await RainbowRAKLjoGxj1.isOwner.call({from: accounts[1]});
		const uint256wm6sOGR = await RainbowRAKLjoGxj1.lastTimeRewardApplicable.call({from: accounts[2]});

		await expect(RainbowRAKLjoGxj1.updateReward.call(addressnoaMAT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKR3hplO = await RainbowRAK.new({from: accounts[4]});
		const addressfoicXR9 = accounts[4]
		const addressN3YGZFc = accounts[3]
		const uintgF4sW2 = BigInt("1120")
		const uint256k3CFkU = await RainbowRAKR3hplO.earned.call(addressfoicXR9, {from: accounts[4]});
		await RainbowRAKR3hplO.claimRewards.call({from: accounts[2]});
		const addressarrayhLggoO8 = await RainbowRAKR3hplO.getCommunity.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Ud9yWu = await RainbowRAKR3hplO.rewardPerToken.call({from: accounts[0]});
		const addressCgaIja7 = await RainbowRAKR3hplO.transferOwnership.call(addressN3YGZFc, {from: accounts[4]});
		const uint256KOipQNk = await RainbowRAKR3hplO.getCurrentRewardReserve.call({from: accounts[4]});
		const addressarraynS8Bot = await RainbowRAKR3hplO.getCommunity.call({from: accounts[5]});
		const addressarrayTPZ766V = await RainbowRAKR3hplO.getCommunity.call({from: accounts[2]});
		const uint256ZKGNOTR = await RainbowRAKR3hplO.stake.call(uintgF4sW2, {from: accounts[0]});

		assert.equal(uint256k3CFkU, BigInt("0"))
		await expect(RainbowRAKR3hplO.claimRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKDZUX6N0 = await RainbowRAK.new({from: accounts[5]});
		const uintaLYPSg2 = BigInt("595")
		const addressFKedAfK = accounts[3]
		const uintelJXqfM = BigInt("648")
		await RainbowRAKDZUX6N0.exit.call({from: accounts[1]});
		const uint256nF5HIp = await RainbowRAKDZUX6N0.unstake.call(uintaLYPSg2, {from: accounts[1]});
		await RainbowRAKDZUX6N0.renounceOwnership.call({from: accounts[0]});
		const addressrvW6bMW = await RainbowRAKDZUX6N0.updateReward.call(addressFKedAfK, {from: "0x0000000000000000000000000000000000000001"});
		const uint256pHk4RFs = await RainbowRAKDZUX6N0.unstake.call(uintelJXqfM, {from: accounts[0]});

		await expect(RainbowRAKDZUX6N0.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKDZUX6N0 = await RainbowRAK.new({from: accounts[5]});
		const uintjcM991P = BigInt("2026")
		const addressFsfL1cU = await RainbowRAKDZUX6N0.owner.call({from: accounts[2]});
		const uint256nF5HIp = await RainbowRAKDZUX6N0.unstake.call(uintjcM991P, {from: accounts[1]});

		assert.equal(addressFsfL1cU, 0x05DF782551967A18058c30fA02233E99038cA431)
		await expect(RainbowRAKDZUX6N0.unstake.call(uintjcM991P, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKMxrusQi = await RainbowRAK.new({from: "0x0000000000000000000000000000000000000001"});
		const addressMZRRUzG = accounts[2]
		const uintb47sh6j = BigInt("186")
		await RainbowRAKMxrusQi.exit.call({from: accounts[2]});
		const addressPMaxKZQ = await RainbowRAKMxrusQi.updateReward.call(addressMZRRUzG, {from: accounts[5]});
		const addressHuH9Ieg = await RainbowRAKMxrusQi.owner.call({from: accounts[4]});
		const uint256KvSeUq = await RainbowRAKMxrusQi.notifyRewardAmount.call(uintb47sh6j, {from: "0x0000000000000000000000000000000000000001"});
		await RainbowRAKMxrusQi.renounceOwnership.call({from: accounts[2]});
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKojApvo5 = await RainbowRAK.new({from: accounts[4]});
		const uintBn3uxFO = BigInt("1384")
		const uintq336eF = BigInt("67")
		const addressQwqXr5D = accounts[2]
		const uintKuCkz6m = BigInt("1543")
		const uint256FglNd6d = await RainbowRAKojApvo5.notifyRewardAmount.call(uintBn3uxFO, {from: accounts[4]});
		const uint256DyRaQnO = await RainbowRAKojApvo5.stake.call(uintq336eF, {from: "0x0000000000000000000000000000000000000001"});
		const addressey9N0BT = await RainbowRAKojApvo5.owner.call({from: accounts[5]});
		const boolXDvIOdq = await RainbowRAKojApvo5.isOwner.call({from: accounts[1]});
		await RainbowRAKojApvo5.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const addressarrayDGbGPnJ = await RainbowRAKojApvo5.getCommunity.call({from: accounts[1]});
		await RainbowRAKojApvo5.claimRewards.call({from: accounts[3]});
		const boolKkSENDm = await RainbowRAKojApvo5.isOwner.call({from: accounts[4]});
		const boolpw3fzf = await RainbowRAKojApvo5.isOwner.call({from: accounts[0]});
		const addresswerL6nV = await RainbowRAKojApvo5.transferOwnership.call(addressQwqXr5D, {from: accounts[4]});
		const uint256irUVCa = await RainbowRAKojApvo5.getCurrentRewardReserve.call({from: accounts[4]});
		const uint256DGuMMQ1 = await RainbowRAKojApvo5.unstake.call(uintKuCkz6m, {from: accounts[4]});
		const booltq6D0Ip = await RainbowRAKojApvo5.isOwner.call({from: accounts[0]});
		const uint256v02BCo8 = await RainbowRAKojApvo5.rewardPerToken.call({from: accounts[3]});
		await RainbowRAKojApvo5.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256vMLfX8H = await RainbowRAKojApvo5.rewardPerToken.call({from: accounts[5]});

		await expect(RainbowRAKojApvo5.notifyRewardAmount.call(uintBn3uxFO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKDZUX6N0 = await RainbowRAK.new({from: accounts[5]});
		const uintT0ICtOd = BigInt("595")
		await RainbowRAKDZUX6N0.renounceOwnership.call({from: accounts[5]});
		const uint256nF5HIp = await RainbowRAKDZUX6N0.unstake.call(uintT0ICtOd, {from: accounts[1]});

		await expect(RainbowRAKDZUX6N0.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})