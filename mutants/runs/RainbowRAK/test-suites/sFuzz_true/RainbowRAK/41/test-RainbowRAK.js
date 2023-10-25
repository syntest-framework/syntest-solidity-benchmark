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

		assert.equal(addressR01oFNK, 0x4a4e4367F52101231f54824cfEC80B4287E91a67)
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
		const RainbowRAKXMvBqQK = await RainbowRAK.new({from: accounts[5]});
		const uint3fYziA = BigInt("237")
		await RainbowRAKXMvBqQK.exit.call({from: accounts[0]});
		const uint256APqxiN = await RainbowRAKXMvBqQK.unstake.call(uint3fYziA, {from: accounts[0]});
		await RainbowRAKXMvBqQK.exit.call({from: accounts[0]});

		await expect(RainbowRAKXMvBqQK.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKA4rXvBB = await RainbowRAK.new({from: accounts[1]});
		const uint256SSKTgv8 = await RainbowRAKA4rXvBB.getCurrentRewardReserve.call({from: accounts[4]});
		const uint256LwKsob1 = await RainbowRAKA4rXvBB.rewardPerToken.call({from: accounts[3]});
		await RainbowRAKA4rXvBB.claimRewards.call({from: accounts[2]});

		assert.equal(uint256LwKsob1, BigInt("0"))
		assert.equal(uint256SSKTgv8, BigInt("0"))
		await expect(RainbowRAKA4rXvBB.claimRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKA4rXvBB = await RainbowRAK.new({from: accounts[1]});
		await RainbowRAKA4rXvBB.renounceOwnership.call({from: accounts[1]});
		await RainbowRAKA4rXvBB.claimRewards.call({from: accounts[2]});
		const uint256Qx9X662 = await RainbowRAKA4rXvBB.rewardPerToken.call({from: accounts[4]});

		await expect(RainbowRAKA4rXvBB.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKvJY7KcI = await RainbowRAK.new({from: accounts[3]});
		const uintq20B6oZ = BigInt("159")
		const uintAzDXZFv = BigInt("129")
		const uint256OCCcdNx = await RainbowRAKvJY7KcI.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256u0fPK1Q = await RainbowRAKvJY7KcI.notifyRewardAmount.call(uintq20B6oZ, {from: accounts[3]});
		const uint256ATTYxRu = await RainbowRAKvJY7KcI.notifyRewardAmount.call(uintAzDXZFv, {from: accounts[3]});
		const uint256niO3SZ3 = await RainbowRAKvJY7KcI.rewardPerToken.call({from: accounts[4]});

		assert.equal(uint256OCCcdNx, BigInt("0"))
		await expect(RainbowRAKvJY7KcI.notifyRewardAmount.call(uintq20B6oZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKXMvBqQK = await RainbowRAK.new({from: accounts[5]});
		const addressMmIYBTz = accounts[5]
		const addressxTq9hj = accounts[4]
		const addressfRv6xz = await RainbowRAKXMvBqQK.transferOwnership.call(addressMmIYBTz, {from: accounts[5]});
		const uint256uoFy4sx = await RainbowRAKXMvBqQK.lastTimeRewardApplicable.call({from: accounts[3]});
		const addressCApqMnm = await RainbowRAKXMvBqQK.updateReward.call(addressxTq9hj, {from: accounts[3]});

		assert.equal(uint256uoFy4sx, BigInt("0"))
		await expect(RainbowRAKXMvBqQK.updateReward.call(addressxTq9hj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})