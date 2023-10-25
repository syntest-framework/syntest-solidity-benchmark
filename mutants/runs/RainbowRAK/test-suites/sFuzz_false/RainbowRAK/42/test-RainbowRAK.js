const RainbowRAK = artifacts.require("RainbowRAK");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RainbowRAK', (accounts) => {
	it('test for RainbowRAK', async () => {
		const RainbowRAKRqbpRhX = await RainbowRAK.new({from: accounts[5]});
		const addressU5I32eZ = accounts[5]
		const uint256nkGtY6j = await RainbowRAKRqbpRhX.getCurrentRewardReserve.call({from: accounts[2]});
		const uint256hczMJV5 = await RainbowRAKRqbpRhX.rewardPerToken.call({from: accounts[0]});
		const addressWij8p0 = await RainbowRAKRqbpRhX.transferOwnership.call(addressU5I32eZ, {from: accounts[2]});
		const addressarrayCygOlOF = await RainbowRAKRqbpRhX.getCommunity.call({from: accounts[4]});
		const uint256JbuyPy = await RainbowRAKRqbpRhX.rewardPerToken.call({from: accounts[0]});
		await RainbowRAKRqbpRhX.renounceOwnership.call({from: accounts[0]});

		assert.equal(uint256hczMJV5, BigInt("0"))
		assert.equal(uint256nkGtY6j, BigInt("0"))
		await expect(RainbowRAKRqbpRhX.transferOwnership.call(addressU5I32eZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKXMvBqQK = await RainbowRAK.new({from: accounts[5]});
		const uintYqBwIGW = BigInt("298")
		const uint256uoFy4sx = await RainbowRAKXMvBqQK.lastTimeRewardApplicable.call({from: accounts[3]});
		const bool4ozh9D = await RainbowRAKXMvBqQK.isOwner.call({from: accounts[4]});
		const uint256APqxiN = await RainbowRAKXMvBqQK.unstake.call(uintYqBwIGW, {from: accounts[0]});

		assert.equal(bool4ozh9D, false)
		assert.equal(uint256uoFy4sx, BigInt("0"))
		await expect(RainbowRAKXMvBqQK.unstake.call(uintYqBwIGW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKOknr5Xd = await RainbowRAK.new({from: accounts[5]});
		const addressH9qCoEd = accounts[0]
		const uintS0dfwQ6 = BigInt("900")
		const addressBJKLmFN = await RainbowRAKOknr5Xd.updateReward.call(addressH9qCoEd, {from: accounts[4]});
		await RainbowRAKOknr5Xd.renounceOwnership.call({from: accounts[4]});
		const boolCPurA8D = await RainbowRAKOknr5Xd.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolBkuJe8R = await RainbowRAKOknr5Xd.isOwner.call({from: accounts[1]});
		const uint256oud3w3N = await RainbowRAKOknr5Xd.unstake.call(uintS0dfwQ6, {from: "0x0000000000000000000000000000000000000001"});

		await expect(RainbowRAKOknr5Xd.updateReward.call(addressH9qCoEd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKCbVp9lS = await RainbowRAK.new({from: "0x0000000000000000000000000000000000000001"});
		const addresscMFpPhJ = accounts[0]
		const addressRVrmkw1 = accounts[4]
		const addressjl0f5Y = await RainbowRAKCbVp9lS.updateReward.call(addresscMFpPhJ, {from: "0x0000000000000000000000000000000000000001"});
		const addressSH6q6ix = await RainbowRAKCbVp9lS.transferOwnership.call(addressRVrmkw1, {from: accounts[3]});
		await RainbowRAKCbVp9lS.onlyOwner.call({from: accounts[1]});
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKqENDXez = await RainbowRAK.new({from: accounts[3]});
		const addressy05NsZA = accounts[2]
		const addressR01oFNK = await RainbowRAKqENDXez.owner.call({from: accounts[0]});
		await RainbowRAKqENDXez.onlyOwner.call({from: accounts[0]});
		const addressEIDvCXC = await RainbowRAKqENDXez.transferOwnership.call(addressy05NsZA, {from: accounts[1]});

		assert.equal(addressR01oFNK, 0x71eCa704aaA0E56cfE4BF059dAe1972feB532141)
		await expect(RainbowRAKqENDXez.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKXMvBqQK = await RainbowRAK.new({from: accounts[5]});
		const uintcvHQDYo = BigInt("332")
		const uint256q5GAKFe = await RainbowRAKXMvBqQK.getCurrentRewardReserve.call({from: accounts[0]});
		const addressarrayEh4eYjN = await RainbowRAKXMvBqQK.getCommunity.call({from: accounts[0]});
		const boolHzthZsF = await RainbowRAKXMvBqQK.isOwner.call({from: accounts[0]});
		const uint256uoFy4sx = await RainbowRAKXMvBqQK.lastTimeRewardApplicable.call({from: accounts[3]});
		const bool4ozh9D = await RainbowRAKXMvBqQK.isOwner.call({from: accounts[4]});
		const uint256APqxiN = await RainbowRAKXMvBqQK.unstake.call(uintcvHQDYo, {from: accounts[0]});

		assert.equal(addressarrayEh4eYjN, )
		assert.equal(bool4ozh9D, false)
		assert.equal(boolHzthZsF, false)
		assert.equal(uint256q5GAKFe, BigInt("0"))
		assert.equal(uint256uoFy4sx, BigInt("0"))
		await expect(RainbowRAKXMvBqQK.unstake.call(uintcvHQDYo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKXMvBqQK = await RainbowRAK.new({from: accounts[5]});
		const uintQZo96Kw = BigInt("1608")
		const uint0zJAYD = BigInt("298")
		const uint256uoFy4sx = await RainbowRAKXMvBqQK.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256RNymAS = await RainbowRAKXMvBqQK.stake.call(uintQZo96Kw, {from: "0x0000000000000000000000000000000000000001"});
		const uint256APqxiN = await RainbowRAKXMvBqQK.unstake.call(uint0zJAYD, {from: accounts[0]});
		await RainbowRAKXMvBqQK.renounceOwnership.call({from: accounts[1]});
		await RainbowRAKXMvBqQK.exit.call({from: accounts[3]});

		assert.equal(uint256uoFy4sx, BigInt("0"))
		await expect(RainbowRAKXMvBqQK.stake.call(uintQZo96Kw, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKPdzgiGe = await RainbowRAK.new({from: accounts[0]});
		await RainbowRAKPdzgiGe.renounceOwnership.call({from: accounts[0]});
		const uint256BDAqC0g = await RainbowRAKPdzgiGe.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(RainbowRAKPdzgiGe.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKXMvBqQK = await RainbowRAK.new({from: accounts[5]});
		const uintIeoDexc = BigInt("265")
		await RainbowRAKXMvBqQK.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256APqxiN = await RainbowRAKXMvBqQK.unstake.call(uintIeoDexc, {from: accounts[0]});

		await expect(RainbowRAKXMvBqQK.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKXMvBqQK = await RainbowRAK.new({from: accounts[5]});
		const uintkrL5R2d = BigInt("65")
		const uint256UMAdA3Q = await RainbowRAKXMvBqQK.lastTimeRewardApplicable.call({from: accounts[2]});
		await RainbowRAKXMvBqQK.claimRewards.call({from: accounts[4]});
		const uint256APqxiN = await RainbowRAKXMvBqQK.unstake.call(uintkrL5R2d, {from: accounts[0]});

		assert.equal(uint256UMAdA3Q, BigInt("0"))
		await expect(RainbowRAKXMvBqQK.claimRewards.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKXMvBqQK = await RainbowRAK.new({from: accounts[5]});
		const address2qnGMV = "0x0000000000000000000000000000000000000001"
		const uintNAfM3g6 = BigInt("286")
		const addresshAuC0MP = await RainbowRAKXMvBqQK.transferOwnership.call(address2qnGMV, {from: accounts[5]});
		await RainbowRAKXMvBqQK.onlyOwner.call({from: accounts[3]});
		const boolslAtAP3 = await RainbowRAKXMvBqQK.isOwner.call({from: accounts[2]});
		const uint256APqxiN = await RainbowRAKXMvBqQK.unstake.call(uintNAfM3g6, {from: accounts[0]});

		await expect(RainbowRAKXMvBqQK.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKXMvBqQK = await RainbowRAK.new({from: accounts[5]});
		const uinteZ8RLPc = BigInt("1273")
		const uint256N46p9v7 = await RainbowRAKXMvBqQK.getCurrentRewardReserve.call({from: accounts[4]});
		const boolHEy5YWk = await RainbowRAKXMvBqQK.isOwner.call({from: accounts[4]});
		const uint256uoFy4sx = await RainbowRAKXMvBqQK.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256QIuWEU = await RainbowRAKXMvBqQK.notifyRewardAmount.call(uinteZ8RLPc, {from: accounts[5]});

		assert.equal(boolHEy5YWk, false)
		assert.equal(uint256N46p9v7, BigInt("0"))
		assert.equal(uint256uoFy4sx, BigInt("0"))
		await expect(RainbowRAKXMvBqQK.notifyRewardAmount.call(uinteZ8RLPc, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})