const RainbowRAK = artifacts.require("RainbowRAK");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RainbowRAK', (accounts) => {
	it('test for RainbowRAK', async () => {
		const RainbowRAKlsFkiuM = await RainbowRAK.new({from: accounts[2]});
		const addressIF76Ri3 = accounts[1]
		const addressW0EbAuA = accounts[2]
		const addresstoy7Qjo = accounts[1]
		const addressBCQNGn6 = await RainbowRAKlsFkiuM.transferOwnership.call(addressIF76Ri3, {from: accounts[2]});
//		const addressuBd9sC = await RainbowRAKlsFkiuM.updateReward.call(addressW0EbAuA, {from: accounts[2]});
//		const uint256q6uxJcy = await RainbowRAKlsFkiuM.earned.call(addresstoy7Qjo, {from: accounts[3]});

		await expect(RainbowRAKlsFkiuM.updateReward.call(addressW0EbAuA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKgTrOfTJ = await RainbowRAK.new({from: accounts[4]});
		const uinto9ihn7E = BigInt("1924")
//		await RainbowRAKgTrOfTJ.claimRewards.call({from: accounts[0]});
//		await RainbowRAKgTrOfTJ.claimRewards.call({from: accounts[1]});
//		const uint256nPny2rO = await RainbowRAKgTrOfTJ.unstake.call(uinto9ihn7E, {from: accounts[5]});

		await expect(RainbowRAKgTrOfTJ.claimRewards.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKOxvFZRM = await RainbowRAK.new({from: accounts[3]});
		const addressJYuJQr8 = accounts[0]
		const uintVCphil2 = BigInt("266")
		const uint256HPhUiwv = await RainbowRAKOxvFZRM.earned.call(addressJYuJQr8, {from: accounts[5]});
//		const uint256AwYGgX1 = await RainbowRAKOxvFZRM.stake.call(uintVCphil2, {from: accounts[5]});

		assert.equal(uint256HPhUiwv, BigInt("0"))
		await expect(RainbowRAKOxvFZRM.stake.call(uintVCphil2, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKKiR8wR = await RainbowRAK.new({from: accounts[1]});
		const addressihaHJUM = accounts[2]
//		const addressqkCjllX = await RainbowRAKKiR8wR.transferOwnership.call(addressihaHJUM, {from: "0x0000000000000000000000000000000000000001"});
//		const addressWN5TkPY = await RainbowRAKKiR8wR.owner.call({from: accounts[4]});
//		const boolnxEPX4f = await RainbowRAKKiR8wR.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256qBojPPp = await RainbowRAKKiR8wR.getCurrentRewardReserve.call({from: accounts[2]});
//		const uint2569xxjDW = await RainbowRAKKiR8wR.rewardPerToken.call({from: accounts[3]});
//		await RainbowRAKKiR8wR.renounceOwnership.call({from: accounts[2]});

		await expect(RainbowRAKKiR8wR.transferOwnership.call(addressihaHJUM, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKlXqUHex = await RainbowRAK.new({from: accounts[1]});
		const addressFDLmR5E = accounts[3]
		const uint256cMRQcO = await RainbowRAKlXqUHex.rewardPerToken.call({from: accounts[2]});
		const addressuwlRHaU = await RainbowRAKlXqUHex.owner.call({from: accounts[3]});
		const uint256CvOhQaz = await RainbowRAKlXqUHex.earned.call(addressFDLmR5E, {from: accounts[0]});
//		await RainbowRAKlXqUHex.renounceOwnership.call({from: accounts[2]});
//		const addressarraylqLMJ96 = await RainbowRAKlXqUHex.getCommunity.call({from: accounts[1]});

		assert.equal(addressuwlRHaU, 0x6d61f4e1e4b2D6526Cc531bBA9Cbb654D84946AF)
		assert.equal(uint256CvOhQaz, BigInt("0"))
		assert.equal(uint256cMRQcO, BigInt("0"))
		await expect(RainbowRAKlXqUHex.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKxs4parW = await RainbowRAK.new({from: accounts[4]});
//		await RainbowRAKxs4parW.exit.call({from: accounts[0]});
//		await RainbowRAKxs4parW.onlyOwner.call({from: accounts[3]});
//		const uint256PTMySRZ = await RainbowRAKxs4parW.getCurrentRewardReserve.call({from: accounts[0]});
//		await RainbowRAKxs4parW.exit.call({from: accounts[2]});

		await expect(RainbowRAKxs4parW.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAK2K3aDw = await RainbowRAK.new({from: "0x0000000000000000000000000000000000000001"});
		await RainbowRAK2K3aDw.onlyOwner.call({from: accounts[0]});
		await RainbowRAK2K3aDw.onlyOwner.call({from: accounts[2]});
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKlXqUHex = await RainbowRAK.new({from: accounts[1]});
		const uintzp5ox8Y = BigInt("1")
		const addresso3fQXaP = accounts[4]
		const uint256cMRQcO = await RainbowRAKlXqUHex.rewardPerToken.call({from: accounts[2]});
		const addressuwlRHaU = await RainbowRAKlXqUHex.owner.call({from: accounts[3]});
		const boolSbX5GSP = await RainbowRAKlXqUHex.isOwner.call({from: accounts[0]});
//		const uint256BwKAmqH = await RainbowRAKlXqUHex.unstake.call(uintzp5ox8Y, {from: accounts[2]});
//		const uint256CvOhQaz = await RainbowRAKlXqUHex.earned.call(addresso3fQXaP, {from: accounts[0]});
//		await RainbowRAKlXqUHex.renounceOwnership.call({from: accounts[2]});
//		const uint256KfTdaT7 = await RainbowRAKlXqUHex.lastTimeRewardApplicable.call({from: accounts[4]});
//		const addressarraylqLMJ96 = await RainbowRAKlXqUHex.getCommunity.call({from: accounts[1]});

		assert.equal(addressuwlRHaU, 0x6d61f4e1e4b2D6526Cc531bBA9Cbb654D84946AF)
		assert.equal(boolSbX5GSP, false)
		assert.equal(uint256cMRQcO, BigInt("0"))
		await expect(RainbowRAKlXqUHex.unstake.call(uintzp5ox8Y, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKlXqUHex = await RainbowRAK.new({from: accounts[1]});
		const addressVeBuX5V = accounts[1]
		const uintfU4tTx1 = BigInt("639")
		const uintCGBCfMR = BigInt("1")
		const addressSrj3UF = accounts[4]
		const uint256cMRQcO = await RainbowRAKlXqUHex.rewardPerToken.call({from: accounts[2]});
		const addressuwlRHaU = await RainbowRAKlXqUHex.owner.call({from: accounts[3]});
		const boolSbX5GSP = await RainbowRAKlXqUHex.isOwner.call({from: accounts[0]});
		const uint256tIG2ad = await RainbowRAKlXqUHex.getCurrentRewardReserve.call({from: accounts[0]});
//		const addressN7wpOzh = await RainbowRAKlXqUHex.updateReward.call(addressVeBuX5V, {from: accounts[1]});
//		const uint256wb7i2LA = await RainbowRAKlXqUHex.stake.call(uintfU4tTx1, {from: accounts[1]});
//		const uint256BwKAmqH = await RainbowRAKlXqUHex.unstake.call(uintCGBCfMR, {from: accounts[2]});
//		const uint256CvOhQaz = await RainbowRAKlXqUHex.earned.call(addressSrj3UF, {from: accounts[0]});
//		await RainbowRAKlXqUHex.renounceOwnership.call({from: accounts[2]});
//		const uint256KfTdaT7 = await RainbowRAKlXqUHex.lastTimeRewardApplicable.call({from: accounts[4]});
//		const addressarraylqLMJ96 = await RainbowRAKlXqUHex.getCommunity.call({from: accounts[1]});

		assert.equal(addressuwlRHaU, 0x6d61f4e1e4b2D6526Cc531bBA9Cbb654D84946AF)
		assert.equal(boolSbX5GSP, false)
		assert.equal(uint256cMRQcO, BigInt("0"))
		assert.equal(uint256tIG2ad, BigInt("0"))
		await expect(RainbowRAKlXqUHex.updateReward.call(addressVeBuX5V, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKlXqUHex = await RainbowRAK.new({from: accounts[1]});
		const uintYlvKmnm = BigInt("1")
		const addresssrW7oZb = accounts[4]
		const uint256cMRQcO = await RainbowRAKlXqUHex.rewardPerToken.call({from: accounts[2]});
		const addressuwlRHaU = await RainbowRAKlXqUHex.owner.call({from: accounts[3]});
		const addressarrayoQof0Ie = await RainbowRAKlXqUHex.getCommunity.call({from: "0x0000000000000000000000000000000000000001"});
		const boolSbX5GSP = await RainbowRAKlXqUHex.isOwner.call({from: accounts[0]});
//		const uint256BwKAmqH = await RainbowRAKlXqUHex.unstake.call(uintYlvKmnm, {from: accounts[2]});
//		const uint256CvOhQaz = await RainbowRAKlXqUHex.earned.call(addresssrW7oZb, {from: accounts[0]});
//		await RainbowRAKlXqUHex.renounceOwnership.call({from: accounts[2]});
//		const addressarrayK4tSWxB = await RainbowRAKlXqUHex.getCommunity.call({from: accounts[5]});
//		const uint256KfTdaT7 = await RainbowRAKlXqUHex.lastTimeRewardApplicable.call({from: accounts[4]});
//		await RainbowRAKlXqUHex.onlyOwner.call({from: accounts[4]});
//		const addressarraylqLMJ96 = await RainbowRAKlXqUHex.getCommunity.call({from: accounts[1]});

		assert.equal(addressarrayoQof0Ie, )
		assert.equal(addressuwlRHaU, 0x6d61f4e1e4b2D6526Cc531bBA9Cbb654D84946AF)
		assert.equal(boolSbX5GSP, false)
		assert.equal(uint256cMRQcO, BigInt("0"))
		await expect(RainbowRAKlXqUHex.unstake.call(uintYlvKmnm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKlXqUHex = await RainbowRAK.new({from: accounts[1]});
		const addressjMZScDC = accounts[5]
		const uint256cMRQcO = await RainbowRAKlXqUHex.rewardPerToken.call({from: accounts[2]});
		const addressuwlRHaU = await RainbowRAKlXqUHex.owner.call({from: accounts[3]});
//		await RainbowRAKlXqUHex.renounceOwnership.call({from: accounts[1]});
//		const boolSbX5GSP = await RainbowRAKlXqUHex.isOwner.call({from: accounts[0]});
//		const uint256CvOhQaz = await RainbowRAKlXqUHex.earned.call(addressjMZScDC, {from: accounts[0]});
//		const uint256KfTdaT7 = await RainbowRAKlXqUHex.lastTimeRewardApplicable.call({from: accounts[4]});
//		const uint256RGD75v8 = await RainbowRAKlXqUHex.getCurrentRewardReserve.call({from: accounts[1]});
//		const addressarraylqLMJ96 = await RainbowRAKlXqUHex.getCommunity.call({from: accounts[1]});

		assert.equal(addressuwlRHaU, 0x6d61f4e1e4b2D6526Cc531bBA9Cbb654D84946AF)
		assert.equal(uint256cMRQcO, BigInt("0"))
		await expect(RainbowRAKlXqUHex.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKOxvFZRM = await RainbowRAK.new({from: accounts[3]});
		const uintc4USXSf = BigInt("1103")
		const uintEJEI01l = BigInt("66")
//		const uint256o0oPWT1 = await RainbowRAKOxvFZRM.notifyRewardAmount.call(uintc4USXSf, {from: accounts[3]});
//		const uint256ncuVKIF = await RainbowRAKOxvFZRM.unstake.call(uintEJEI01l, {from: "0x0000000000000000000000000000000000000001"});
//		await RainbowRAKOxvFZRM.exit.call({from: accounts[1]});

		await expect(RainbowRAKOxvFZRM.notifyRewardAmount.call(uintc4USXSf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})