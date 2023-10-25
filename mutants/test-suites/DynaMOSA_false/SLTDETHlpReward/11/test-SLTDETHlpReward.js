const SLTDETHlpReward = artifacts.require("SLTDETHlpReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDETHlpReward', (accounts) => {
	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardfkrO11q = await SLTDETHlpReward.new({from: accounts[2]});
		const addressBcFO5tc = accounts[4]
		const addressF718784 = accounts[3]
		const addressMVTE6P4 = accounts[3]
		const addressSSF6sEI = accounts[0]
		const addressWHcYWI = accounts[1]
		const addresszvDMSFn = await SLTDETHlpRewardfkrO11q.transferOwnership.call(addressBcFO5tc, {from: accounts[2]});
//		const uint256VcLGk6z = await SLTDETHlpRewardfkrO11q.remainingReward.call({from: accounts[1]});
//		const addressEdimhAq = await SLTDETHlpRewardfkrO11q.transferOwnership.call(addressF718784, {from: accounts[2]});
//		const uint256YQ6p4p = await SLTDETHlpRewardfkrO11q.balanceOf.call(addressMVTE6P4, {from: accounts[0]});
//		const addressgSpFLGD = await SLTDETHlpRewardfkrO11q.updateReward.call(addressSSF6sEI, {from: accounts[1]});
//		const addressXhgqYLG = await SLTDETHlpRewardfkrO11q.transferOwnership.call(addressWHcYWI, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDETHlpRewardfkrO11q.remainingReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardg4Levm3 = await SLTDETHlpReward.new({from: accounts[4]});
		const addressDZ3AUeV = "0x0000000000000000000000000000000000000001"
		const address9kesNG = accounts[5]
		const uintqittxvq = BigInt("270")
		const uint256QcGYxr = await SLTDETHlpRewardg4Levm3.earned.call(addressDZ3AUeV, {from: accounts[3]});
//		const addressyftz3PP = await SLTDETHlpRewardg4Levm3.updateReward.call(address9kesNG, {from: accounts[1]});
//		const uint256MYUC4RA = await SLTDETHlpRewardg4Levm3.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint256JkA57lV = await SLTDETHlpRewardg4Levm3.withdraw.call(uintqittxvq, {from: accounts[0]});
//		const addressXQJ38U8 = await SLTDETHlpRewardg4Levm3.owner.call({from: accounts[0]});

		assert.equal(uint256QcGYxr, BigInt("0"))
		await expect(SLTDETHlpRewardg4Levm3.updateReward.call(address9kesNG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardsIMA6rG = await SLTDETHlpReward.new({from: accounts[2]});
		const addressouxD09y = "0x0000000000000000000000000000000000000001"
		const addressAkbfPJh = accounts[4]
//		const addressV4nqDIq = await SLTDETHlpRewardsIMA6rG.setRewardDistribution.call(addressouxD09y, {from: accounts[5]});
//		const uint256IoHCC6k = await SLTDETHlpRewardsIMA6rG.lastTimeRewardApplicable.call({from: accounts[4]});
//		const uint256EIJeKtV = await SLTDETHlpRewardsIMA6rG.rewardPerToken.call({from: accounts[2]});
//		const uint256GPdUIId = await SLTDETHlpRewardsIMA6rG.lastTimeRewardApplicable.call({from: accounts[5]});
//		const uint256skT8GXl = await SLTDETHlpRewardsIMA6rG.balanceOf.call(addressAkbfPJh, {from: accounts[0]});

		await expect(SLTDETHlpRewardsIMA6rG.setRewardDistribution.call(addressouxD09y, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardgFEyiH8 = await SLTDETHlpReward.new({from: accounts[0]});
		const uintCPeucjO = BigInt("1581")
		const uintbFeABv6 = BigInt("786")
//		const uint256Hgke9v = await SLTDETHlpRewardgFEyiH8.stake.call(uintCPeucjO, {from: accounts[1]});
//		const boolQDGkSx2 = await SLTDETHlpRewardgFEyiH8.isOwner.call({from: accounts[0]});
//		await SLTDETHlpRewardgFEyiH8.exit.call({from: accounts[1]});
//		const uint256TLB4vz = await SLTDETHlpRewardgFEyiH8.withdraw.call(uintbFeABv6, {from: accounts[4]});

		await expect(SLTDETHlpRewardgFEyiH8.stake.call(uintCPeucjO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardTGfkhuS = await SLTDETHlpReward.new({from: accounts[3]});
		const uintX5kdyfc = BigInt("351")
		const addressPUsOE6r = accounts[2]
		const uint256hqU8oVL = await SLTDETHlpRewardTGfkhuS.totalSupply.call({from: accounts[0]});
//		const uint256LYMFaN8 = await SLTDETHlpRewardTGfkhuS.withdraw.call(uintX5kdyfc, {from: accounts[4]});
//		const addressZ8hTA8b = await SLTDETHlpRewardTGfkhuS.setRewardDistribution.call(addressPUsOE6r, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256vVDRbjh = await SLTDETHlpRewardTGfkhuS.rewardPerToken.call({from: accounts[3]});

		assert.equal(uint256hqU8oVL, BigInt("0"))
		await expect(SLTDETHlpRewardTGfkhuS.withdraw.call(uintX5kdyfc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardiSBFq8t = await SLTDETHlpReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addressQixLmT = accounts[3]
		const uintTrPy4l = BigInt("252")
		const uint256fS5VrLV = await SLTDETHlpRewardiSBFq8t.rewardPerToken.call({from: accounts[1]});
		const uint256EK5gWHk = await SLTDETHlpRewardiSBFq8t.balanceOf.call(addressQixLmT, {from: accounts[1]});
		const uint256V4UfVn = await SLTDETHlpRewardiSBFq8t.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256t3A7DOT = await SLTDETHlpRewardiSBFq8t.withdraw.call(uintTrPy4l, {from: accounts[4]});
		await SLTDETHlpRewardiSBFq8t.checkStart.call({from: accounts[2]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardgFEyiH8 = await SLTDETHlpReward.new({from: accounts[0]});
		const uintBzFSr51 = BigInt("786")
		const boolQDGkSx2 = await SLTDETHlpRewardgFEyiH8.isOwner.call({from: accounts[0]});
//		await SLTDETHlpRewardgFEyiH8.exit.call({from: accounts[1]});
//		const uint256TLB4vz = await SLTDETHlpRewardgFEyiH8.withdraw.call(uintBzFSr51, {from: accounts[4]});

		assert.equal(boolQDGkSx2, true)
		await expect(SLTDETHlpRewardgFEyiH8.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardgFEyiH8 = await SLTDETHlpReward.new({from: accounts[0]});
		const uintS0HzIWW = BigInt("636")
		const uintgZkcSJh = BigInt("1581")
		const uintQjrNTTL = BigInt("1957")
		const uint256NyEC34X = await SLTDETHlpRewardgFEyiH8.totalSupply.call({from: accounts[0]});
		const uint256MjnUSyA = await SLTDETHlpRewardgFEyiH8.totalSupply.call({from: accounts[4]});
//		const uint256II2F9NL = await SLTDETHlpRewardgFEyiH8.notifyRewardAmount.call(uintS0HzIWW, {from: accounts[4]});
//		const uint256Hgke9v = await SLTDETHlpRewardgFEyiH8.stake.call(uintgZkcSJh, {from: accounts[1]});
//		const uint256kfv5TQI = await SLTDETHlpRewardgFEyiH8.withdraw.call(uintQjrNTTL, {from: accounts[3]});
//		const boolQDGkSx2 = await SLTDETHlpRewardgFEyiH8.isOwner.call({from: accounts[0]});
//		await SLTDETHlpRewardgFEyiH8.exit.call({from: accounts[1]});

		assert.equal(uint256MjnUSyA, BigInt("0"))
		assert.equal(uint256NyEC34X, BigInt("0"))
		await expect(SLTDETHlpRewardgFEyiH8.notifyRewardAmount.call(uintS0HzIWW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardgFEyiH8 = await SLTDETHlpReward.new({from: accounts[0]});
		const uinthTMjzKJ = BigInt("1581")
		const uintUlpKDVq = BigInt("786")
//		await SLTDETHlpRewardgFEyiH8.getReward.call({from: accounts[3]});
//		const uint256Hgke9v = await SLTDETHlpRewardgFEyiH8.stake.call(uinthTMjzKJ, {from: accounts[1]});
//		const boolQDGkSx2 = await SLTDETHlpRewardgFEyiH8.isOwner.call({from: accounts[0]});
//		await SLTDETHlpRewardgFEyiH8.exit.call({from: accounts[1]});
//		const uint256TLB4vz = await SLTDETHlpRewardgFEyiH8.withdraw.call(uintUlpKDVq, {from: accounts[4]});
//		const uint256KliVNSx = await SLTDETHlpRewardgFEyiH8.totalSupply.call({from: accounts[0]});

		await expect(SLTDETHlpRewardgFEyiH8.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardgFEyiH8 = await SLTDETHlpReward.new({from: accounts[0]});
		const addressWpLxdl8 = accounts[4]
		const boolQDGkSx2 = await SLTDETHlpRewardgFEyiH8.isOwner.call({from: accounts[0]});
		const addressjLx5hOt = await SLTDETHlpRewardgFEyiH8.owner.call({from: accounts[0]});
		const uint256KcrmO3l = await SLTDETHlpRewardgFEyiH8.balanceOf.call(addressWpLxdl8, {from: accounts[4]});

		assert.equal(addressjLx5hOt, 0x499541eFDB5c6CbD39374D6137149e106472A0B1)
		assert.equal(boolQDGkSx2, true)
		assert.equal(uint256KcrmO3l, BigInt("0"))
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardYfpQrhU = await SLTDETHlpReward.new({from: accounts[5]});
		const addressysPxNQm = accounts[0]
		const addressIWEDaMV = accounts[5]
		const addressPORAaKN = await SLTDETHlpRewardYfpQrhU.setStakeAddress.call(addressysPxNQm, {from: accounts[5]});
//		await SLTDETHlpRewardYfpQrhU.renounceOwnership.call({from: accounts[2]});
//		const addressAgWJex1 = await SLTDETHlpRewardYfpQrhU.updateReward.call(addressIWEDaMV, {from: accounts[1]});

		await expect(SLTDETHlpRewardYfpQrhU.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardtaO4LOw = await SLTDETHlpReward.new({from: accounts[1]});
		const addressM5Uh8Oh = "0x0000000000000000000000000000000000000001"
		const uint256NRpfQou = await SLTDETHlpRewardtaO4LOw.lastTimeRewardApplicable.call({from: accounts[2]});
//		await SLTDETHlpRewardtaO4LOw.renounceOwnership.call({from: accounts[1]});
//		const addressB9NPwZr = await SLTDETHlpRewardtaO4LOw.transferOwnership.call(addressM5Uh8Oh, {from: accounts[3]});
//		await SLTDETHlpRewardtaO4LOw.exit.call({from: accounts[4]});
//		await SLTDETHlpRewardtaO4LOw.getReward.call({from: accounts[0]});

		assert.equal(uint256NRpfQou, BigInt("0"))
		await expect(SLTDETHlpRewardtaO4LOw.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardkRcnTBT = await SLTDETHlpReward.new({from: accounts[0]});
		const uintSEi6Khj = BigInt("1453")
		const uintKBuklu = BigInt("688")
		const uintBXYpwhz = BigInt("1543")
		const uint256QN2q7A = await SLTDETHlpRewardkRcnTBT.notifyRewardAmount.call(uintSEi6Khj, {from: accounts[0]});
//		const uint256MhVWZUu = await SLTDETHlpRewardkRcnTBT.notifyRewardAmount.call(uintKBuklu, {from: accounts[3]});
//		const uint256CBZKOZz = await SLTDETHlpRewardkRcnTBT.stake.call(uintBXYpwhz, {from: accounts[1]});

		await expect(SLTDETHlpRewardkRcnTBT.notifyRewardAmount.call(uintKBuklu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardkRcnTBT = await SLTDETHlpReward.new({from: accounts[0]});
		const uintW23HeUF = BigInt("1167")
		const uintPdb8VfN = BigInt("1458")
		const uintlWmh3cI = BigInt("1543")
		const uintwOO4G6y = BigInt("808")
		const uint2564EZdoY = await SLTDETHlpRewardkRcnTBT.setStartTime.call(uintW23HeUF, {from: accounts[0]});
		const uint256QN2q7A = await SLTDETHlpRewardkRcnTBT.notifyRewardAmount.call(uintPdb8VfN, {from: accounts[0]});
//		const uint256CBZKOZz = await SLTDETHlpRewardkRcnTBT.stake.call(uintlWmh3cI, {from: accounts[1]});
//		const uint256vVPPdAA = await SLTDETHlpRewardkRcnTBT.withdraw.call(uintwOO4G6y, {from: accounts[5]});

		await expect(SLTDETHlpRewardkRcnTBT.stake.call(uintlWmh3cI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})