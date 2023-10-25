const RainbowRAK = artifacts.require("RainbowRAK");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RainbowRAK', (accounts) => {
	it('test for RainbowRAK', async () => {
		const RainbowRAKBfe6k4m = await RainbowRAK.new({from: accounts[4]});
		const uintk0vo9PD = BigInt("189")
		const uintxFItTgh = BigInt("777")
		const addressJeYFdYH = accounts[4]
//		await RainbowRAKBfe6k4m.onlyOwner.call({from: accounts[5]});
//		const booluZacKeO = await RainbowRAKBfe6k4m.isOwner.call({from: accounts[2]});
//		const uint256zYiYyHY = await RainbowRAKBfe6k4m.unstake.call(uintk0vo9PD, {from: accounts[2]});
//		const uint256i97haPC = await RainbowRAKBfe6k4m.unstake.call(uintxFItTgh, {from: accounts[4]});
//		const addresszlDUpQz = await RainbowRAKBfe6k4m.transferOwnership.call(addressJeYFdYH, {from: accounts[0]});

		await expect(RainbowRAKBfe6k4m.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKNWQbXNK = await RainbowRAK.new({from: accounts[5]});
		const uintxCnGdW = BigInt("60")
		const addressKyIKWua = accounts[3]
		const addresszM3nxqi = accounts[2]
//		const uint256WTa0gJ = await RainbowRAKNWQbXNK.unstake.call(uintxCnGdW, {from: accounts[5]});
//		const addressarrayM0Kmj9 = await RainbowRAKNWQbXNK.getCommunity.call({from: accounts[4]});
//		const addresszmzHmFS = await RainbowRAKNWQbXNK.updateReward.call(addressKyIKWua, {from: "0x0000000000000000000000000000000000000001"});
//		await RainbowRAKNWQbXNK.renounceOwnership.call({from: accounts[3]});
//		const addressiWPpnPI = await RainbowRAKNWQbXNK.owner.call({from: accounts[0]});
//		const addressbn26fEf = await RainbowRAKNWQbXNK.updateReward.call(addresszM3nxqi, {from: accounts[4]});

		await expect(RainbowRAKNWQbXNK.unstake.call(uintxCnGdW, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKmzt0ceo = await RainbowRAK.new({from: accounts[3]});
		const addressWT3Wn9B = accounts[0]
		const addresslmu2zzz = accounts[1]
		const uint256yPKkjJD = await RainbowRAKmzt0ceo.rewardPerToken.call({from: accounts[2]});
//		const addresssRrPaVL = await RainbowRAKmzt0ceo.transferOwnership.call(addressWT3Wn9B, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256B3klYxP = await RainbowRAKmzt0ceo.earned.call(addresslmu2zzz, {from: accounts[4]});
//		await RainbowRAKmzt0ceo.renounceOwnership.call({from: accounts[3]});
//		const boolZEmcbjY = await RainbowRAKmzt0ceo.isOwner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256yPKkjJD, BigInt("0"))
		await expect(RainbowRAKmzt0ceo.transferOwnership.call(addressWT3Wn9B, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKO32Qvuu = await RainbowRAK.new({from: accounts[4]});
		const addressf9jkmCp = accounts[2]
		const uintk6qxBJW = BigInt("352")
		const addressarraycCNxg2Q = await RainbowRAKO32Qvuu.getCommunity.call({from: accounts[0]});
//		await RainbowRAKO32Qvuu.exit.call({from: accounts[1]});
//		const addressUXEp7w1 = await RainbowRAKO32Qvuu.updateReward.call(addressf9jkmCp, {from: accounts[3]});
//		await RainbowRAKO32Qvuu.exit.call({from: accounts[3]});
//		const uint256D9cXtM4 = await RainbowRAKO32Qvuu.notifyRewardAmount.call(uintk6qxBJW, {from: accounts[3]});

		assert.equal(addressarraycCNxg2Q, )
		await expect(RainbowRAKO32Qvuu.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKbOj9jPH = await RainbowRAK.new({from: "0x0000000000000000000000000000000000000001"});
		const uintfwDGZAw = BigInt("1975")
		const addressM1N6cY = accounts[0]
		const uint256eZsC9t = await RainbowRAKbOj9jPH.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256PXiy2kI = await RainbowRAKbOj9jPH.unstake.call(uintfwDGZAw, {from: accounts[4]});
		await RainbowRAKbOj9jPH.onlyOwner.call({from: accounts[4]});
		const boolWGYzwCq = await RainbowRAKbOj9jPH.isOwner.call({from: accounts[0]});
		await RainbowRAKbOj9jPH.renounceOwnership.call({from: accounts[0]});
		const addresssX8dw07 = await RainbowRAKbOj9jPH.transferOwnership.call(addressM1N6cY, {from: accounts[3]});
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKKXHwOij = await RainbowRAK.new({from: accounts[3]});
		const uintvr2H82 = BigInt("760")
		const addressvmAFb17 = accounts[2]
//		const uint256CBebggp = await RainbowRAKKXHwOij.stake.call(uintvr2H82, {from: accounts[4]});
//		const addressCsCeGks = await RainbowRAKKXHwOij.updateReward.call(addressvmAFb17, {from: accounts[4]});
//		await RainbowRAKKXHwOij.claimRewards.call({from: accounts[5]});
//		const uint256n8TrMO6 = await RainbowRAKKXHwOij.rewardPerToken.call({from: accounts[2]});
//		const addressfT7Qei3 = await RainbowRAKKXHwOij.owner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(RainbowRAKKXHwOij.stake.call(uintvr2H82, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKu7KVqi = await RainbowRAK.new({from: accounts[0]});
		const addressNcNCHsE = accounts[3]
		const uint256uQc2bXY = await RainbowRAKu7KVqi.earned.call(addressNcNCHsE, {from: accounts[2]});
		const booloToCPD = await RainbowRAKu7KVqi.isOwner.call({from: accounts[4]});
//		await RainbowRAKu7KVqi.claimRewards.call({from: accounts[3]});
//		const addressarrayo5yPzOJ = await RainbowRAKu7KVqi.getCommunity.call({from: accounts[4]});

		assert.equal(booloToCPD, false)
		assert.equal(uint256uQc2bXY, BigInt("0"))
		await expect(RainbowRAKu7KVqi.claimRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKCbiDXV = await RainbowRAK.new({from: accounts[4]});
		const uintvTBuSZi = BigInt("431")
		const addressEerDZTb = accounts[4]
		const addressQRE7ugC = accounts[1]
		const uint256hTnFrgX = await RainbowRAKCbiDXV.getCurrentRewardReserve.call({from: accounts[2]});
//		const uint256tAq76sl = await RainbowRAKCbiDXV.stake.call(uintvTBuSZi, {from: accounts[0]});
//		const addressG3lBUt9 = await RainbowRAKCbiDXV.transferOwnership.call(addressEerDZTb, {from: accounts[0]});
//		const uint2568uAb9U = await RainbowRAKCbiDXV.earned.call(addressQRE7ugC, {from: accounts[2]});
//		const boolDU8qvqn = await RainbowRAKCbiDXV.isOwner.call({from: accounts[0]});
//		const addressarrayD3f4q1F = await RainbowRAKCbiDXV.getCommunity.call({from: accounts[4]});

		assert.equal(uint256hTnFrgX, BigInt("0"))
		await expect(RainbowRAKCbiDXV.stake.call(uintvTBuSZi, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKSHfR5YL = await RainbowRAK.new({from: accounts[0]});
		const addresskwMdAAc = await RainbowRAKSHfR5YL.owner.call({from: accounts[3]});

		assert.equal(addresskwMdAAc, 0x938cAd8f00D5Fd1e46775a2BE16d4F65326090Fe)
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKSHfR5YL = await RainbowRAK.new({from: accounts[0]});
		const uintOTbOXN = BigInt("54")
//		await RainbowRAKSHfR5YL.renounceOwnership.call({from: accounts[0]});
//		const uint256gWKFnCH = await RainbowRAKSHfR5YL.getCurrentRewardReserve.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256Dlp1FZV = await RainbowRAKSHfR5YL.stake.call(uintOTbOXN, {from: accounts[1]});
//		const uint256qzE4nVL = await RainbowRAKSHfR5YL.rewardPerToken.call({from: accounts[3]});
//		const addresskwMdAAc = await RainbowRAKSHfR5YL.owner.call({from: accounts[3]});
//		const addressarrayZKJDs6O = await RainbowRAKSHfR5YL.getCommunity.call({from: accounts[1]});

		await expect(RainbowRAKSHfR5YL.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKqr2hWcQ = await RainbowRAK.new({from: accounts[1]});
		const addressKimokq7 = "0x0000000000000000000000000000000000000001"
		const addressiCjgjgW = accounts[4]
		const addressPDqAEoP = accounts[0]
		const addressIj84pJQ = await RainbowRAKqr2hWcQ.transferOwnership.call(addressKimokq7, {from: accounts[1]});
//		await RainbowRAKqr2hWcQ.renounceOwnership.call({from: accounts[3]});
//		const addresswEUVSzU = await RainbowRAKqr2hWcQ.updateReward.call(addressiCjgjgW, {from: accounts[0]});
//		const uint256Bxt3Km6 = await RainbowRAKqr2hWcQ.lastTimeRewardApplicable.call({from: accounts[0]});
//		const addresseCBCVNW = await RainbowRAKqr2hWcQ.updateReward.call(addressPDqAEoP, {from: accounts[2]});

		await expect(RainbowRAKqr2hWcQ.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKkRc8yNC = await RainbowRAK.new({from: accounts[0]});
		const uintr4pKWvA = BigInt("1681")
		const uintVvxFnhW = BigInt("894")
		const addresssBQfIh = accounts[0]
		const addressqR6UyVI = accounts[1]
		const uint256IODq4la = await RainbowRAKkRc8yNC.getCurrentRewardReserve.call({from: accounts[2]});
//		const uint256ODAau5p = await RainbowRAKkRc8yNC.notifyRewardAmount.call(uintr4pKWvA, {from: accounts[0]});
//		const uint256uc7GyG1 = await RainbowRAKkRc8yNC.unstake.call(uintVvxFnhW, {from: accounts[3]});
//		const addressIl0gZv7 = await RainbowRAKkRc8yNC.transferOwnership.call(addresssBQfIh, {from: accounts[1]});
//		const addressKzFBxsU = await RainbowRAKkRc8yNC.updateReward.call(addressqR6UyVI, {from: accounts[4]});
//		const uint256ONMdaqo = await RainbowRAKkRc8yNC.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256IODq4la, BigInt("0"))
		await expect(RainbowRAKkRc8yNC.notifyRewardAmount.call(uintr4pKWvA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})