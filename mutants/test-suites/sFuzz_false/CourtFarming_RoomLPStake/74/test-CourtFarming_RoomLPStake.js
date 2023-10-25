const CourtFarming_RoomLPStake = artifacts.require("CourtFarming_RoomLPStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_RoomLPStake', (accounts) => {
	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakewKnmJua = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const uintYfp0d3e = BigInt("1415")
		const uint25607tj34 = await CourtFarming_RoomLPStakewKnmJua.blockNumber.call({from: accounts[3]});
		const boolImqFo2J = await CourtFarming_RoomLPStakewKnmJua.stakeIncvRewards.call(uintYfp0d3e, {from: accounts[1]});
		const uint256LIhwyQh = await CourtFarming_RoomLPStakewKnmJua.lastUpdateBlock.call({from: accounts[1]});

		assert.equal(boolImqFo2J, false)
		assert.equal(uint25607tj34, BigInt("1130"))
		assert.equal(uint256LIhwyQh, BigInt("1130"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakexZFbFQ = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const addressLiFY2nH = accounts[4]
		const uint25611KpXX = await CourtFarming_RoomLPStakexZFbFQ.blockNumber.call({from: accounts[4]});
		const uint256DVpk0VR = await CourtFarming_RoomLPStakexZFbFQ.balanceOf.call(addressLiFY2nH, {from: accounts[1]});
		const uint256YbrTQG = await CourtFarming_RoomLPStakexZFbFQ.totalStaked.call({from: accounts[3]});

		assert.equal(uint25611KpXX, BigInt("1130"))
		assert.equal(uint256DVpk0VR, BigInt("0"))
		assert.equal(uint256YbrTQG, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakebwGZANL = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const addressuvci836 = accounts[0]
		const addressxUwwZEM = accounts[1]
		const addresssmRHrNh = accounts[4]
		const addresslWVkVb = accounts[0]
		const addressmsbcwoe = await CourtFarming_RoomLPStakebwGZANL.getBeneficiaryInfo.call(addressuvci836, {from: accounts[3]});
		const uint256ENnOEo1 = await CourtFarming_RoomLPStakebwGZANL.rewards.call(addressxUwwZEM, {from: accounts[2]});
		const addressgQP84dL = await CourtFarming_RoomLPStakebwGZANL.getBeneficiaryInfo.call(addresssmRHrNh, {from: accounts[2]});
		const uint256GgjhYUC = await CourtFarming_RoomLPStakebwGZANL.getCurrentTime.call({from: accounts[2]});
		const uint256SMRVL1h = await CourtFarming_RoomLPStakebwGZANL.blockNumber.call({from: accounts[2]});
//		const addressEO162s = await CourtFarming_RoomLPStakebwGZANL.setCourtStake.call(addresslWVkVb, {from: accounts[2]});

		assert.equal(uint256GgjhYUC, BigInt("1630199400"))
		assert.equal(uint256SMRVL1h, BigInt("1130"))
		await expect(CourtFarming_RoomLPStakebwGZANL.setCourtStake.call(addresslWVkVb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeaiiq4n = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const addressc4AaCDi = "0x0000000000000000000000000000000000000001"
		const uintLLjIzeB = BigInt("1833")
		const uint256SF8Y9HV = await CourtFarming_RoomLPStakeaiiq4n.incvRewardInfo.call({from: accounts[1]});
		const uint256jj8chTp = await CourtFarming_RoomLPStakeaiiq4n.rewards.call(addressc4AaCDi, {from: accounts[1]});
//		const uint256aYr6tOn = await CourtFarming_RoomLPStakeaiiq4n.stake.call(uintLLjIzeB, {from: accounts[1]});

		await expect(CourtFarming_RoomLPStakeaiiq4n.stake.call(uintLLjIzeB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStaken5o9Zi = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const booliGcciis = false
		const uintvJhTJgd = BigInt("1652")
		const addressgPVM8iq = accounts[1]
		const addressckVjqs = accounts[1]
		const uintKHCDnNC = BigInt("1576")
		const uintyI0yqqL = BigInt("1123")
		const uintgoSkTK = BigInt("1483")
		const uintbmzrCey = BigInt("170")
//		const uint256rp2fSdA = await CourtFarming_RoomLPStaken5o9Zi.unstake.call(uintvJhTJgd, booliGcciis, {from: "0x0000000000000000000000000000000000000001"});
//		const addressKAbFNi = await CourtFarming_RoomLPStaken5o9Zi.setCourtStake.call(addressgPVM8iq, {from: accounts[0]});
//		const addressoyQwmdk = await CourtFarming_RoomLPStaken5o9Zi.updateReward.call(addressckVjqs, {from: accounts[1]});
//		await CourtFarming_RoomLPStaken5o9Zi.changeStakeParameters.call(uintgoSkTK, uintyI0yqqL, uintKHCDnNC, {from: accounts[2]});
//		const uint256cpW99KO = await CourtFarming_RoomLPStaken5o9Zi.stake.call(uintbmzrCey, {from: accounts[4]});

		await expect(CourtFarming_RoomLPStaken5o9Zi.unstake.call(uintvJhTJgd, booliGcciis, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeqaoriUr = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const addressBzdKSKr = accounts[2]
		const addressJlnYpcE = accounts[3]
		const uintaN1U6B = BigInt("825")
		const uint256a00EwKD = await CourtFarming_RoomLPStakeqaoriUr.rewards.call(addressBzdKSKr, {from: accounts[5]});
		const addressGaLiMoJ = await CourtFarming_RoomLPStakeqaoriUr.updateReward.call(addressJlnYpcE, {from: accounts[2]});
		const uint256M1ZbWUE = await CourtFarming_RoomLPStakeqaoriUr.expectedRewardsToday.call(uintaN1U6B, {from: accounts[2]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeeiLJf6k = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addressxRmM712 = accounts[4]
		const uint256XYitOpg = await CourtFarming_RoomLPStakeeiLJf6k.totalStaked.call({from: accounts[3]});
		const uint256OMXgqgi = await CourtFarming_RoomLPStakeeiLJf6k.incvRewardClaim.call({from: accounts[2]});
		const addressiP05jGF = await CourtFarming_RoomLPStakeeiLJf6k.updateReward.call(addressxRmM712, {from: accounts[3]});

		assert.equal(uint256OMXgqgi, BigInt("0"))
		assert.equal(uint256XYitOpg, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeWZmBL3v = await CourtFarming_RoomLPStake.new({from: "0x0000000000000000000000000000000000000001"});
		const uintOQV7MfC = BigInt("438")
		const uintKgko5oR = BigInt("1680")
		const uint256SeiqNQ1 = await CourtFarming_RoomLPStakeWZmBL3v.stake.call(uintOQV7MfC, {from: accounts[0]});
		const uint256zbYcYj = await CourtFarming_RoomLPStakeWZmBL3v.expectedRewardsToday.call(uintKgko5oR, {from: accounts[1]});
		const uint256KUM0paL = await CourtFarming_RoomLPStakeWZmBL3v.incvRewardClaim.call({from: accounts[4]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakero5TqYT = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const addresslkSMFw4 = accounts[2]
		const uintamiiss = BigInt("1830")
		const uintUMeJRnv = BigInt("1201")
		const uintdxd6EKe = BigInt("1907")
		const uint256vEd1dpN = await CourtFarming_RoomLPStakero5TqYT.totalStaked.call({from: accounts[1]});
		const uint256ZYqsuTD = await CourtFarming_RoomLPStakero5TqYT.lastUpdateBlock.call({from: accounts[2]});
		const addressWzssqjT = await CourtFarming_RoomLPStakero5TqYT.getBeneficiaryInfo.call(addresslkSMFw4, {from: "0x0000000000000000000000000000000000000001"});
//		await CourtFarming_RoomLPStakero5TqYT.changeStakeParameters.call(uintdxd6EKe, uintUMeJRnv, uintamiiss, {from: accounts[1]});

		assert.equal(uint256ZYqsuTD, BigInt("1130"))
		assert.equal(uint256vEd1dpN, BigInt("0"))
		await expect(CourtFarming_RoomLPStakero5TqYT.changeStakeParameters.call(uintdxd6EKe, uintUMeJRnv, uintamiiss, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakero5TqYT = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintT096qav = BigInt("919")
		const addressNN7ocyS = accounts[4]
		const uintLih6iv = BigInt("97")
		const uint256RqoVtI3 = await CourtFarming_RoomLPStakero5TqYT.lastUpdateBlock.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256vEd1dpN = await CourtFarming_RoomLPStakero5TqYT.totalStaked.call({from: accounts[1]});
		const boollZ1OHt = await CourtFarming_RoomLPStakero5TqYT.stakeIncvRewards.call(uintT096qav, {from: accounts[4]});
//		const addressPRRY7F2 = await CourtFarming_RoomLPStakero5TqYT.setCourtStake.call(addressNN7ocyS, {from: accounts[1]});
//		const uint256qxGHa2m = await CourtFarming_RoomLPStakero5TqYT.expectedRewardsToday.call(uintLih6iv, {from: accounts[3]});

		assert.equal(boollZ1OHt, false)
		assert.equal(uint256RqoVtI3, BigInt("1130"))
		assert.equal(uint256vEd1dpN, BigInt("0"))
		await expect(CourtFarming_RoomLPStakero5TqYT.setCourtStake.call(addressNN7ocyS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeHuZZdQN = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintIMuLUUQ = BigInt("1462")
		const uintrqqURly = BigInt("1150")
		const uintgkJJFIb = BigInt("773")
//		await CourtFarming_RoomLPStakeHuZZdQN.changeStakeParameters.call(uintgkJJFIb, uintrqqURly, uintIMuLUUQ, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256VJCEAWm = await CourtFarming_RoomLPStakeHuZZdQN.incvRewardInfo.call({from: accounts[0]});

		await expect(CourtFarming_RoomLPStakeHuZZdQN.changeStakeParameters.call(uintgkJJFIb, uintrqqURly, uintIMuLUUQ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeBpJ4jqp = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uintICpQPpv = BigInt("0")
		const uint256gUqGQvj = await CourtFarming_RoomLPStakeBpJ4jqp.stake.call(uintICpQPpv, {from: accounts[4]});
		const uint256mjojB0Q = await CourtFarming_RoomLPStakeBpJ4jqp.incvRewardClaim.call({from: accounts[4]});

		assert.equal(uint256mjojB0Q, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeO5AM2OV = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintGwDUYrO = BigInt("1097")
		const boolAeMoUvq = false
		const uintn2dNygo = BigInt("0")
		const addressl4ywQaY = accounts[2]
		const boolaZgZv6b = true
		const uintfr9nysO = BigInt("1815")
		const uintR7gp03y = BigInt("1106")
		const uintGrMZ7rq = BigInt("640")
		const uintLMHwpkO = BigInt("560")
		const uinttyOlaTg = BigInt("436")
		const uint256ReDVbat = await CourtFarming_RoomLPStakeO5AM2OV.incvRewardClaim.call({from: accounts[3]});
		const uint256TxZvKEu = await CourtFarming_RoomLPStakeO5AM2OV.expectedRewardsToday.call(uintGwDUYrO, {from: accounts[0]});
		const uint256vrRZtvB = await CourtFarming_RoomLPStakeO5AM2OV.unstake.call(uintn2dNygo, boolAeMoUvq, {from: accounts[4]});
		const addressxy2i9Di = await CourtFarming_RoomLPStakeO5AM2OV.getBeneficiaryInfo.call(addressl4ywQaY, {from: accounts[2]});
//		const uint256ptXQCAf = await CourtFarming_RoomLPStakeO5AM2OV.unstake.call(uintfr9nysO, boolaZgZv6b, {from: accounts[2]});
//		const uint256CW7MezQ = await CourtFarming_RoomLPStakeO5AM2OV.expectedRewardsToday.call(uintR7gp03y, {from: accounts[2]});
//		await CourtFarming_RoomLPStakeO5AM2OV.changeStakeParameters.call(uinttyOlaTg, uintLMHwpkO, uintGrMZ7rq, {from: accounts[3]});

		assert.equal(uint256ReDVbat, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeO5AM2OV.unstake.call(uintfr9nysO, boolaZgZv6b, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakero5TqYT = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintwOPXJbO = BigInt("1598")
		const uintbRc58mt = BigInt("0")
		const uintNRo4WNv = BigInt("494")
		const boolF8Ij22j = await CourtFarming_RoomLPStakero5TqYT.stakeIncvRewards.call(uintwOPXJbO, {from: accounts[1]});
		const boollBlhoF3 = await CourtFarming_RoomLPStakero5TqYT.stakeIncvRewards.call(uintbRc58mt, {from: accounts[4]});
		const uint256z7705l3 = await CourtFarming_RoomLPStakero5TqYT.expectedRewardsToday.call(uintNRo4WNv, {from: accounts[0]});

		assert.equal(boolF8Ij22j, false)
		assert.equal(boollBlhoF3, false)
	});
})