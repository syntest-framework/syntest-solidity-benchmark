const RainbowRAK = artifacts.require("RainbowRAK");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RainbowRAK', (accounts) => {
	it('test for RainbowRAK', async () => {
		const RainbowRAKhS3174p = await RainbowRAK.new({from: accounts[5]});
		const addressjSl1lU = accounts[1]
//		await RainbowRAKhS3174p.onlyOwner.call({from: accounts[5]});
//		const uint256vf0JYeq = await RainbowRAKhS3174p.lastTimeRewardApplicable.call({from: accounts[1]});
//		const addresszZqckPm = await RainbowRAKhS3174p.transferOwnership.call(addressjSl1lU, {from: accounts[0]});

		await expect(RainbowRAKhS3174p.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKOOb6i87 = await RainbowRAK.new({from: accounts[4]});
		const uintBbbjEy = BigInt("105")
		const uintaNz8QPZ = BigInt("1355")
//		await RainbowRAKOOb6i87.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256YFURv4 = await RainbowRAKOOb6i87.stake.call(uintBbbjEy, {from: accounts[2]});
//		const boolz2cLFaa = await RainbowRAKOOb6i87.isOwner.call({from: accounts[5]});
//		const uint256zLnKNOG = await RainbowRAKOOb6i87.stake.call(uintaNz8QPZ, {from: accounts[1]});
//		await RainbowRAKOOb6i87.exit.call({from: accounts[1]});

		await expect(RainbowRAKOOb6i87.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKRMIN8qK = await RainbowRAK.new({from: accounts[4]});
		const addressQwCuTiJ = accounts[5]
		const uintOvm2Ap1 = BigInt("1395")
		const address7pZ8hz = accounts[2]
		const addressarrayxEWp8Yc = await RainbowRAKRMIN8qK.getCommunity.call({from: accounts[3]});
//		const addressHFNfJZe = await RainbowRAKRMIN8qK.updateReward.call(addressQwCuTiJ, {from: accounts[2]});
//		await RainbowRAKRMIN8qK.exit.call({from: accounts[1]});
//		const uint256uejYvfX = await RainbowRAKRMIN8qK.unstake.call(uintOvm2Ap1, {from: accounts[5]});
//		const addressIFHSg1H = await RainbowRAKRMIN8qK.updateReward.call(address7pZ8hz, {from: accounts[3]});

		assert.equal(addressarrayxEWp8Yc, )
		await expect(RainbowRAKRMIN8qK.updateReward.call(addressQwCuTiJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKDwZNXC = await RainbowRAK.new({from: accounts[3]});
		const uintBNTgkO8 = BigInt("886")
		const addresspGS8TwD = accounts[2]
		const boolmBnKGy = await RainbowRAKDwZNXC.isOwner.call({from: accounts[2]});
//		const uint256MKAH5c6 = await RainbowRAKDwZNXC.stake.call(uintBNTgkO8, {from: accounts[0]});
//		const addressKaIVzRO = await RainbowRAKDwZNXC.transferOwnership.call(addresspGS8TwD, {from: accounts[2]});
//		await RainbowRAKDwZNXC.renounceOwnership.call({from: accounts[1]});
//		await RainbowRAKDwZNXC.exit.call({from: accounts[3]});

		assert.equal(boolmBnKGy, false)
		await expect(RainbowRAKDwZNXC.stake.call(uintBNTgkO8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKEpe7wj = await RainbowRAK.new({from: accounts[5]});
//		await RainbowRAKEpe7wj.exit.call({from: accounts[1]});
//		const uint256xuenSny = await RainbowRAKEpe7wj.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256RMeIPDR = await RainbowRAKEpe7wj.lastTimeRewardApplicable.call({from: accounts[1]});

		await expect(RainbowRAKEpe7wj.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKPvdQVhR = await RainbowRAK.new({from: accounts[4]});
		const addressJJM6x7Q = "0x0000000000000000000000000000000000000001"
		const uintrHckyLe = BigInt("131")
		const uintvCd4D0b = BigInt("587")
		const uint256AZ4C5lK = await RainbowRAKPvdQVhR.getCurrentRewardReserve.call({from: accounts[1]});
		const uint256C81dv44 = await RainbowRAKPvdQVhR.earned.call(addressJJM6x7Q, {from: accounts[5]});
//		const uint256GNlmS5p = await RainbowRAKPvdQVhR.stake.call(uintrHckyLe, {from: accounts[4]});
//		const uint256A7ykEXm = await RainbowRAKPvdQVhR.stake.call(uintvCd4D0b, {from: accounts[4]});

		assert.equal(uint256AZ4C5lK, BigInt("0"))
		assert.equal(uint256C81dv44, BigInt("0"))
		await expect(RainbowRAKPvdQVhR.stake.call(uintrHckyLe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKDwyWhqa = await RainbowRAK.new({from: accounts[2]});
		const addressHn1n9Re = accounts[3]
		const uintvVfK6VI = BigInt("143")
		const uintbRCYnSg = BigInt("1274")
		const addressRXOQOYn = accounts[2]
		const uint256Nek1Dt = await RainbowRAKDwyWhqa.rewardPerToken.call({from: accounts[2]});
		const uint256lPDBuNL = await RainbowRAKDwyWhqa.earned.call(addressHn1n9Re, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256QgVdZfA = await RainbowRAKDwyWhqa.unstake.call(uintvVfK6VI, {from: accounts[1]});
//		const uint256jQ82mYc = await RainbowRAKDwyWhqa.stake.call(uintbRCYnSg, {from: accounts[0]});
//		const addressJ0HZSzV = await RainbowRAKDwyWhqa.updateReward.call(addressRXOQOYn, {from: accounts[1]});
//		await RainbowRAKDwyWhqa.onlyOwner.call({from: accounts[4]});

		assert.equal(uint256Nek1Dt, BigInt("0"))
		assert.equal(uint256lPDBuNL, BigInt("0"))
		await expect(RainbowRAKDwyWhqa.unstake.call(uintvVfK6VI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKi6bUkL = await RainbowRAK.new({from: "0x0000000000000000000000000000000000000001"});
		const uintoLEuFzr = BigInt("84")
		const addressTTTSHjg = accounts[5]
		await RainbowRAKi6bUkL.renounceOwnership.call({from: accounts[3]});
		const uint256NZrorrO = await RainbowRAKi6bUkL.unstake.call(uintoLEuFzr, {from: accounts[0]});
		const addressmWHEKT = await RainbowRAKi6bUkL.updateReward.call(addressTTTSHjg, {from: accounts[5]});
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKPvdQVhR = await RainbowRAK.new({from: accounts[4]});
		const addressTIvMpLw = "0x0000000000000000000000000000000000000000"
		const uintskq82H8 = BigInt("131")
		const uintLTxdigk = BigInt("1363")
		const uint256AZ4C5lK = await RainbowRAKPvdQVhR.getCurrentRewardReserve.call({from: accounts[1]});
//		await RainbowRAKPvdQVhR.claimRewards.call({from: accounts[3]});
//		const uint256C81dv44 = await RainbowRAKPvdQVhR.earned.call(addressTIvMpLw, {from: accounts[5]});
//		const uint256GNlmS5p = await RainbowRAKPvdQVhR.stake.call(uintskq82H8, {from: accounts[4]});
//		const uint256WVWfe14 = await RainbowRAKPvdQVhR.stake.call(uintLTxdigk, {from: accounts[3]});
//		await RainbowRAKPvdQVhR.claimRewards.call({from: accounts[0]});
//		await RainbowRAKPvdQVhR.onlyOwner.call({from: accounts[4]});

		assert.equal(uint256AZ4C5lK, BigInt("0"))
		await expect(RainbowRAKPvdQVhR.claimRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKEpe7wj = await RainbowRAK.new({from: accounts[5]});
		const addressLnOqffG = await RainbowRAKEpe7wj.owner.call({from: accounts[3]});
//		await RainbowRAKEpe7wj.exit.call({from: accounts[1]});

		assert.equal(addressLnOqffG, 0x68eF5fF2C57581AC10B3cFdbF702D3D3D5028799)
		await expect(RainbowRAKEpe7wj.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKPvdQVhR = await RainbowRAK.new({from: accounts[4]});
		const addressRmdTbEr = accounts[1]
		const addressKwmrT00 = "0x0000000000000000000000000000000000000001"
		const uinto6gJ8TS = BigInt("112")
		const uintxzwAfEE = BigInt("269")
		const addressOP7eaFC = accounts[0]
		const uintcxs2Bk6 = BigInt("568")
		const uint256AZ4C5lK = await RainbowRAKPvdQVhR.getCurrentRewardReserve.call({from: accounts[1]});
		const addresswtiaV2n = await RainbowRAKPvdQVhR.transferOwnership.call(addressRmdTbEr, {from: accounts[4]});
		const uint256C81dv44 = await RainbowRAKPvdQVhR.earned.call(addressKwmrT00, {from: accounts[5]});
//		const uint256GNlmS5p = await RainbowRAKPvdQVhR.stake.call(uinto6gJ8TS, {from: accounts[4]});
//		const uint256Sss1fDb = await RainbowRAKPvdQVhR.notifyRewardAmount.call(uintxzwAfEE, {from: accounts[2]});
//		const uint256J83M3kO = await RainbowRAKPvdQVhR.lastTimeRewardApplicable.call({from: accounts[2]});
//		const addresscTs7GLK = await RainbowRAKPvdQVhR.transferOwnership.call(addressOP7eaFC, {from: accounts[5]});
//		await RainbowRAKPvdQVhR.claimRewards.call({from: accounts[3]});
//		const uint256A7ykEXm = await RainbowRAKPvdQVhR.stake.call(uintcxs2Bk6, {from: accounts[4]});
//		await RainbowRAKPvdQVhR.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		await RainbowRAKPvdQVhR.renounceOwnership.call({from: accounts[1]});
//		await RainbowRAKPvdQVhR.renounceOwnership.call({from: accounts[4]});
//		await RainbowRAKPvdQVhR.onlyOwner.call({from: accounts[4]});

		assert.equal(uint256AZ4C5lK, BigInt("0"))
		assert.equal(uint256C81dv44, BigInt("0"))
		await expect(RainbowRAKPvdQVhR.stake.call(uinto6gJ8TS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKuS0h7t0 = await RainbowRAK.new({from: accounts[3]});
		const addressn6wzfUH = await RainbowRAKuS0h7t0.owner.call({from: accounts[0]});
		const uint256YfHQVIe = await RainbowRAKuS0h7t0.rewardPerToken.call({from: accounts[0]});
//		await RainbowRAKuS0h7t0.renounceOwnership.call({from: accounts[3]});

		assert.equal(addressn6wzfUH, 0x24fc435841F98589c6fb91dE30d6c10E5553Ca71)
		assert.equal(uint256YfHQVIe, BigInt("0"))
		await expect(RainbowRAKuS0h7t0.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKutzB9At = await RainbowRAK.new({from: accounts[4]});
		const uintV3CtBQa = BigInt("341")
		const uint256ZvPGeL = await RainbowRAKutzB9At.rewardPerToken.call({from: accounts[3]});
		const uint256Or3ZoHx = await RainbowRAKutzB9At.rewardPerToken.call({from: accounts[3]});
		const addressarrayg1SNBS = await RainbowRAKutzB9At.getCommunity.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256a1Xy6O0 = await RainbowRAKutzB9At.notifyRewardAmount.call(uintV3CtBQa, {from: accounts[4]});

		assert.equal(addressarrayg1SNBS, )
		assert.equal(uint256Or3ZoHx, BigInt("0"))
		assert.equal(uint256ZvPGeL, BigInt("0"))
		await expect(RainbowRAKutzB9At.notifyRewardAmount.call(uintV3CtBQa, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})