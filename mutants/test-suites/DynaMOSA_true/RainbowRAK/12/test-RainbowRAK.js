const RainbowRAK = artifacts.require("RainbowRAK");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RainbowRAK', (accounts) => {
	it('test for RainbowRAK', async () => {
		const RainbowRAKwxhtU9 = await RainbowRAK.new({from: accounts[4]});
		const uintwdvssKR = BigInt("1135")
		const uint256aKaAGNX = await RainbowRAKwxhtU9.getCurrentRewardReserve.call({from: accounts[0]});
		const uint256V0Z0cl5 = await RainbowRAKwxhtU9.rewardPerToken.call({from: accounts[3]});
		const addressarrayCCWRPqh = await RainbowRAKwxhtU9.getCommunity.call({from: accounts[2]});
//		const uint256JeqnNHx = await RainbowRAKwxhtU9.unstake.call(uintwdvssKR, {from: accounts[2]});

		assert.equal(addressarrayCCWRPqh, )
		assert.equal(uint256V0Z0cl5, BigInt("0"))
		assert.equal(uint256aKaAGNX, BigInt("0"))
		await expect(RainbowRAKwxhtU9.unstake.call(uintwdvssKR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKwZsdmEd = await RainbowRAK.new({from: accounts[2]});
		const uintRFoqsdQ = BigInt("782")
		const addressAUNfgc9 = accounts[0]
//		const uint256LuQ0SL9 = await RainbowRAKwZsdmEd.stake.call(uintRFoqsdQ, {from: accounts[0]});
//		const addressxfgQs0Q = await RainbowRAKwZsdmEd.transferOwnership.call(addressAUNfgc9, {from: accounts[0]});
//		const boolowjqW8t = await RainbowRAKwZsdmEd.isOwner.call({from: accounts[3]});

		await expect(RainbowRAKwZsdmEd.stake.call(uintRFoqsdQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKLX05wDO = await RainbowRAK.new({from: accounts[4]});
		const addresss9Qmub = accounts[4]
		const uint256AR0wSLr = await RainbowRAKLX05wDO.rewardPerToken.call({from: accounts[4]});
//		await RainbowRAKLX05wDO.renounceOwnership.call({from: accounts[4]});
//		const addressZzHm4Sx = await RainbowRAKLX05wDO.transferOwnership.call(addresss9Qmub, {from: accounts[1]});

		assert.equal(uint256AR0wSLr, BigInt("0"))
		await expect(RainbowRAKLX05wDO.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKxQDlv9 = await RainbowRAK.new({from: accounts[3]});
		const addressmofV9He = accounts[0]
		const uint256y7jeBzd = await RainbowRAKxQDlv9.getCurrentRewardReserve.call({from: accounts[4]});
		const boolfwn7zvO = await RainbowRAKxQDlv9.isOwner.call({from: accounts[3]});
//		await RainbowRAKxQDlv9.claimRewards.call({from: accounts[5]});
//		const booloHbWc8N = await RainbowRAKxQDlv9.isOwner.call({from: accounts[5]});
//		const address9pcDrn = await RainbowRAKxQDlv9.updateReward.call(addressmofV9He, {from: accounts[5]});

		assert.equal(boolfwn7zvO, true)
		assert.equal(uint256y7jeBzd, BigInt("0"))
		await expect(RainbowRAKxQDlv9.claimRewards.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKmnes2wU = await RainbowRAK.new({from: accounts[2]});
		const addresslW0rAZi = accounts[5]
		const addresswR1HMCP = accounts[2]
		const addresspr13gd = await RainbowRAKmnes2wU.transferOwnership.call(addresslW0rAZi, {from: accounts[2]});
//		await RainbowRAKmnes2wU.onlyOwner.call({from: accounts[0]});
//		const addressRiqtKAP = await RainbowRAKmnes2wU.transferOwnership.call(addresswR1HMCP, {from: accounts[0]});
//		await RainbowRAKmnes2wU.onlyOwner.call({from: accounts[2]});

		await expect(RainbowRAKmnes2wU.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKPEcOm4S = await RainbowRAK.new({from: accounts[0]});
		const uint5w9kLq = BigInt("295")
		const uintiIv5hFW = BigInt("1100")
//		const uint256ONZprpT = await RainbowRAKPEcOm4S.notifyRewardAmount.call(uint5w9kLq, {from: accounts[0]});
//		const uint256tQBNwUV = await RainbowRAKPEcOm4S.rewardPerToken.call({from: accounts[4]});
//		const addressarraySfob5dc = await RainbowRAKPEcOm4S.getCommunity.call({from: accounts[2]});
//		await RainbowRAKPEcOm4S.exit.call({from: accounts[0]});
//		const uint256cq9EUUl = await RainbowRAKPEcOm4S.unstake.call(uintiIv5hFW, {from: accounts[3]});

		await expect(RainbowRAKPEcOm4S.notifyRewardAmount.call(uint5w9kLq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKyEGLlMW = await RainbowRAK.new({from: "0x0000000000000000000000000000000000000001"});
		const uintV4qTctt = BigInt("1882")
		const addressf4oIL1e = accounts[2]
		const uint2567P22q5 = await RainbowRAKyEGLlMW.unstake.call(uintV4qTctt, {from: "0x0000000000000000000000000000000000000001"});
		const uint256NEQAmhH = await RainbowRAKyEGLlMW.lastTimeRewardApplicable.call({from: accounts[4]});
		const addressIuwlIMl = await RainbowRAKyEGLlMW.updateReward.call(addressf4oIL1e, {from: accounts[1]});
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKxQDlv9 = await RainbowRAK.new({from: accounts[3]});
		const addressr0ojGIP = accounts[0]
		const uint256y7jeBzd = await RainbowRAKxQDlv9.getCurrentRewardReserve.call({from: accounts[4]});
		const addressnHukSED = await RainbowRAKxQDlv9.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const boolfwn7zvO = await RainbowRAKxQDlv9.isOwner.call({from: accounts[3]});
//		await RainbowRAKxQDlv9.claimRewards.call({from: accounts[5]});
//		const booloHbWc8N = await RainbowRAKxQDlv9.isOwner.call({from: accounts[5]});
//		const address9pcDrn = await RainbowRAKxQDlv9.updateReward.call(addressr0ojGIP, {from: accounts[5]});

		assert.equal(addressnHukSED, 0x66CF4810c1268F10f5D18B2fA082F34e2932C5Be)
		assert.equal(boolfwn7zvO, true)
		assert.equal(uint256y7jeBzd, BigInt("0"))
		await expect(RainbowRAKxQDlv9.claimRewards.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKPEcOm4S = await RainbowRAK.new({from: accounts[0]});
		const uintUreYItk = BigInt("1100")
		const addressarraySfob5dc = await RainbowRAKPEcOm4S.getCommunity.call({from: accounts[2]});
//		await RainbowRAKPEcOm4S.exit.call({from: accounts[0]});
//		const uint256cq9EUUl = await RainbowRAKPEcOm4S.unstake.call(uintUreYItk, {from: accounts[3]});
//		const uint256Rcaud9 = await RainbowRAKPEcOm4S.getCurrentRewardReserve.call({from: accounts[5]});

		assert.equal(addressarraySfob5dc, )
		await expect(RainbowRAKPEcOm4S.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})