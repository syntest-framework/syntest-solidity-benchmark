const YRX3 = artifacts.require("YRX3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YRX3', (accounts) => {
	it('test for YRX3', async () => {
		const YRX3MXnjFVe = await YRX3.new({from: accounts[3]});
		const uintXh4VRXd = BigInt("84")
		const uintFc7j3Zi = BigInt("349")
		const addressLKKI5ff = "0x0000000000000000000000000000000000000001"
//		const uint256HlPu80c = await YRX3MXnjFVe.stake.call(uintXh4VRXd, {from: accounts[0]});
//		const uint256huVm1a = await YRX3MXnjFVe.withdraw.call(uintFc7j3Zi, {from: accounts[2]});
//		const uint256Gb4FpPk = await YRX3MXnjFVe.earned.call(addressLKKI5ff, {from: accounts[0]});
//		await YRX3MXnjFVe.getReward.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(YRX3MXnjFVe.stake.call(uintXh4VRXd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3Lp5Zpan = await YRX3.new({from: accounts[1]});
		const uintGqcrfcr = BigInt("1878")
		const addressot27ihe = accounts[0]
		const uint256j8Q0tyt = await YRX3Lp5Zpan.rewardPerToken.call({from: accounts[4]});
//		const uint256UQvhZiE = await YRX3Lp5Zpan.withdraw.call(uintGqcrfcr, {from: accounts[2]});
//		const addressgnkBXsU = await YRX3Lp5Zpan.toPayable.call(addressot27ihe, {from: accounts[5]});
//		const uint256vYpak0X = await YRX3Lp5Zpan.rewardPerToken.call({from: accounts[2]});
//		await YRX3Lp5Zpan.renounceOwnership.call({from: accounts[4]});

		assert.equal(uint256j8Q0tyt, BigInt("0"))
		await expect(YRX3Lp5Zpan.withdraw.call(uintGqcrfcr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3kKUFnbt = await YRX3.new({from: "0x0000000000000000000000000000000000000001"});
		const addresssqHPx4 = accounts[0]
		const addressS0xq42c = accounts[0]
		const uint256ZHZgXpb = await YRX3kKUFnbt.earned.call(addresssqHPx4, {from: accounts[1]});
		const uint256uGv0YuJ = await YRX3kKUFnbt.earned.call(addressS0xq42c, {from: accounts[4]});
		await YRX3kKUFnbt.checkNextEpoch.call({from: accounts[3]});
		const booli8WxHR5 = await YRX3kKUFnbt.isOwner.call({from: accounts[4]});
	});

	it('test for YRX3', async () => {
		const YRX3ZOpSK5R = await YRX3.new({from: accounts[3]});
		const addressVz6Qgwl = accounts[1]
		const uint256TXRmV2W = await YRX3ZOpSK5R.totalSupply.call({from: accounts[0]});
//		await YRX3ZOpSK5R.exit.call({from: accounts[2]});
//		const uint256x2GYMy9 = await YRX3ZOpSK5R.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		await YRX3ZOpSK5R.notifyRewardAmount.call({from: accounts[0]});
//		const addressOaWl7Ma = await YRX3ZOpSK5R.emergencyDrain.call(addressVz6Qgwl, {from: accounts[3]});

		assert.equal(uint256TXRmV2W, BigInt("0"))
		await expect(YRX3ZOpSK5R.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3j2RC5oo = await YRX3.new({from: accounts[0]});
		const addresskl07epL = "0x0000000000000000000000000000000000000001"
		const addresszrOpSid = accounts[5]
		const uint256lrB0Yjl = await YRX3j2RC5oo.totalSupply.call({from: accounts[3]});
//		const addressTd29HQ8 = await YRX3j2RC5oo.transferOwnership.call(addresskl07epL, {from: accounts[2]});
//		await YRX3j2RC5oo.onlyRewardDistribution.call({from: accounts[4]});
//		await YRX3j2RC5oo.renounceOwnership.call({from: accounts[3]});
//		const addressgb5Ntyd = await YRX3j2RC5oo.emergencyDrain.call(addresszrOpSid, {from: accounts[5]});

		assert.equal(uint256lrB0Yjl, BigInt("0"))
		await expect(YRX3j2RC5oo.transferOwnership.call(addresskl07epL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3Q56AP5F = await YRX3.new({from: accounts[2]});
		const addressL5DEBrh = accounts[1]
		const addressmhgMRqR = accounts[0]
		const uintNpx5aPa = BigInt("1432")
		const uint256Ymg6N82 = await YRX3Q56AP5F.rewardPerToken.call({from: accounts[1]});
//		const addressqHWOvVp = await YRX3Q56AP5F.updateReward.call(addressL5DEBrh, {from: accounts[3]});
//		const addressL8QYLsI = await YRX3Q56AP5F.setRewardDistribution.call(addressmhgMRqR, {from: accounts[1]});
//		await YRX3Q56AP5F.renounceOwnership.call({from: accounts[1]});
//		const uint256YN71Ayr = await YRX3Q56AP5F.stake.call(uintNpx5aPa, {from: accounts[2]});

		assert.equal(uint256Ymg6N82, BigInt("0"))
		await expect(YRX3Q56AP5F.updateReward.call(addressL5DEBrh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3vmZVU5U = await YRX3.new({from: accounts[2]});
		const uinthgvb7Zq = BigInt("279")
//		await YRX3vmZVU5U.getReward.call({from: accounts[1]});
//		const addressHVfbv5D = await YRX3vmZVU5U.owner.call({from: accounts[2]});
//		const uint256CbvZFSp = await YRX3vmZVU5U.withdraw.call(uinthgvb7Zq, {from: accounts[4]});
//		await YRX3vmZVU5U.onlyRewardDistribution.call({from: accounts[2]});

		await expect(YRX3vmZVU5U.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3vmZVU5U = await YRX3.new({from: accounts[2]});
		const uintkL6mfsB = BigInt("1439")
//		await YRX3vmZVU5U.renounceOwnership.call({from: accounts[2]});
//		const uint256a3DF4Pm = await YRX3vmZVU5U.stake.call(uintkL6mfsB, {from: accounts[0]});

		await expect(YRX3vmZVU5U.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3vmZVU5U = await YRX3.new({from: accounts[2]});
		const addressxgMfcRK = accounts[0]
//		await YRX3vmZVU5U.getReward.call({from: accounts[4]});
//		await YRX3vmZVU5U.notifyRewardAmount.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressJeKWpy = await YRX3vmZVU5U.transferOwnership.call(addressxgMfcRK, {from: accounts[2]});

		await expect(YRX3vmZVU5U.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3vmZVU5U = await YRX3.new({from: accounts[2]});
		const addressNrfUvI = accounts[4]
		const uintvTvPclY = BigInt("1399")
		const addressYVKIqiq = await YRX3vmZVU5U.transferOwnership.call(addressNrfUvI, {from: accounts[2]});
//		const uint256a3DF4Pm = await YRX3vmZVU5U.stake.call(uintvTvPclY, {from: accounts[0]});

		await expect(YRX3vmZVU5U.stake.call(uintvTvPclY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3vmZVU5U = await YRX3.new({from: accounts[2]});
		const addressCwvY5Uv = accounts[1]
		const addresseOOOd3x = await YRX3vmZVU5U.setRewardDistribution.call(addressCwvY5Uv, {from: accounts[2]});
//		await YRX3vmZVU5U.onlyRewardDistribution.call({from: accounts[2]});

		await expect(YRX3vmZVU5U.onlyRewardDistribution.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})