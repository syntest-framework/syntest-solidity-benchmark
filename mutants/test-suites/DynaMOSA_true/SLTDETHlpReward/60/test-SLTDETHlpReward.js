const SLTDETHlpReward = artifacts.require("SLTDETHlpReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDETHlpReward', (accounts) => {
	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewarduW2XLqf = await SLTDETHlpReward.new({from: accounts[4]});
		const addressEAmwmiZ = accounts[0]
		const uintfLVnj0k = BigInt("557")
		const addressUVSE90j = accounts[3]
//		const addressKycZRC8 = await SLTDETHlpRewarduW2XLqf.setRewardDistribution.call(addressEAmwmiZ, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256lOI1wLA = await SLTDETHlpRewarduW2XLqf.notifyRewardAmount.call(uintfLVnj0k, {from: accounts[2]});
//		const uint256x0tOXjq = await SLTDETHlpRewarduW2XLqf.earned.call(addressUVSE90j, {from: accounts[0]});

		await expect(SLTDETHlpRewarduW2XLqf.setRewardDistribution.call(addressEAmwmiZ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardmzfmVk8 = await SLTDETHlpReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addressFxUzELu = accounts[4]
		const uintfN3cO21 = BigInt("40")
		const uintZilYvqJ = BigInt("2021")
		const boolwSWiCYO = await SLTDETHlpRewardmzfmVk8.isOwner.call({from: accounts[3]});
		const uint256hxZWaBs = await SLTDETHlpRewardmzfmVk8.earned.call(addressFxUzELu, {from: accounts[3]});
		const uint256u7MpF7L = await SLTDETHlpRewardmzfmVk8.stake.call(uintfN3cO21, {from: accounts[3]});
		await SLTDETHlpRewardmzfmVk8.checkStart.call({from: accounts[4]});
		const uint256a2pafTO = await SLTDETHlpRewardmzfmVk8.rewardPerToken.call({from: accounts[2]});
		const uint256j4uzb84 = await SLTDETHlpRewardmzfmVk8.withdraw.call(uintZilYvqJ, {from: accounts[2]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardfg9GhYl = await SLTDETHlpReward.new({from: accounts[0]});
		const addressaMW9l58 = await SLTDETHlpRewardfg9GhYl.owner.call({from: accounts[0]});
//		await SLTDETHlpRewardfg9GhYl.checkStart.call({from: accounts[3]});

		assert.equal(addressaMW9l58, 0x4b72b6676a40B9419b54EF8A1e7db64eaa553dfa)
		await expect(SLTDETHlpRewardfg9GhYl.checkStart.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardswWjU1t = await SLTDETHlpReward.new({from: accounts[2]});
		const uintCsQSMpB = BigInt("1620")
		const address8yxn9U = "0x0000000000000000000000000000000000000001"
		const addresszCcxcWR = "0x0000000000000000000000000000000000000001"
//		const uint256x2UDIoy = await SLTDETHlpRewardswWjU1t.stake.call(uintCsQSMpB, {from: "0x0000000000000000000000000000000000000001"});
//		await SLTDETHlpRewardswWjU1t.renounceOwnership.call({from: accounts[3]});
//		const addressNSvqHWA = await SLTDETHlpRewardswWjU1t.transferOwnership.call(address8yxn9U, {from: accounts[1]});
//		const addressvlAMnpn = await SLTDETHlpRewardswWjU1t.setStakeAddress.call(addresszCcxcWR, {from: accounts[3]});
//		const uint256VcCNie = await SLTDETHlpRewardswWjU1t.totalSupply.call({from: accounts[1]});
//		await SLTDETHlpRewardswWjU1t.checkStart.call({from: accounts[3]});

		await expect(SLTDETHlpRewardswWjU1t.stake.call(uintCsQSMpB, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardTgtcIGC = await SLTDETHlpReward.new({from: accounts[0]});
		const addressXFwTJxB = accounts[1]
		const addressIGnGpug = accounts[1]
		const addressxKQNTI5 = accounts[2]
//		await SLTDETHlpRewardTgtcIGC.getReward.call({from: accounts[3]});
//		await SLTDETHlpRewardTgtcIGC.checkStart.call({from: accounts[0]});
//		const uint256BWl8Ndz = await SLTDETHlpRewardTgtcIGC.earned.call(addressXFwTJxB, {from: accounts[2]});
//		const addressh9MVUtQ = await SLTDETHlpRewardTgtcIGC.transferOwnership.call(addressIGnGpug, {from: accounts[0]});
//		const uint256GeFcriV = await SLTDETHlpRewardTgtcIGC.balanceOf.call(addressxKQNTI5, {from: accounts[1]});

		await expect(SLTDETHlpRewardTgtcIGC.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardl8hGszq = await SLTDETHlpReward.new({from: accounts[4]});
		const addressiU62l4w = accounts[0]
		const addressrCIzJZ9 = accounts[1]
		const uintpszdZQC = BigInt("1215")
//		await SLTDETHlpRewardl8hGszq.exit.call({from: accounts[1]});
//		const addressC2MaMwm = await SLTDETHlpRewardl8hGszq.transferOwnership.call(addressiU62l4w, {from: accounts[1]});
//		const addressFBr2FE = await SLTDETHlpRewardl8hGszq.setRewardDistribution.call(addressrCIzJZ9, {from: accounts[4]});
//		const uint256EWvJGmw = await SLTDETHlpRewardl8hGszq.stake.call(uintpszdZQC, {from: accounts[5]});

		await expect(SLTDETHlpRewardl8hGszq.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardlh2HuE = await SLTDETHlpReward.new({from: accounts[3]});
		const uintyyZ9Gvf = BigInt("772")
		const addressR2HyJx = accounts[4]
//		const uint256YG5tn2w = await SLTDETHlpRewardlh2HuE.notifyRewardAmount.call(uintyyZ9Gvf, {from: accounts[0]});
//		const addresst0FnKAj = await SLTDETHlpRewardlh2HuE.updateReward.call(addressR2HyJx, {from: accounts[3]});
//		const uint256bKcTuHb = await SLTDETHlpRewardlh2HuE.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
//		await SLTDETHlpRewardlh2HuE.exit.call({from: accounts[4]});

		await expect(SLTDETHlpRewardlh2HuE.notifyRewardAmount.call(uintyyZ9Gvf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardyrFvSM = await SLTDETHlpReward.new({from: accounts[3]});
		const uintOdKByYw = BigInt("1620")
//		const uint256HVyMIMp = await SLTDETHlpRewardyrFvSM.remainingReward.call({from: accounts[5]});
//		const uint256rI4JUbQ = await SLTDETHlpRewardyrFvSM.setStartTime.call(uintOdKByYw, {from: accounts[2]});
//		await SLTDETHlpRewardyrFvSM.onlyRewardDistribution.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256itGo0m = await SLTDETHlpRewardyrFvSM.lastTimeRewardApplicable.call({from: accounts[2]});
//		await SLTDETHlpRewardyrFvSM.checkStart.call({from: accounts[2]});

		await expect(SLTDETHlpRewardyrFvSM.remainingReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardTgtcIGC = await SLTDETHlpReward.new({from: accounts[0]});
		const addressQ0gmwpt = accounts[2]
		const addressUBqeHdp = accounts[1]
		const addresseKP8hAn = accounts[2]
//		await SLTDETHlpRewardTgtcIGC.getReward.call({from: accounts[3]});
//		const uint256BWl8Ndz = await SLTDETHlpRewardTgtcIGC.earned.call(addressQ0gmwpt, {from: accounts[2]});
//		const addressh9MVUtQ = await SLTDETHlpRewardTgtcIGC.transferOwnership.call(addressUBqeHdp, {from: accounts[0]});
//		const uint256GeFcriV = await SLTDETHlpRewardTgtcIGC.balanceOf.call(addresseKP8hAn, {from: accounts[1]});

		await expect(SLTDETHlpRewardTgtcIGC.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardTgtcIGC = await SLTDETHlpReward.new({from: accounts[0]});
		const addressbEoqQkf = accounts[2]
		const uintzAa2HDR = BigInt("644")
		const addressdIdIHn9 = accounts[3]
//		await SLTDETHlpRewardTgtcIGC.getReward.call({from: accounts[3]});
//		const uint256BWl8Ndz = await SLTDETHlpRewardTgtcIGC.earned.call(addressbEoqQkf, {from: accounts[2]});
//		const uint256CAkNUQv = await SLTDETHlpRewardTgtcIGC.withdraw.call(uintzAa2HDR, {from: accounts[0]});
//		const uint256GeFcriV = await SLTDETHlpRewardTgtcIGC.balanceOf.call(addressdIdIHn9, {from: accounts[1]});

		await expect(SLTDETHlpRewardTgtcIGC.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardTgtcIGC = await SLTDETHlpReward.new({from: accounts[0]});
		const addressoaXSk4h = accounts[4]
		const addressFkhXThf = accounts[3]
		const addressT9RKdRi = accounts[4]
		const addressxH1glwK = accounts[1]
		const addressLNWYLkZ = accounts[2]
		const uint256Kn23Tis = await SLTDETHlpRewardTgtcIGC.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256uOFocc1 = await SLTDETHlpRewardTgtcIGC.lastTimeRewardApplicable.call({from: accounts[0]});
		const addressvDiSCD = await SLTDETHlpRewardTgtcIGC.setStakeAddress.call(addressoaXSk4h, {from: accounts[0]});
		const uint256BWl8Ndz = await SLTDETHlpRewardTgtcIGC.earned.call(addressFkhXThf, {from: accounts[2]});
//		const addressGLIG5i7 = await SLTDETHlpRewardTgtcIGC.setStakeAddress.call(addressT9RKdRi, {from: accounts[2]});
//		const addressh9MVUtQ = await SLTDETHlpRewardTgtcIGC.transferOwnership.call(addressxH1glwK, {from: accounts[0]});
//		const uint256GeFcriV = await SLTDETHlpRewardTgtcIGC.balanceOf.call(addressLNWYLkZ, {from: accounts[1]});

		assert.equal(uint256BWl8Ndz, BigInt("0"))
		assert.equal(uint256Kn23Tis, BigInt("0"))
		assert.equal(uint256uOFocc1, BigInt("0"))
		await expect(SLTDETHlpRewardTgtcIGC.setStakeAddress.call(addressT9RKdRi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardagjxk7p = await SLTDETHlpReward.new({from: accounts[0]});
		const addressQqJfg4V = accounts[3]
//		await SLTDETHlpRewardagjxk7p.getReward.call({from: accounts[4]});
//		await SLTDETHlpRewardagjxk7p.renounceOwnership.call({from: accounts[0]});
//		const uint256Qa6VBxM = await SLTDETHlpRewardagjxk7p.balanceOf.call(addressQqJfg4V, {from: accounts[3]});

		await expect(SLTDETHlpRewardagjxk7p.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardswWjU1t = await SLTDETHlpReward.new({from: accounts[2]});
		const addressXu1rovB = accounts[2]
		const uintw1T0OZ5 = BigInt("1620")
		const addressuQHx3xB = "0x0000000000000000000000000000000000000001"
		const addressiv08ee9 = accounts[3]
		const addressJLzEnVj = "0x0000000000000000000000000000000000000002"
		const uint256d5sMve9 = await SLTDETHlpRewardswWjU1t.rewardPerToken.call({from: accounts[4]});
//		await SLTDETHlpRewardswWjU1t.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const addresslR3bQva = await SLTDETHlpRewardswWjU1t.setRewardDistribution.call(addressXu1rovB, {from: accounts[2]});
//		const uint256x2UDIoy = await SLTDETHlpRewardswWjU1t.stake.call(uintw1T0OZ5, {from: "0x0000000000000000000000000000000000000001"});
//		await SLTDETHlpRewardswWjU1t.renounceOwnership.call({from: accounts[0]});
//		await SLTDETHlpRewardswWjU1t.onlyRewardDistribution.call({from: accounts[4]});
//		await SLTDETHlpRewardswWjU1t.checkStart.call({from: accounts[5]});
//		const addressNSvqHWA = await SLTDETHlpRewardswWjU1t.transferOwnership.call(addressuQHx3xB, {from: accounts[1]});
//		await SLTDETHlpRewardswWjU1t.onlyRewardDistribution.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint25652w2e8 = await SLTDETHlpRewardswWjU1t.earned.call(addressiv08ee9, {from: accounts[2]});
//		const addressvlAMnpn = await SLTDETHlpRewardswWjU1t.setStakeAddress.call(addressJLzEnVj, {from: accounts[3]});
//		const uint256VcCNie = await SLTDETHlpRewardswWjU1t.totalSupply.call({from: accounts[1]});
//		await SLTDETHlpRewardswWjU1t.checkStart.call({from: accounts[3]});

		assert.equal(uint256d5sMve9, BigInt("0"))
		await expect(SLTDETHlpRewardswWjU1t.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardCrJ1pW = await SLTDETHlpReward.new({from: accounts[2]});
		const uintQgMwkKU = BigInt("1202")
		const uintLBtkIgL = BigInt("1650")
		const uint256hijzuL = await SLTDETHlpRewardCrJ1pW.notifyRewardAmount.call(uintQgMwkKU, {from: accounts[2]});
//		const uint256YDeonC7 = await SLTDETHlpRewardCrJ1pW.stake.call(uintLBtkIgL, {from: accounts[1]});

		await expect(SLTDETHlpRewardCrJ1pW.stake.call(uintLBtkIgL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardTgtcIGC = await SLTDETHlpReward.new({from: accounts[0]});
		const uintZxwoduc = BigInt("182")
		const uint256nVXzdT = await SLTDETHlpRewardTgtcIGC.setStartTime.call(uintZxwoduc, {from: accounts[0]});
//		await SLTDETHlpRewardTgtcIGC.getReward.call({from: accounts[3]});
//		const boolPDUViac = await SLTDETHlpRewardTgtcIGC.isOwner.call({from: accounts[3]});

		await expect(SLTDETHlpRewardTgtcIGC.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})