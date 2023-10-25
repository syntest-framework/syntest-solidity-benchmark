const CourtFarming_RoomLPStake = artifacts.require("CourtFarming_RoomLPStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_RoomLPStake', (accounts) => {
	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeu0GHQFB = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const boolBVwmRx8 = false
		const uintHtRLjg = BigInt("522")
		const uintKLkKvY = BigInt("1895")
		const uintli5MGL = BigInt("1411")
		const uintqeH94LI = BigInt("676")
		const uint8B58mY = BigInt("1523")
		const uintQpMqFVx = BigInt("84")
		const uintcgpziag = BigInt("1790")
//		const uint256QV427Ag = await CourtFarming_RoomLPStakeu0GHQFB.unstake.call(uintHtRLjg, boolBVwmRx8, {from: accounts[0]});
//		const uint256mmeoO5S = await CourtFarming_RoomLPStakeu0GHQFB.expectedRewardsToday.call(uintKLkKvY, {from: accounts[3]});
//		const boolE1K4Wlm = await CourtFarming_RoomLPStakeu0GHQFB.stakeIncvRewards.call(uintli5MGL, {from: accounts[2]});
//		const uint256H996lOt = await CourtFarming_RoomLPStakeu0GHQFB.incvRewardInfo.call({from: accounts[5]});
//		await CourtFarming_RoomLPStakeu0GHQFB.changeStakeParameters.call(uintQpMqFVx, uint8B58mY, uintqeH94LI, {from: accounts[4]});
//		const uint256z2khth6 = await CourtFarming_RoomLPStakeu0GHQFB.stake.call(uintcgpziag, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CourtFarming_RoomLPStakeu0GHQFB.unstake.call(uintHtRLjg, boolBVwmRx8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeJKuZkmj = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uintCPpS4zE = BigInt("1787")
		const addressDAWIAb = accounts[0]
		const uint256cJxP59x = await CourtFarming_RoomLPStakeJKuZkmj.blockNumber.call({from: accounts[3]});
		const uint256HgtlXrj = await CourtFarming_RoomLPStakeJKuZkmj.expectedRewardsToday.call(uintCPpS4zE, {from: accounts[2]});
		const uint256v36B0iO = await CourtFarming_RoomLPStakeJKuZkmj.rewards.call(addressDAWIAb, {from: accounts[5]});

		assert.equal(uint256cJxP59x, BigInt("1607"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakewWolcgL = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const uintSwiurXY = BigInt("820")
		const uintautRVhO = BigInt("1212")
		const uintTngT5p = BigInt("770")
		const addresscWFT9v = "0x0000000000000000000000000000000000000001"
		const uint256WhVVw0k = await CourtFarming_RoomLPStakewWolcgL.expectedRewardsToday.call(uintSwiurXY, {from: accounts[3]});
		const uint256tRMp8XL = await CourtFarming_RoomLPStakewWolcgL.expectedRewardsToday.call(uintautRVhO, {from: accounts[2]});
		const boolxzvrbHg = await CourtFarming_RoomLPStakewWolcgL.stakeIncvRewards.call(uintTngT5p, {from: accounts[1]});
//		const addressWJDuyl = await CourtFarming_RoomLPStakewWolcgL.setCourtStake.call(addresscWFT9v, {from: accounts[0]});

		assert.equal(boolxzvrbHg, false)
		await expect(CourtFarming_RoomLPStakewWolcgL.setCourtStake.call(addresscWFT9v, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeigVx2FZ = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const boolnrI68AW = false
		const uinthJXD53h = BigInt("1380")
		const uintgQr3QDm = BigInt("449")
		const addressgIRg4gn = accounts[1]
		const uint256Wjx07Gv = await CourtFarming_RoomLPStakeigVx2FZ.incvRewardInfo.call({from: accounts[2]});
//		const uint256hOf1Dc = await CourtFarming_RoomLPStakeigVx2FZ.unstake.call(uinthJXD53h, boolnrI68AW, {from: accounts[2]});
//		const boolAIdMo5o = await CourtFarming_RoomLPStakeigVx2FZ.stakeIncvRewards.call(uintgQr3QDm, {from: accounts[4]});
//		const uint256v4CB4go = await CourtFarming_RoomLPStakeigVx2FZ.incvRewardInfo.call({from: accounts[4]});
//		const uint256RpChmNq = await CourtFarming_RoomLPStakeigVx2FZ.rewards.call(addressgIRg4gn, {from: accounts[2]});

		await expect(CourtFarming_RoomLPStakeigVx2FZ.unstake.call(uinthJXD53h, boolnrI68AW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeiqv9E0z = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uint4NgG2B = BigInt("465")
		const uintEJq5Sl = BigInt("2011")
		const boolWaUBEO = true
		const uinte0ZJJp4 = BigInt("905")
		const uintNM73hXg = BigInt("2027")
//		const uint256zzvGOsS = await CourtFarming_RoomLPStakeiqv9E0z.stake.call(uint4NgG2B, {from: accounts[0]});
//		const uint256Hlp2lJk = await CourtFarming_RoomLPStakeiqv9E0z.expectedRewardsToday.call(uintEJq5Sl, {from: accounts[4]});
//		const uint256MsDZ9nL = await CourtFarming_RoomLPStakeiqv9E0z.unstake.call(uinte0ZJJp4, boolWaUBEO, {from: accounts[3]});
//		const uint256JmlfMSs = await CourtFarming_RoomLPStakeiqv9E0z.getCurrentTime.call({from: accounts[1]});
//		const uint2564tPXvC = await CourtFarming_RoomLPStakeiqv9E0z.stake.call(uintNM73hXg, {from: accounts[2]});
//		const uint256kJ37N5h = await CourtFarming_RoomLPStakeiqv9E0z.lastUpdateBlock.call({from: accounts[0]});

		await expect(CourtFarming_RoomLPStakeiqv9E0z.stake.call(uint4NgG2B, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeSKO4Oa = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uintzZeJ0qC = BigInt("503")
		const uintDNyaMrR = BigInt("1370")
		const uintYnccWnl = BigInt("1685")
		const uintN3pST7 = BigInt("876")
		const addressllM1ETf = accounts[1]
		const uintB5laHyD = BigInt("369")
		const uint256CnYFJu = await CourtFarming_RoomLPStakeSKO4Oa.incvRewardInfo.call({from: accounts[1]});
//		await CourtFarming_RoomLPStakeSKO4Oa.changeStakeParameters.call(uintYnccWnl, uintDNyaMrR, uintzZeJ0qC, {from: accounts[4]});
//		const uint256DLM6Jl1 = await CourtFarming_RoomLPStakeSKO4Oa.incvRewardInfo.call({from: accounts[3]});
//		const uint256IQ9pcK8 = await CourtFarming_RoomLPStakeSKO4Oa.expectedRewardsToday.call(uintN3pST7, {from: accounts[1]});
//		const addressCkirhw = await CourtFarming_RoomLPStakeSKO4Oa.getBeneficiaryInfo.call(addressllM1ETf, {from: accounts[3]});
//		const uint256jSXlJxF = await CourtFarming_RoomLPStakeSKO4Oa.stake.call(uintB5laHyD, {from: accounts[3]});

		await expect(CourtFarming_RoomLPStakeSKO4Oa.changeStakeParameters.call(uintYnccWnl, uintDNyaMrR, uintzZeJ0qC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakejRgXgj7 = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const addressTBH0Awm = accounts[3]
		const uintpuV6wco = BigInt("1121")
		const addressGaZARip = accounts[0]
		const addresssjv8D5t = await CourtFarming_RoomLPStakejRgXgj7.updateReward.call(addressTBH0Awm, {from: accounts[4]});
		const uint256PZqinxG = await CourtFarming_RoomLPStakejRgXgj7.totalStaked.call({from: accounts[3]});
		const uint256J1fbnSE = await CourtFarming_RoomLPStakejRgXgj7.expectedRewardsToday.call(uintpuV6wco, {from: accounts[5]});
		const uint256mPUAGLs = await CourtFarming_RoomLPStakejRgXgj7.balanceOf.call(addressGaZARip, {from: accounts[2]});

		assert.equal(uint256PZqinxG, BigInt("0"))
		assert.equal(uint256mPUAGLs, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakebL9QwC = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const uint256AXJtmd = await CourtFarming_RoomLPStakebL9QwC.incvRewardInfo.call({from: accounts[0]});
		const uint256gDs2VaD = await CourtFarming_RoomLPStakebL9QwC.blockNumber.call({from: accounts[4]});
		const uint256oE2cZmf = await CourtFarming_RoomLPStakebL9QwC.lastUpdateBlock.call({from: accounts[5]});

		assert.equal(uint256gDs2VaD, BigInt("1607"))
		assert.equal(uint256oE2cZmf, BigInt("1607"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeIGuqMA0 = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const boolEZ63FCL = false
		const uintC68kIZq = BigInt("1341")
		const uint256vt4tyj = await CourtFarming_RoomLPStakeIGuqMA0.getCurrentTime.call({from: accounts[2]});
//		const uint256H8Z1oJg = await CourtFarming_RoomLPStakeIGuqMA0.unstake.call(uintC68kIZq, boolEZ63FCL, {from: accounts[1]});
//		const uint256U2EHqBe = await CourtFarming_RoomLPStakeIGuqMA0.lastUpdateBlock.call({from: accounts[3]});
//		const uint256xanvvWf = await CourtFarming_RoomLPStakeIGuqMA0.lastUpdateBlock.call({from: accounts[1]});

		assert.equal(uint256vt4tyj, BigInt("1630201023"))
		await expect(CourtFarming_RoomLPStakeIGuqMA0.unstake.call(uintC68kIZq, boolEZ63FCL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeJKuZkmj = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uintwe7sh7c = BigInt("1787")
		const addressu1lksTU = accounts[0]
		const uint256cJxP59x = await CourtFarming_RoomLPStakeJKuZkmj.blockNumber.call({from: accounts[3]});
		const uint256O7R9lI8 = await CourtFarming_RoomLPStakeJKuZkmj.incvRewardClaim.call({from: accounts[4]});
		const uint256HgtlXrj = await CourtFarming_RoomLPStakeJKuZkmj.expectedRewardsToday.call(uintwe7sh7c, {from: accounts[2]});
		const uint256v36B0iO = await CourtFarming_RoomLPStakeJKuZkmj.rewards.call(addressu1lksTU, {from: accounts[5]});

		assert.equal(uint256O7R9lI8, BigInt("0"))
		assert.equal(uint256cJxP59x, BigInt("1607"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakekA0fN1B = await CourtFarming_RoomLPStake.new({from: "0x0000000000000000000000000000000000000001"});
		const uintyOtMOVA = BigInt("1069")
		const uint256aw92XE1 = await CourtFarming_RoomLPStakekA0fN1B.incvRewardInfo.call({from: accounts[4]});
		const uint256Acnv1K = await CourtFarming_RoomLPStakekA0fN1B.lastUpdateBlock.call({from: accounts[3]});
		const uint256uZ7hXFy = await CourtFarming_RoomLPStakekA0fN1B.stake.call(uintyOtMOVA, {from: accounts[1]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakefuNCM9T = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addressN7uCe8 = accounts[0]
		const uintb6sHEKO = BigInt("328")
		const boolj2EzmJQ = false
		const uintFLUsH4 = BigInt("939")
		const bool5PZv2n = false
		const uinttu1uIws = BigInt("473")
		const addressKXiJpjp = accounts[1]
		const uintv0gvkI = BigInt("351")
		const addressgb4iVo = await CourtFarming_RoomLPStakefuNCM9T.getBeneficiaryInfo.call(addressN7uCe8, {from: accounts[1]});
		const uint256Wg5aU7o = await CourtFarming_RoomLPStakefuNCM9T.incvRewardClaim.call({from: accounts[2]});
		const booltQ8tyfJ = await CourtFarming_RoomLPStakefuNCM9T.stakeIncvRewards.call(uintb6sHEKO, {from: accounts[2]});
		const uint256xi9vtv = await CourtFarming_RoomLPStakefuNCM9T.incvRewardInfo.call({from: accounts[4]});
		const uint256WHQiX8E = await CourtFarming_RoomLPStakefuNCM9T.incvRewardInfo.call({from: accounts[2]});
//		const uint256h6X1Ql = await CourtFarming_RoomLPStakefuNCM9T.unstake.call(uintFLUsH4, boolj2EzmJQ, {from: accounts[0]});
//		const uint256K53n5ME = await CourtFarming_RoomLPStakefuNCM9T.unstake.call(uinttu1uIws, bool5PZv2n, {from: accounts[0]});
//		const addressR3JNa35 = await CourtFarming_RoomLPStakefuNCM9T.setCourtStake.call(addressKXiJpjp, {from: accounts[4]});
//		const uint256hqebY1 = await CourtFarming_RoomLPStakefuNCM9T.expectedRewardsToday.call(uintv0gvkI, {from: accounts[4]});

		assert.equal(booltQ8tyfJ, false)
		assert.equal(uint256Wg5aU7o, BigInt("0"))
		await expect(CourtFarming_RoomLPStakefuNCM9T.unstake.call(uintFLUsH4, boolj2EzmJQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeVz2bri = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addresslbW1KSV = accounts[1]
		const addresssDyE1u = accounts[5]
		const addressRwUgjZn = accounts[2]
		const addressIUOCFlH = await CourtFarming_RoomLPStakeVz2bri.getBeneficiaryInfo.call(addresslbW1KSV, {from: accounts[4]});
		const uint256WjH0Bd5 = await CourtFarming_RoomLPStakeVz2bri.getCurrentTime.call({from: accounts[0]});
//		const addressoQPBnpr = await CourtFarming_RoomLPStakeVz2bri.setCourtStake.call(addresssDyE1u, {from: accounts[4]});
//		const uint256aOth9Ir = await CourtFarming_RoomLPStakeVz2bri.blockNumber.call({from: accounts[2]});
//		const uint256BRrBYRg = await CourtFarming_RoomLPStakeVz2bri.rewards.call(addressRwUgjZn, {from: accounts[5]});

		assert.equal(uint256WjH0Bd5, BigInt("1630201016"))
		await expect(CourtFarming_RoomLPStakeVz2bri.setCourtStake.call(addresssDyE1u, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStake2628B0 = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uintPxqYsaa = BigInt("0")
		const addresszhAvfFU = accounts[1]
		const uintFLaDBu = BigInt("1522")
		const uint256NsvawQ = await CourtFarming_RoomLPStake2628B0.totalStaked.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256xelRuhc = await CourtFarming_RoomLPStake2628B0.stake.call(uintPxqYsaa, {from: accounts[1]});
		const uint256SdZXTSL = await CourtFarming_RoomLPStake2628B0.balanceOf.call(addresszhAvfFU, {from: accounts[0]});
		const booltINjwSa = await CourtFarming_RoomLPStake2628B0.stakeIncvRewards.call(uintFLaDBu, {from: accounts[1]});

		assert.equal(booltINjwSa, false)
		assert.equal(uint256NsvawQ, BigInt("0"))
		assert.equal(uint256SdZXTSL, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStake2628B0 = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const addressbwtDvnR = accounts[3]
		const uintRkXggkA = BigInt("539")
		const uintGLnnVUU = BigInt("0")
		const boolhSJCOCv = true
		const uintwCUk5YP = BigInt("958")
		const addresswLbpgrs = accounts[4]
		const addressSNxOHMA = accounts[2]
		const uint256cTLQonN = await CourtFarming_RoomLPStake2628B0.totalStaked.call({from: accounts[1]});
		const uint256EjY5o1 = await CourtFarming_RoomLPStake2628B0.incvRewardInfo.call({from: accounts[1]});
		const addressMkXRpwL = await CourtFarming_RoomLPStake2628B0.getBeneficiaryInfo.call(addressbwtDvnR, {from: accounts[2]});
		const uint256x2HlKpC = await CourtFarming_RoomLPStake2628B0.totalStaked.call({from: accounts[3]});
		const uint256IIo6Kv = await CourtFarming_RoomLPStake2628B0.blockNumber.call({from: "0x0000000000000000000000000000000000000001"});
		const boolaPnDC2B = await CourtFarming_RoomLPStake2628B0.stakeIncvRewards.call(uintRkXggkA, {from: accounts[0]});
		const booleVZTTEa = await CourtFarming_RoomLPStake2628B0.stakeIncvRewards.call(uintGLnnVUU, {from: accounts[1]});
//		const uint256ty2UNGz = await CourtFarming_RoomLPStake2628B0.unstake.call(uintwCUk5YP, boolhSJCOCv, {from: accounts[3]});
//		const uint256ZUz5xrE = await CourtFarming_RoomLPStake2628B0.totalStaked.call({from: accounts[4]});
//		const addressJS3ofGk = await CourtFarming_RoomLPStake2628B0.setCourtStake.call(addresswLbpgrs, {from: accounts[3]});
//		const uint256HskpcoO = await CourtFarming_RoomLPStake2628B0.incvRewardInfo.call({from: accounts[2]});
//		const uint256NsvawQ = await CourtFarming_RoomLPStake2628B0.totalStaked.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256oid2s12 = await CourtFarming_RoomLPStake2628B0.incvRewardInfo.call({from: accounts[3]});
//		const uint256jq8XKGE = await CourtFarming_RoomLPStake2628B0.balanceOf.call(addressSNxOHMA, {from: accounts[5]});

		assert.equal(boolaPnDC2B, false)
		assert.equal(booleVZTTEa, false)
		assert.equal(uint256IIo6Kv, BigInt("1607"))
		assert.equal(uint256cTLQonN, BigInt("0"))
		assert.equal(uint256x2HlKpC, BigInt("0"))
		await expect(CourtFarming_RoomLPStake2628B0.unstake.call(uintwCUk5YP, boolhSJCOCv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakefuNCM9T = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const boolcopzvH = true
		const uintaJZtId5 = BigInt("0")
		const uint256Fnn7PtB = await CourtFarming_RoomLPStakefuNCM9T.unstake.call(uintaJZtId5, boolcopzvH, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Wg5aU7o = await CourtFarming_RoomLPStakefuNCM9T.incvRewardClaim.call({from: accounts[2]});
		const uint256Dh3m8p2 = await CourtFarming_RoomLPStakefuNCM9T.totalStaked.call({from: accounts[3]});

		assert.equal(uint256Dh3m8p2, BigInt("0"))
		assert.equal(uint256Wg5aU7o, BigInt("0"))
	});
})