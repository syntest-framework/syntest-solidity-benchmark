const BlueICE = artifacts.require("BlueICE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BlueICE', (accounts) => {
	it('test for BlueICE', async () => {
		const BlueICEE35HyRA = await BlueICE.new({from: accounts[3]});
		const addressIFlDIU0 = accounts[3]
		const uint256Ncw1Fa = await BlueICEE35HyRA.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256ZOv3F6o = await BlueICEE35HyRA.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ypaEhLZ = await BlueICEE35HyRA.getCurrentRewardReserve.call({from: accounts[4]});
		const addressarraygx6oBeS = await BlueICEE35HyRA.getCommunity.call({from: accounts[0]});
		const uint256TN12iwm = await BlueICEE35HyRA.earned.call(addressIFlDIU0, {from: accounts[3]});

		assert.equal(addressarraygx6oBeS, )
		assert.equal(uint256Ncw1Fa, BigInt("0"))
		assert.equal(uint256TN12iwm, BigInt("0"))
		assert.equal(uint256ZOv3F6o, BigInt("0"))
		assert.equal(uint256ypaEhLZ, BigInt("500000000000000000000"))
	});

	it('test for BlueICE', async () => {
		const BlueICEcdzZDW = await BlueICE.new({from: accounts[0]});
		const addressVxX0t58 = accounts[5]
		const uintvFleAVT = BigInt("835")
		const addressarrayJ1hQ5NO = await BlueICEcdzZDW.getCommunity.call({from: accounts[3]});
//		await BlueICEcdzZDW.onlyOwner.call({from: accounts[3]});
//		await BlueICEcdzZDW.renounceOwnership.call({from: accounts[0]});
//		const addressF8DOrr = await BlueICEcdzZDW.transferOwnership.call(addressVxX0t58, {from: accounts[4]});
//		await BlueICEcdzZDW.claimRewards.call({from: accounts[4]});
//		const uint256b6sh0Xr = await BlueICEcdzZDW.stake.call(uintvFleAVT, {from: accounts[2]});

		assert.equal(addressarrayJ1hQ5NO, )
		await expect(BlueICEcdzZDW.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEnGTSg7l = await BlueICE.new({from: accounts[0]});
		const uintDbUaeJJ = BigInt("1517")
		const addresswnL64Ct = accounts[4]
//		const uint256dLEF13w = await BlueICEnGTSg7l.unstake.call(uintDbUaeJJ, {from: accounts[1]});
//		const uint256iVmJUkR = await BlueICEnGTSg7l.rewardPerToken.call({from: accounts[1]});
//		const uint256BmK4soh = await BlueICEnGTSg7l.getCurrentRewardReserve.call({from: accounts[1]});
//		await BlueICEnGTSg7l.renounceOwnership.call({from: accounts[2]});
//		const uint256bvzakL3 = await BlueICEnGTSg7l.earned.call(addresswnL64Ct, {from: accounts[0]});
//		const uint256SL7WUX6 = await BlueICEnGTSg7l.lastTimeRewardApplicable.call({from: accounts[5]});

		await expect(BlueICEnGTSg7l.unstake.call(uintDbUaeJJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICERrLv5VY = await BlueICE.new({from: accounts[0]});
		const addressJRCxYRf = accounts[3]
		const uint256Wn4CiS = await BlueICERrLv5VY.lastTimeRewardApplicable.call({from: accounts[3]});
		const boolmH6tioB = await BlueICERrLv5VY.isOwner.call({from: accounts[0]});
		const uint256ombEtAR = await BlueICERrLv5VY.getCurrentRewardReserve.call({from: accounts[2]});
//		const addressIeZkn3g = await BlueICERrLv5VY.transferOwnership.call(addressJRCxYRf, {from: accounts[4]});

		assert.equal(boolmH6tioB, true)
		assert.equal(uint256Wn4CiS, BigInt("0"))
		assert.equal(uint256ombEtAR, BigInt("500000000000000000000"))
		await expect(BlueICERrLv5VY.transferOwnership.call(addressJRCxYRf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEcmG0t6d = await BlueICE.new({from: accounts[1]});
//		await BlueICEcmG0t6d.claimRewards.call({from: accounts[4]});
		await BlueICEcmG0t6d.claimRewards.call({from: accounts[4]});

		await expect(BlueICEcmG0t6d.claimRewards.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEcmG0t6d = await BlueICE.new({from: accounts[1]});
		const addressQIBvhg = accounts[2]
		const uint256W4dDL3 = await BlueICEcmG0t6d.earned.call(addressQIBvhg, {from: "0x0000000000000000000000000000000000000001"});
//		await BlueICEcmG0t6d.exit.call({from: accounts[1]});
//		await BlueICEcmG0t6d.claimRewards.call({from: accounts[4]});

		assert.equal(uint256W4dDL3, BigInt("0"))
		await expect(BlueICEcmG0t6d.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEcmG0t6d = await BlueICE.new({from: accounts[1]});
		const addressSULjru1 = accounts[2]
		const uintel4R2P = BigInt("635")
		const addresspnCmJCq = await BlueICEcmG0t6d.transferOwnership.call(addressSULjru1, {from: accounts[1]});
//		const uint256jpZBSvD = await BlueICEcmG0t6d.stake.call(uintel4R2P, {from: accounts[0]});
//		await BlueICEcmG0t6d.claimRewards.call({from: accounts[4]});

		await expect(BlueICEcmG0t6d.stake.call(uintel4R2P, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEcmG0t6d = await BlueICE.new({from: accounts[1]});
		const uintvwiYLHa = BigInt("1177")
//		const uint256VlX3eJx = await BlueICEcmG0t6d.notifyRewardAmount.call(uintvwiYLHa, {from: accounts[1]});
//		await BlueICEcmG0t6d.claimRewards.call({from: accounts[4]});

		await expect(BlueICEcmG0t6d.notifyRewardAmount.call(uintvwiYLHa, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEoGo0ZJ = await BlueICE.new({from: accounts[1]});
		const uintK2Y4Ejj = BigInt("264")
//		await BlueICEoGo0ZJ.renounceOwnership.call({from: accounts[1]});
//		const uint256ffhr64q = await BlueICEoGo0ZJ.unstake.call(uintK2Y4Ejj, {from: accounts[5]});
//		await BlueICEoGo0ZJ.claimRewards.call({from: accounts[2]});

		await expect(BlueICEoGo0ZJ.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICEoGo0ZJ = await BlueICE.new({from: accounts[1]});
		const addresszRcg2hC = accounts[2]
		const addressUcO5FiO = accounts[5]
		const uintvY7yG7 = BigInt("866")
		const addressd0TDdq = await BlueICEoGo0ZJ.owner.call({from: accounts[0]});
//		const addressxwKSPhO = await BlueICEoGo0ZJ.updateReward.call(addresszRcg2hC, {from: accounts[4]});
//		const addresskZ0L0i4 = await BlueICEoGo0ZJ.transferOwnership.call(addressUcO5FiO, {from: accounts[3]});
//		const uint256ffhr64q = await BlueICEoGo0ZJ.unstake.call(uintvY7yG7, {from: accounts[5]});

		assert.equal(addressd0TDdq, 0x18D6d83294aF6B82d0Bf470fc9a548F62Da751F6)
		await expect(BlueICEoGo0ZJ.updateReward.call(addresszRcg2hC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BlueICE', async () => {
		const BlueICELx2kVd0 = await BlueICE.new({from: "0x0000000000000000000000000000000000000001"});
		const uintli1xL6v = BigInt("612")
		await BlueICELx2kVd0.exit.call({from: accounts[2]});
		await BlueICELx2kVd0.exit.call({from: accounts[1]});
		await BlueICELx2kVd0.onlyOwner.call({from: accounts[4]});
		await BlueICELx2kVd0.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256rBR9aXu = await BlueICELx2kVd0.unstake.call(uintli1xL6v, {from: accounts[2]});
	});
})