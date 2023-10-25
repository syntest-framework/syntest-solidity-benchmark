const CourtFarming_RoomLPStake = artifacts.require("CourtFarming_RoomLPStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_RoomLPStake', (accounts) => {
	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeNsGT2FD = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uintEfPdVMS = BigInt("1730")
		const uintPW6OHjZ = BigInt("1373")
		const uintVOEHcQf = BigInt("2040")
		const addresscvn18Gt = accounts[0]
		const addressRNQzFhp = accounts[4]
		const addresseTw08wW = accounts[1]
		await CourtFarming_RoomLPStakeNsGT2FD.changeStakeParameters.call(uintVOEHcQf, uintPW6OHjZ, uintEfPdVMS, {from: accounts[5]});
		const uint256XrJg085 = await CourtFarming_RoomLPStakeNsGT2FD.incvRewardInfo.call({from: accounts[2]});
		const uint256rzUf12h = await CourtFarming_RoomLPStakeNsGT2FD.getCurrentTime.call({from: accounts[1]});
		const addressP2ckJMf = await CourtFarming_RoomLPStakeNsGT2FD.getBeneficiaryInfo.call(addresscvn18Gt, {from: accounts[3]});
		const uint2561u6yqI = await CourtFarming_RoomLPStakeNsGT2FD.balanceOf.call(addressRNQzFhp, {from: accounts[4]});
		const uint256mGNLAp = await CourtFarming_RoomLPStakeNsGT2FD.balanceOf.call(addresseTw08wW, {from: accounts[1]});

		await expect(CourtFarming_RoomLPStakeNsGT2FD.changeStakeParameters.call(uintVOEHcQf, uintPW6OHjZ, uintEfPdVMS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakehFIadun = await CourtFarming_RoomLPStake.new({from: "0x0000000000000000000000000000000000000001"});
		const addresspQmGIP = accounts[3]
		const uintvdzA6I = BigInt("1847")
		const boolRneMZs = true
		const uintCyYxiC6 = BigInt("1654")
		const addressSHudnPh = await CourtFarming_RoomLPStakehFIadun.getBeneficiaryInfo.call(addresspQmGIP, {from: "0x0000000000000000000000000000000000000001"});
		const uint256h3eaWhg = await CourtFarming_RoomLPStakehFIadun.stake.call(uintvdzA6I, {from: accounts[4]});
		const uint256TBMlVnC = await CourtFarming_RoomLPStakehFIadun.unstake.call(uintCyYxiC6, boolRneMZs, {from: accounts[4]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakepg4MJN = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const boolv9pjhUc = false
		const uintxrQVoVg = BigInt("1513")
		const booluYZUisk = false
		const uintTmDK2UP = BigInt("1673")
		const boolg0cT3oJ = false
		const uinthc3LvRN = BigInt("123")
		const uint256ctvJ2uV = await CourtFarming_RoomLPStakepg4MJN.unstake.call(uintxrQVoVg, boolv9pjhUc, {from: accounts[3]});
		const uint256jMejKjK = await CourtFarming_RoomLPStakepg4MJN.unstake.call(uintTmDK2UP, booluYZUisk, {from: accounts[1]});
		const uint256jmrALsn = await CourtFarming_RoomLPStakepg4MJN.totalStaked.call({from: accounts[3]});
		const uint256DuOPjeJ = await CourtFarming_RoomLPStakepg4MJN.unstake.call(uinthc3LvRN, boolg0cT3oJ, {from: accounts[1]});

		await expect(CourtFarming_RoomLPStakepg4MJN.unstake.call(uintxrQVoVg, boolv9pjhUc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeYPsgfpG = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const addressROkYH4W = accounts[1]
		const uint256VecaQvP = await CourtFarming_RoomLPStakeYPsgfpG.lastUpdateBlock.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256gFuslZO = await CourtFarming_RoomLPStakeYPsgfpG.incvRewardClaim.call({from: accounts[3]});
		const addresswiCaFG6 = await CourtFarming_RoomLPStakeYPsgfpG.setCourtStake.call(addressROkYH4W, {from: accounts[1]});
		const uint256oaydiGe = await CourtFarming_RoomLPStakeYPsgfpG.incvRewardInfo.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256VecaQvP, BigInt("1234"))
		assert.equal(uint256gFuslZO, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeYPsgfpG.setCourtStake.call(addressROkYH4W, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeOlJLbHR = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintQNeKWHa = BigInt("176")
		const addressQN9LCf = accounts[0]
		const uint256eMhB2u2 = await CourtFarming_RoomLPStakeOlJLbHR.incvRewardInfo.call({from: accounts[0]});
		const uint256ZPZn08Z = await CourtFarming_RoomLPStakeOlJLbHR.getCurrentTime.call({from: accounts[4]});
		const uint256KCJN25i = await CourtFarming_RoomLPStakeOlJLbHR.getCurrentTime.call({from: accounts[4]});
		const booldilWAHl = await CourtFarming_RoomLPStakeOlJLbHR.stakeIncvRewards.call(uintQNeKWHa, {from: "0x0000000000000000000000000000000000000001"});
		const uint256jMJy6fj = await CourtFarming_RoomLPStakeOlJLbHR.rewards.call(addressQN9LCf, {from: accounts[5]});
		const uint256mT05ASN = await CourtFarming_RoomLPStakeOlJLbHR.totalStaked.call({from: accounts[5]});

		assert.equal(booldilWAHl, false)
		assert.equal(uint256KCJN25i, BigInt("1630199731"))
		assert.equal(uint256ZPZn08Z, BigInt("1630199731"))
		assert.equal(uint256mT05ASN, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeS6Z6OnR = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintIX7ezqp = BigInt("1036")
		const addressJeLqqTg = accounts[4]
		const addresseeTmYdY = "0x0000000000000000000000000000000000000001"
		const uintaJOKpZx = BigInt("531")
		const uint256TbnRoPu = await CourtFarming_RoomLPStakeS6Z6OnR.blockNumber.call({from: accounts[0]});
		const booldG9UPSK = await CourtFarming_RoomLPStakeS6Z6OnR.stakeIncvRewards.call(uintIX7ezqp, {from: accounts[2]});
		const uint25673Q9bQ = await CourtFarming_RoomLPStakeS6Z6OnR.balanceOf.call(addressJeLqqTg, {from: accounts[0]});
		const addressawxZKxN = await CourtFarming_RoomLPStakeS6Z6OnR.setCourtStake.call(addresseeTmYdY, {from: accounts[2]});
		const boolEPt8Mg6 = await CourtFarming_RoomLPStakeS6Z6OnR.stakeIncvRewards.call(uintaJOKpZx, {from: accounts[0]});

		assert.equal(booldG9UPSK, false)
		assert.equal(uint25673Q9bQ, BigInt("0"))
		assert.equal(uint256TbnRoPu, BigInt("1234"))
		await expect(CourtFarming_RoomLPStakeS6Z6OnR.setCourtStake.call(addresseeTmYdY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeiEypCfa = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uintTE6HblX = BigInt("1264")
		const uintwDVDSKA = BigInt("398")
		const addressdYmUN61 = accounts[0]
		const boolti3yK37 = await CourtFarming_RoomLPStakeiEypCfa.stakeIncvRewards.call(uintTE6HblX, {from: accounts[5]});
		const uint256oiSrSW1 = await CourtFarming_RoomLPStakeiEypCfa.stake.call(uintwDVDSKA, {from: accounts[2]});
		const uint256jDLRFyj = await CourtFarming_RoomLPStakeiEypCfa.getCurrentTime.call({from: accounts[0]});
		const uint256jBG2Mz8 = await CourtFarming_RoomLPStakeiEypCfa.balanceOf.call(addressdYmUN61, {from: accounts[5]});

		assert.equal(boolti3yK37, false)
		await expect(CourtFarming_RoomLPStakeiEypCfa.stake.call(uintwDVDSKA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeYPsgfpG = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintjhncU0l = BigInt("9")
		const address0BkLVa = accounts[1]
		const uint256VecaQvP = await CourtFarming_RoomLPStakeYPsgfpG.lastUpdateBlock.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256qbfkAQN = await CourtFarming_RoomLPStakeYPsgfpG.expectedRewardsToday.call(uintjhncU0l, {from: accounts[1]});
		const uint256B7vRCRH = await CourtFarming_RoomLPStakeYPsgfpG.getCurrentTime.call({from: accounts[0]});
		const addresswiCaFG6 = await CourtFarming_RoomLPStakeYPsgfpG.setCourtStake.call(address0BkLVa, {from: accounts[1]});
		const uint256oaydiGe = await CourtFarming_RoomLPStakeYPsgfpG.incvRewardInfo.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256B7vRCRH, BigInt("1630199729"))
		assert.equal(uint256VecaQvP, BigInt("1234"))
		await expect(CourtFarming_RoomLPStakeYPsgfpG.setCourtStake.call(address0BkLVa, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeo9itKv = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressKSabojH = accounts[1]
		const addresslKnLYfM = accounts[0]
		const addressTU042uk = accounts[5]
		const uintki7BAEL = BigInt("1470")
		const boolaGK6Xmh = true
		const uintbw0z6UZ = BigInt("1955")
		const addresstnV5MA5 = await CourtFarming_RoomLPStakeo9itKv.getBeneficiaryInfo.call(addressKSabojH, {from: accounts[3]});
		const uint256nUXHy5l = await CourtFarming_RoomLPStakeo9itKv.rewards.call(addresslKnLYfM, {from: accounts[0]});
		const addressJjOL8Xq = await CourtFarming_RoomLPStakeo9itKv.updateReward.call(addressTU042uk, {from: accounts[4]});
		const uint256ZBlXofi = await CourtFarming_RoomLPStakeo9itKv.expectedRewardsToday.call(uintki7BAEL, {from: accounts[3]});
		const uint256E6lUuFm = await CourtFarming_RoomLPStakeo9itKv.unstake.call(uintbw0z6UZ, boolaGK6Xmh, {from: accounts[1]});
		const uint256l6kLeru = await CourtFarming_RoomLPStakeo9itKv.getCurrentTime.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(CourtFarming_RoomLPStakeo9itKv.unstake.call(uintbw0z6UZ, boolaGK6Xmh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeYPsgfpG = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uinteKdogyj = BigInt("0")
		const addressTQz3XQQ = accounts[1]
		const uint256VecaQvP = await CourtFarming_RoomLPStakeYPsgfpG.lastUpdateBlock.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256BH8tCwW = await CourtFarming_RoomLPStakeYPsgfpG.stake.call(uinteKdogyj, {from: accounts[3]});
		const addresswiCaFG6 = await CourtFarming_RoomLPStakeYPsgfpG.setCourtStake.call(addressTQz3XQQ, {from: accounts[1]});

		assert.equal(uint256VecaQvP, BigInt("1234"))
		await expect(CourtFarming_RoomLPStakeYPsgfpG.setCourtStake.call(addressTQz3XQQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeqgjbhEM = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uintLDSIFd9 = BigInt("1064")
		const boolafa9Bqj = true
		const uintnFFWZEz = BigInt("0")
		const uintjDGAbPx = BigInt("980")
		const boolrZaWWJh = await CourtFarming_RoomLPStakeqgjbhEM.stakeIncvRewards.call(uintLDSIFd9, {from: accounts[4]});
		const uint256Ou0IkR0 = await CourtFarming_RoomLPStakeqgjbhEM.getCurrentTime.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256z6O5lZr = await CourtFarming_RoomLPStakeqgjbhEM.incvRewardClaim.call({from: accounts[2]});
		const uint256RjDrIZ3 = await CourtFarming_RoomLPStakeqgjbhEM.unstake.call(uintnFFWZEz, boolafa9Bqj, {from: accounts[4]});
		const uint256akeVEgj = await CourtFarming_RoomLPStakeqgjbhEM.expectedRewardsToday.call(uintjDGAbPx, {from: accounts[5]});

		assert.equal(boolrZaWWJh, false)
		assert.equal(uint256Ou0IkR0, BigInt("1630199735"))
		assert.equal(uint256z6O5lZr, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeOlJLbHR = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintSnrZtx9 = BigInt("0")
		const uintA2yEiif = BigInt("1035")
		const uintS55rdrY = BigInt("1071")
		const booldilWAHl = await CourtFarming_RoomLPStakeOlJLbHR.stakeIncvRewards.call(uintSnrZtx9, {from: "0x0000000000000000000000000000000000000001"});
		const uint2560e0WnP = await CourtFarming_RoomLPStakeOlJLbHR.incvRewardInfo.call({from: accounts[2]});
		const boolqVBj6PV = await CourtFarming_RoomLPStakeOlJLbHR.stakeIncvRewards.call(uintA2yEiif, {from: accounts[5]});
		const boolXho1Jjc = await CourtFarming_RoomLPStakeOlJLbHR.stakeIncvRewards.call(uintS55rdrY, {from: accounts[0]});

		assert.equal(boolXho1Jjc, false)
		assert.equal(booldilWAHl, false)
		assert.equal(boolqVBj6PV, false)
	});
})