const CourtFarming_RoomLPStake = artifacts.require("CourtFarming_RoomLPStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_RoomLPStake', (accounts) => {
	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeObmsiZn = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const addressifIZTIr = accounts[0]
		const addressKKnG6Gl = accounts[4]
		const address9SrrVT = await CourtFarming_RoomLPStakeObmsiZn.updateReward.call(addressifIZTIr, {from: accounts[0]});
		const uint256lSy6g18 = await CourtFarming_RoomLPStakeObmsiZn.getCurrentTime.call({from: accounts[1]});
		const addressvD6B5T = await CourtFarming_RoomLPStakeObmsiZn.updateReward.call(addressKKnG6Gl, {from: accounts[0]});
		const uint2561rTgdq = await CourtFarming_RoomLPStakeObmsiZn.incvRewardClaim.call({from: accounts[3]});

		assert.equal(uint2561rTgdq, BigInt("0"))
		assert.equal(uint256lSy6g18, BigInt("1630201178"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeQfRILzL = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const addressZjefh6H = accounts[3]
		const uint256wFS4J8B = await CourtFarming_RoomLPStakeQfRILzL.balanceOf.call(addressZjefh6H, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Qoc4PXO = await CourtFarming_RoomLPStakeQfRILzL.incvRewardClaim.call({from: accounts[5]});

		assert.equal(uint256Qoc4PXO, BigInt("0"))
		assert.equal(uint256wFS4J8B, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakejWu6TZz = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uintu9pX6uQ = BigInt("365")
		const addressbJNuwxo = accounts[2]
		const addressX7jlTOU = accounts[1]
		const addressuyYphhR = accounts[5]
		const uintcWH8KsQ = BigInt("312")
		const uint2566J4Fj9 = await CourtFarming_RoomLPStakejWu6TZz.expectedRewardsToday.call(uintu9pX6uQ, {from: accounts[0]});
		const addressu8JmxI = await CourtFarming_RoomLPStakejWu6TZz.updateReward.call(addressbJNuwxo, {from: accounts[1]});
		const uint256FoIxZPg = await CourtFarming_RoomLPStakejWu6TZz.balanceOf.call(addressX7jlTOU, {from: accounts[3]});
		const addressntinyy0 = await CourtFarming_RoomLPStakejWu6TZz.updateReward.call(addressuyYphhR, {from: accounts[4]});
//		const uint256hWD2cyL = await CourtFarming_RoomLPStakejWu6TZz.stake.call(uintcWH8KsQ, {from: accounts[0]});

		assert.equal(uint256FoIxZPg, BigInt("0"))
		await expect(CourtFarming_RoomLPStakejWu6TZz.stake.call(uintcWH8KsQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeMnG8h1H = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addressF1ZLcTH = accounts[3]
		const addressvXcNy4s = await CourtFarming_RoomLPStakeMnG8h1H.getBeneficiaryInfo.call(addressF1ZLcTH, {from: "0x0000000000000000000000000000000000000001"});
		const uint256FAfe73 = await CourtFarming_RoomLPStakeMnG8h1H.incvRewardInfo.call({from: accounts[0]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakehsxkKT2 = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const boolNhdC6uA = true
		const uintcPt8doS = BigInt("1060")
		const uintCq3VXQ3 = BigInt("899")
		const uintrzwzrli = BigInt("1652")
		const uintfulo1wz = BigInt("1877")
		const uintsJUVktu = BigInt("1394")
		const uintMaCLAb = BigInt("1140")
		const uint256A91XYg = await CourtFarming_RoomLPStakehsxkKT2.blockNumber.call({from: accounts[0]});
//		const uint256rOxMF2E = await CourtFarming_RoomLPStakehsxkKT2.unstake.call(uintcPt8doS, boolNhdC6uA, {from: accounts[3]});
//		const uint256xrMSZHT = await CourtFarming_RoomLPStakehsxkKT2.stake.call(uintCq3VXQ3, {from: accounts[4]});
//		const uint256F72uXpa = await CourtFarming_RoomLPStakehsxkKT2.expectedRewardsToday.call(uintrzwzrli, {from: accounts[1]});
//		await CourtFarming_RoomLPStakehsxkKT2.changeStakeParameters.call(uintMaCLAb, uintsJUVktu, uintfulo1wz, {from: accounts[1]});

		assert.equal(uint256A91XYg, BigInt("1680"))
		await expect(CourtFarming_RoomLPStakehsxkKT2.unstake.call(uintcPt8doS, boolNhdC6uA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeom9z0ya = await CourtFarming_RoomLPStake.new({from: "0x0000000000000000000000000000000000000001"});
		const uint256Qclm9CB = await CourtFarming_RoomLPStakeom9z0ya.blockNumber.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256MWX4WDz = await CourtFarming_RoomLPStakeom9z0ya.incvRewardInfo.call({from: accounts[1]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeTWMOeFJ = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uintlTqDNGE = BigInt("1345")
		const addressHGmNaSu = accounts[4]
		const uintyHum7sC = BigInt("1133")
		const uintqocgiIb = BigInt("278")
		const uintqo0H8Wi = BigInt("1122")
		const uint256sXSf0Rp = await CourtFarming_RoomLPStakeTWMOeFJ.expectedRewardsToday.call(uintlTqDNGE, {from: accounts[3]});
		const uint256FgAAPwt = await CourtFarming_RoomLPStakeTWMOeFJ.balanceOf.call(addressHGmNaSu, {from: accounts[1]});
//		await CourtFarming_RoomLPStakeTWMOeFJ.changeStakeParameters.call(uintqo0H8Wi, uintqocgiIb, uintyHum7sC, {from: accounts[1]});

		assert.equal(uint256FgAAPwt, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeTWMOeFJ.changeStakeParameters.call(uintqo0H8Wi, uintqocgiIb, uintyHum7sC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeScACkxL = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const addresslDY9UrH = "0x0000000000000000000000000000000000000001"
		const addressr65Pv34 = accounts[1]
		const uint256LyQMd5 = await CourtFarming_RoomLPStakeScACkxL.balanceOf.call(addresslDY9UrH, {from: accounts[0]});
		const uint256bFRmYF4 = await CourtFarming_RoomLPStakeScACkxL.incvRewardClaim.call({from: accounts[3]});
		const uint256nfDCsmm = await CourtFarming_RoomLPStakeScACkxL.incvRewardInfo.call({from: accounts[3]});
//		const addresstQzk68Y = await CourtFarming_RoomLPStakeScACkxL.setCourtStake.call(addressr65Pv34, {from: accounts[3]});

		assert.equal(uint256LyQMd5, BigInt("0"))
		assert.equal(uint256bFRmYF4, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeScACkxL.setCourtStake.call(addressr65Pv34, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeMnG8h1H = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uint256FAfe73 = await CourtFarming_RoomLPStakeMnG8h1H.incvRewardInfo.call({from: accounts[0]});
		const uint256Aq1RBw8 = await CourtFarming_RoomLPStakeMnG8h1H.lastUpdateBlock.call({from: accounts[3]});

		assert.equal(uint256Aq1RBw8, BigInt("1680"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakehsxkKT2 = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uintv5q8tDu = BigInt("1515")
		const boolNhdC6uA = true
		const uintRuj3KXU = BigInt("1072")
		const uintW2Y9c03 = BigInt("899")
		const uinthcI8UKM = BigInt("1652")
		const uintBIQTLz3 = BigInt("1877")
		const uintmux4Ax = BigInt("1394")
		const uintpb1Fmz = BigInt("1140")
		const uint256TJWjT6j = await CourtFarming_RoomLPStakehsxkKT2.totalStaked.call({from: accounts[1]});
		const uint256SPNOV1V = await CourtFarming_RoomLPStakehsxkKT2.expectedRewardsToday.call(uintv5q8tDu, {from: "0x0000000000000000000000000000000000000001"});
		const uint256A91XYg = await CourtFarming_RoomLPStakehsxkKT2.blockNumber.call({from: accounts[0]});
//		const uint256rOxMF2E = await CourtFarming_RoomLPStakehsxkKT2.unstake.call(uintRuj3KXU, boolNhdC6uA, {from: accounts[3]});
//		const uint256fH69fmW = await CourtFarming_RoomLPStakehsxkKT2.incvRewardClaim.call({from: accounts[1]});
//		const uint256xrMSZHT = await CourtFarming_RoomLPStakehsxkKT2.stake.call(uintW2Y9c03, {from: accounts[4]});
//		const uint256F72uXpa = await CourtFarming_RoomLPStakehsxkKT2.expectedRewardsToday.call(uinthcI8UKM, {from: accounts[1]});
//		await CourtFarming_RoomLPStakehsxkKT2.changeStakeParameters.call(uintpb1Fmz, uintmux4Ax, uintBIQTLz3, {from: accounts[1]});

		assert.equal(uint256A91XYg, BigInt("1680"))
		assert.equal(uint256TJWjT6j, BigInt("0"))
		await expect(CourtFarming_RoomLPStakehsxkKT2.unstake.call(uintRuj3KXU, boolNhdC6uA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeMnG8h1H = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addressOLSAWsS = accounts[4]
		const uintD9EdGMO = BigInt("897")
		const uintidfhAAp = BigInt("1211")
		const addressvXcNy4s = await CourtFarming_RoomLPStakeMnG8h1H.getBeneficiaryInfo.call(addressOLSAWsS, {from: "0x0000000000000000000000000000000000000001"});
		const uint256EQOn14B = await CourtFarming_RoomLPStakeMnG8h1H.expectedRewardsToday.call(uintD9EdGMO, {from: accounts[2]});
		const boolJlwQHCF = await CourtFarming_RoomLPStakeMnG8h1H.stakeIncvRewards.call(uintidfhAAp, {from: accounts[2]});

		assert.equal(boolJlwQHCF, false)
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeMnG8h1H = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addressvAqobh1 = accounts[4]
//		const addresstgTQ8FP = await CourtFarming_RoomLPStakeMnG8h1H.setCourtStake.call(addressvAqobh1, {from: accounts[2]});
//		const uint256lLMYJkO = await CourtFarming_RoomLPStakeMnG8h1H.incvRewardClaim.call({from: accounts[4]});
//		const uint256FAfe73 = await CourtFarming_RoomLPStakeMnG8h1H.incvRewardInfo.call({from: accounts[0]});

		await expect(CourtFarming_RoomLPStakeMnG8h1H.setCourtStake.call(addressvAqobh1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakelen8iu = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const addressnhMw0rO = accounts[2]
		const addressoGPkKua = accounts[2]
		const uintue8HxAk = BigInt("0")
		const addresst6vGRTY = await CourtFarming_RoomLPStakelen8iu.getBeneficiaryInfo.call(addressnhMw0rO, {from: accounts[3]});
		const uint256bdXer2 = await CourtFarming_RoomLPStakelen8iu.balanceOf.call(addressoGPkKua, {from: accounts[1]});
		const uint256d7PwRsX = await CourtFarming_RoomLPStakelen8iu.stake.call(uintue8HxAk, {from: accounts[3]});

		assert.equal(uint256bdXer2, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeQfRILzL = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const boolMNvttYb = false
		const uintJmNjhuV = BigInt("0")
		const addresshv6lJr1 = accounts[5]
		const uint256cQbdSEw = await CourtFarming_RoomLPStakeQfRILzL.incvRewardClaim.call({from: accounts[0]});
		const uint2560an42w = await CourtFarming_RoomLPStakeQfRILzL.unstake.call(uintJmNjhuV, boolMNvttYb, {from: accounts[0]});
//		const addressv7KcOgH = await CourtFarming_RoomLPStakeQfRILzL.setCourtStake.call(addresshv6lJr1, {from: accounts[1]});
//		const uint256Qoc4PXO = await CourtFarming_RoomLPStakeQfRILzL.incvRewardClaim.call({from: accounts[5]});

		assert.equal(uint256cQbdSEw, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeQfRILzL.setCourtStake.call(addresshv6lJr1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakejtZClQ = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const uintX9OIyJA = BigInt("367")
		const uint8uJilQ = BigInt("363")
		const addressHb9LUtC = accounts[4]
		const uintP9U7IHr = BigInt("1061")
		const uintag6pydp = BigInt("0")
		const addresslWphY7O = accounts[4]
		const boolvoohqxt = true
		const uinttioUzyn = BigInt("526")
		const uintlwMIqH4 = BigInt("1470")
		const uint256BxJQeTF = await CourtFarming_RoomLPStakejtZClQ.blockNumber.call({from: accounts[3]});
		const boolSREvEQX = await CourtFarming_RoomLPStakejtZClQ.stakeIncvRewards.call(uintX9OIyJA, {from: accounts[2]});
		const uint256PdwdDeS = await CourtFarming_RoomLPStakejtZClQ.expectedRewardsToday.call(uint8uJilQ, {from: accounts[4]});
		const uint256VjlbH9X = await CourtFarming_RoomLPStakejtZClQ.balanceOf.call(addressHb9LUtC, {from: accounts[2]});
		const boolPqdMqAy = await CourtFarming_RoomLPStakejtZClQ.stakeIncvRewards.call(uintP9U7IHr, {from: "0x0000000000000000000000000000000000000001"});
		const uint256iGl3VHN = await CourtFarming_RoomLPStakejtZClQ.incvRewardInfo.call({from: accounts[0]});
		const boolA7xk8B = await CourtFarming_RoomLPStakejtZClQ.stakeIncvRewards.call(uintag6pydp, {from: accounts[2]});
		const uint2567rh9nr = await CourtFarming_RoomLPStakejtZClQ.totalStaked.call({from: accounts[0]});
		const uint256HkMMLNO = await CourtFarming_RoomLPStakejtZClQ.incvRewardClaim.call({from: accounts[2]});
//		const addresspzLOVVI = await CourtFarming_RoomLPStakejtZClQ.setCourtStake.call(addresslWphY7O, {from: accounts[1]});
//		const uint256eyff1Le = await CourtFarming_RoomLPStakejtZClQ.incvRewardClaim.call({from: accounts[5]});
//		const uint256jPnwBtv = await CourtFarming_RoomLPStakejtZClQ.lastUpdateBlock.call({from: accounts[5]});
//		const uint256H9055Qv = await CourtFarming_RoomLPStakejtZClQ.incvRewardClaim.call({from: accounts[0]});
//		const uint256IVmUCU = await CourtFarming_RoomLPStakejtZClQ.unstake.call(uinttioUzyn, boolvoohqxt, {from: accounts[3]});
//		const uint256LOSIyjI = await CourtFarming_RoomLPStakejtZClQ.expectedRewardsToday.call(uintlwMIqH4, {from: accounts[2]});

		assert.equal(boolA7xk8B, false)
		assert.equal(boolPqdMqAy, false)
		assert.equal(boolSREvEQX, false)
		assert.equal(uint2567rh9nr, BigInt("0"))
		assert.equal(uint256BxJQeTF, BigInt("1680"))
		assert.equal(uint256HkMMLNO, BigInt("0"))
		assert.equal(uint256VjlbH9X, BigInt("0"))
		await expect(CourtFarming_RoomLPStakejtZClQ.setCourtStake.call(addresslWphY7O, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})