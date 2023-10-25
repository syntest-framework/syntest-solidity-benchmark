const MarsStakingRewards = artifacts.require("MarsStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MarsStakingRewards', (accounts) => {
	it('test for MarsStakingRewards', async () => {
		const addressvB1zcjr = accounts[5]
		const addressTQGFjfP = accounts[4]
		const addressQdqIIKS = accounts[5]
		const MarsStakingRewardsvMKccVQ = await MarsStakingRewards.new(addressvB1zcjr, addressTQGFjfP, addressQdqIIKS, {from: accounts[4]});
		const byteBMyZ5E = "0x101b1205000303071c09180d0b1a1b080208151d0406131f08121e1f17171a19"
		const bytel50iKj = "0x1e04050507031e10121e170b170f1e0b1d1012040f051f0e0e141e20110a2003"
		const uintYt3tFj = BigInt("18")
		const uintFQLsdUp = BigInt("290")
		const uinthSc87r = BigInt("432")
		const uint256cctN7EJ = await MarsStakingRewardsvMKccVQ.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256qy7FlRo = await MarsStakingRewardsvMKccVQ.lastTimeRewardApplicable.call({from: accounts[3]});
		await MarsStakingRewardsvMKccVQ.onlyOwner.call({from: accounts[0]});
		const uint256fuYhVVG = await MarsStakingRewardsvMKccVQ.stakeWithPermit.call(uinthSc87r, uintFQLsdUp, uintYt3tFj, bytel50iKj, byteBMyZ5E, {from: accounts[2]});
		const addressRBF0GnX = await MarsStakingRewardsvMKccVQ.owner.call({from: accounts[0]});
		const uint256b4sA0Iz = await MarsStakingRewardsvMKccVQ.rewardPerToken.call({from: accounts[3]});

		assert.equal(uint256cctN7EJ, BigInt("0"))
		assert.equal(uint256qy7FlRo, BigInt("0"))
		await expect(MarsStakingRewardsvMKccVQ.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresshxFJIQh = accounts[1]
		const addressEm8oIvZ = accounts[2]
		const addressm4Bampg = accounts[1]
		const MarsStakingRewardsQWR5jaZ = await MarsStakingRewards.new(addresshxFJIQh, addressEm8oIvZ, addressm4Bampg, {from: "0x0000000000000000000000000000000000000001"});
		const addressqSQiVQ5 = accounts[3]
		const addressh8LcyBt = accounts[1]
		const addressAaVbZ1 = accounts[1]
		const uint256uA5yVHh = await MarsStakingRewardsQWR5jaZ.balanceOf.call(addressqSQiVQ5, {from: accounts[5]});
		await MarsStakingRewardsQWR5jaZ.onlyRewardsDistribution.call({from: accounts[3]});
		const boolzBwIg19 = await MarsStakingRewardsQWR5jaZ.isOwner.call({from: accounts[1]});
		const addressYyWabOO = await MarsStakingRewardsQWR5jaZ.updateReward.call(addressh8LcyBt, {from: accounts[0]});
		const addressc59byY = await MarsStakingRewardsQWR5jaZ.transferOwnership.call(addressAaVbZ1, {from: accounts[1]});
	});

	it('test for MarsStakingRewards', async () => {
		const addresst6WVRzb = "0x0000000000000000000000000000000000000001"
		const addressOGV3k20 = accounts[5]
		const addressAWaVsk5 = accounts[0]
		const MarsStakingRewardsR6BbYW8 = await MarsStakingRewards.new(addresst6WVRzb, addressOGV3k20, addressAWaVsk5, {from: accounts[5]});
		const uintKtm0eFx = BigInt("1027")
		const addressM76IRUk = "0x0000000000000000000000000000000000000001"
		const bytesfDrzAj = "0x06030413111309111f0d0110151c1903100b1b001d1e100a0b1e1812101b1305"
		const bytecGdFIFM = "0x0b190101201f14041d17021015130814161b1a0d010b030c0e09081607150307"
		const uintDB37srl = BigInt("247")
		const uinthv0DQk5 = BigInt("307")
		const uintgIjcm6x = BigInt("596")
		const uintQl2wv8e = BigInt("1418")
		const uintzbIBRcO = BigInt("1030")
		const addressjJujZCX = await MarsStakingRewardsR6BbYW8.inCaseTokensGetStuck.call(addressM76IRUk, uintKtm0eFx, {from: accounts[2]});
		const uint256fwIZbaT = await MarsStakingRewardsR6BbYW8.stakeWithPermit.call(uintgIjcm6x, uinthv0DQk5, uintDB37srl, bytecGdFIFM, bytesfDrzAj, {from: accounts[4]});
		const uint256UxgVzkx = await MarsStakingRewardsR6BbYW8.notifyRewardAmount.call(uintzbIBRcO, uintQl2wv8e, {from: accounts[0]});

		await expect(MarsStakingRewardsR6BbYW8.inCaseTokensGetStuck.call(addressM76IRUk, uintKtm0eFx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressgixV6iN = accounts[4]
		const addressHsimkqB = accounts[3]
		const addressqAydAD = accounts[4]
		const MarsStakingRewardsw7MJ3w7 = await MarsStakingRewards.new(addressgixV6iN, addressHsimkqB, addressqAydAD, {from: accounts[0]});
		const uintQIbnGrs = BigInt("82")
		const uintr7CcmLn = BigInt("1694")
		const uintRXqRSW4 = BigInt("1836")
		const uintiT2N3Yd = BigInt("1148")
		const uintBXvoXN3 = BigInt("1771")
		const addressTdnKAGZ = accounts[0]
		const uint256LtavdTV = await MarsStakingRewardsw7MJ3w7.notifyRewardAmount.call(uintr7CcmLn, uintQIbnGrs, {from: accounts[4]});
		await MarsStakingRewardsw7MJ3w7.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256URX5xTH = await MarsStakingRewardsw7MJ3w7.notifyRewardAmount.call(uintiT2N3Yd, uintRXqRSW4, {from: accounts[2]});
		const addressBGomm0 = await MarsStakingRewardsw7MJ3w7.inCaseTokensGetStuck.call(addressTdnKAGZ, uintBXvoXN3, {from: accounts[0]});
		const uint256uKgoo4F = await MarsStakingRewardsw7MJ3w7.getRewardForDuration.call({from: accounts[4]});
		await MarsStakingRewardsw7MJ3w7.getReward.call({from: accounts[2]});

		await expect(MarsStakingRewardsw7MJ3w7.notifyRewardAmount.call(uintr7CcmLn, uintQIbnGrs, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressl3cZvXi = accounts[1]
		const addressxKpYgB8 = accounts[4]
		const addressY5VR59i = accounts[2]
		const MarsStakingRewardsZQJzelH = await MarsStakingRewards.new(addressl3cZvXi, addressxKpYgB8, addressY5VR59i, {from: accounts[1]});
		const uintthWRYiv = BigInt("1866")
		const uintejqsEA = BigInt("909")
		const boolPv0qpkm = await MarsStakingRewardsZQJzelH.isOwner.call({from: accounts[2]});
		const uint256LOKP178 = await MarsStakingRewardsZQJzelH.totalSupply.call({from: accounts[5]});
		const uint256AdAqP3C = await MarsStakingRewardsZQJzelH.notifyRewardAmount.call(uintejqsEA, uintthWRYiv, {from: accounts[4]});

		assert.equal(boolPv0qpkm, false)
		assert.equal(uint256LOKP178, BigInt("0"))
		await expect(MarsStakingRewardsZQJzelH.notifyRewardAmount.call(uintejqsEA, uintthWRYiv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresskMyihh = accounts[4]
		const addressai7iq2Y = accounts[5]
		const addressgZ90ktY = "0x0000000000000000000000000000000000000001"
		const MarsStakingRewardszugAink = await MarsStakingRewards.new(addresskMyihh, addressai7iq2Y, addressgZ90ktY, {from: accounts[0]});
		const uinta6X9I0 = BigInt("1246")
		const uint256nBqRGrv = await MarsStakingRewardszugAink.getRewardForDuration.call({from: accounts[3]});
		const uint256UDhnAup = await MarsStakingRewardszugAink.stake.call(uinta6X9I0, {from: accounts[1]});
		await MarsStakingRewardszugAink.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256nBqRGrv, BigInt("0"))
		await expect(MarsStakingRewardszugAink.stake.call(uinta6X9I0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressrNmNBzB = accounts[4]
		const addresscNuiNOC = accounts[0]
		const addressW3tslr = accounts[0]
		const MarsStakingRewardsbgTDPjA = await MarsStakingRewards.new(addressrNmNBzB, addresscNuiNOC, addressW3tslr, {from: accounts[1]});
		await MarsStakingRewardsbgTDPjA.exit.call({from: accounts[2]});
		await MarsStakingRewardsbgTDPjA.onlyOwner.call({from: accounts[4]});

		await expect(MarsStakingRewardsbgTDPjA.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressbYKkaB = accounts[3]
		const addressLheVVi5 = accounts[3]
		const addressVrfNCkm = accounts[0]
		const MarsStakingRewardsw50CM5 = await MarsStakingRewards.new(addressbYKkaB, addressLheVVi5, addressVrfNCkm, {from: accounts[4]});
		const uint256s8cwpQ = await MarsStakingRewardsw50CM5.getRewardForDuration.call({from: accounts[4]});
		const addressuYgXICV = await MarsStakingRewardsw50CM5.owner.call({from: accounts[4]});
		const uint256BA9XkO3 = await MarsStakingRewardsw50CM5.lastTimeRewardApplicable.call({from: accounts[5]});

		assert.equal(addressuYgXICV, 0xB0EF5Cc8ab30E3D1aa989e58b4710a91cFfAa619)
		assert.equal(uint256BA9XkO3, BigInt("0"))
		assert.equal(uint256s8cwpQ, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addresssQi4DpR = accounts[3]
		const addressJnMA1TU = accounts[3]
		const addressXUSuk3k = accounts[0]
		const MarsStakingRewardsw50CM5 = await MarsStakingRewards.new(addresssQi4DpR, addressJnMA1TU, addressXUSuk3k, {from: accounts[4]});
		const addresszWzMgig = accounts[3]
		const uint256s8cwpQ = await MarsStakingRewardsw50CM5.getRewardForDuration.call({from: accounts[4]});
		const addressuYgXICV = await MarsStakingRewardsw50CM5.owner.call({from: accounts[4]});
		const uint256xg70Ixr = await MarsStakingRewardsw50CM5.balanceOf.call(addresszWzMgig, {from: accounts[0]});
		const uint256l5FwNZ = await MarsStakingRewardsw50CM5.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256BA9XkO3 = await MarsStakingRewardsw50CM5.lastTimeRewardApplicable.call({from: accounts[5]});

		assert.equal(addressuYgXICV, 0xB0EF5Cc8ab30E3D1aa989e58b4710a91cFfAa619)
		assert.equal(uint256BA9XkO3, BigInt("0"))
		assert.equal(uint256l5FwNZ, BigInt("0"))
		assert.equal(uint256s8cwpQ, BigInt("0"))
		assert.equal(uint256xg70Ixr, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressZuPvkOa = accounts[4]
		const addressyzR0SB2 = accounts[5]
		const addresslTA0tqv = "0x0000000000000000000000000000000000000001"
		const MarsStakingRewardszugAink = await MarsStakingRewards.new(addressZuPvkOa, addressyzR0SB2, addresslTA0tqv, {from: accounts[0]});
		const uint256nBqRGrv = await MarsStakingRewardszugAink.getRewardForDuration.call({from: accounts[3]});
		await MarsStakingRewardszugAink.renounceOwnership.call({from: accounts[0]});
		await MarsStakingRewardszugAink.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256nBqRGrv, BigInt("0"))
		await expect(MarsStakingRewardszugAink.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressMlejtJM = accounts[1]
		const addressxJobfjq = accounts[2]
		const addressWLCgxxI = accounts[3]
		const MarsStakingRewardskG2i8oU = await MarsStakingRewards.new(addressMlejtJM, addressxJobfjq, addressWLCgxxI, {from: accounts[4]});
		const addressjTJeBcK = accounts[1]
		const uint256GNOUmew = await MarsStakingRewardskG2i8oU.earned.call(addressjTJeBcK, {from: accounts[0]});
		const uint256TdIelJz = await MarsStakingRewardskG2i8oU.getRewardForDuration.call({from: accounts[1]});

		assert.equal(uint256GNOUmew, BigInt("0"))
		assert.equal(uint256TdIelJz, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addresssrIolAK = accounts[1]
		const addressHeHiOD4 = accounts[2]
		const addressE3EiT2v = accounts[3]
		const MarsStakingRewardskG2i8oU = await MarsStakingRewards.new(addresssrIolAK, addressHeHiOD4, addressE3EiT2v, {from: accounts[4]});
		const addressFTPkQTp = accounts[2]
		const uint256C3FWoG9 = await MarsStakingRewardskG2i8oU.rewardPerToken.call({from: accounts[2]});
		const addressdG3bSwC = await MarsStakingRewardskG2i8oU.transferOwnership.call(addressFTPkQTp, {from: accounts[4]});
		const uint256WWtesFD = await MarsStakingRewardskG2i8oU.totalSupply.call({from: accounts[2]});

		assert.equal(uint256C3FWoG9, BigInt("0"))
		assert.equal(uint256WWtesFD, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressvFBlfYx = accounts[1]
		const addressbqtxwMK = accounts[2]
		const addressGvgq1qi = accounts[3]
		const MarsStakingRewardskG2i8oU = await MarsStakingRewards.new(addressvFBlfYx, addressbqtxwMK, addressGvgq1qi, {from: accounts[4]});
		const addresshhZnrC = accounts[4]
		const uint256g3nbiqX = await MarsStakingRewardskG2i8oU.getRewardForDuration.call({from: accounts[0]});
		const addressqpvLPGI = await MarsStakingRewardskG2i8oU.setRewardsDistribution.call(addresshhZnrC, {from: accounts[4]});
		const uint256C3FWoG9 = await MarsStakingRewardskG2i8oU.rewardPerToken.call({from: accounts[2]});

		assert.equal(uint256C3FWoG9, BigInt("0"))
		assert.equal(uint256g3nbiqX, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressN6Lvpoi = accounts[1]
		const addressMVS1zs1 = accounts[2]
		const addressQ4gQUOg = accounts[3]
		const MarsStakingRewardskG2i8oU = await MarsStakingRewards.new(addressN6Lvpoi, addressMVS1zs1, addressQ4gQUOg, {from: accounts[4]});
		const uintZFHnGh3 = BigInt("498")
		const addressqvOFYPH = accounts[4]
		const uint256iAkQ1Qr = await MarsStakingRewardskG2i8oU.rewardPerToken.call({from: accounts[4]});
		const addressYsV0xes = await MarsStakingRewardskG2i8oU.inCaseTokensGetStuck.call(addressqvOFYPH, uintZFHnGh3, {from: accounts[4]});
		const uint256TdIelJz = await MarsStakingRewardskG2i8oU.getRewardForDuration.call({from: accounts[1]});

		assert.equal(uint256iAkQ1Qr, BigInt("0"))
		await expect(MarsStakingRewardskG2i8oU.inCaseTokensGetStuck.call(addressqvOFYPH, uintZFHnGh3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressJwguRf6 = accounts[1]
		const addresspMO4VQc = accounts[2]
		const addressIfi17IN = accounts[3]
		const MarsStakingRewardskG2i8oU = await MarsStakingRewards.new(addressJwguRf6, addresspMO4VQc, addressIfi17IN, {from: accounts[4]});
		const uintTJQlZkl = BigInt("498")
		const addressbFx9Ucj = accounts[3]
		const uint256iAkQ1Qr = await MarsStakingRewardskG2i8oU.rewardPerToken.call({from: accounts[4]});
		const addressYsV0xes = await MarsStakingRewardskG2i8oU.inCaseTokensGetStuck.call(addressbFx9Ucj, uintTJQlZkl, {from: accounts[4]});
		const uint256TdIelJz = await MarsStakingRewardskG2i8oU.getRewardForDuration.call({from: accounts[1]});

		assert.equal(uint256iAkQ1Qr, BigInt("0"))
		await expect(MarsStakingRewardskG2i8oU.inCaseTokensGetStuck.call(addressbFx9Ucj, uintTJQlZkl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})