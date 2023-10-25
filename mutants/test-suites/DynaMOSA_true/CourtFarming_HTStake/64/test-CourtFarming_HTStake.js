const CourtFarming_HTStake = artifacts.require("CourtFarming_HTStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_HTStake', (accounts) => {
	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeiNWP32F = await CourtFarming_HTStake.new({from: accounts[5]});
		const uintUGKenf = BigInt("459")
		const addressrRYOyZ6 = accounts[0]
		const uintmxu7R0f = BigInt("1578")
//		const uint256jJWBv0G = await CourtFarming_HTStakeiNWP32F.stake.call(uintUGKenf, {from: accounts[4]});
//		const uint256MB63JdI = await CourtFarming_HTStakeiNWP32F.balanceOf.call(addressrRYOyZ6, {from: accounts[3]});
//		const uint256Px4uNLD = await CourtFarming_HTStakeiNWP32F.lastUpdateBlock.call({from: accounts[5]});
//		const uint256QUgVVNf = await CourtFarming_HTStakeiNWP32F.incvRewardInfo.call({from: accounts[2]});
//		const uint256w4UBkFa = await CourtFarming_HTStakeiNWP32F.expectedRewardsToday.call(uintmxu7R0f, {from: accounts[4]});

		await expect(CourtFarming_HTStakeiNWP32F.stake.call(uintUGKenf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakexdl0qj8 = await CourtFarming_HTStake.new({from: accounts[5]});
		const addressghaERI = "0x0000000000000000000000000000000000000001"
		const addressRn6FAv3 = accounts[1]
		const uintqAhUD1f = BigInt("1221")
		const uint25633UedL = await CourtFarming_HTStakexdl0qj8.blockNumber.call({from: accounts[3]});
//		const addressASReeFX = await CourtFarming_HTStakexdl0qj8.setCourtStake.call(addressghaERI, {from: accounts[1]});
//		const uint256sbtq4pE = await CourtFarming_HTStakexdl0qj8.balanceOf.call(addressRn6FAv3, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256UXfcdds = await CourtFarming_HTStakexdl0qj8.stake.call(uintqAhUD1f, {from: accounts[3]});

		assert.equal(uint25633UedL, BigInt("1706"))
		await expect(CourtFarming_HTStakexdl0qj8.setCourtStake.call(addressghaERI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeekBp2ci = await CourtFarming_HTStake.new({from: accounts[0]});
		const boolhICjnD = false
		const uintyVEfThZ = BigInt("963")
		const boolD5wYa6m = false
		const uintaRG8Sl = BigInt("839")
		const addressPEVaRov = accounts[2]
		const uint256rrCXi3j = await CourtFarming_HTStakeekBp2ci.totalStaked.call({from: accounts[5]});
//		const uint256ZBFI1g = await CourtFarming_HTStakeekBp2ci.unstake.call(uintyVEfThZ, boolhICjnD, {from: accounts[1]});
//		const uint256mAvNZUD = await CourtFarming_HTStakeekBp2ci.incvRewardClaim.call({from: accounts[5]});
//		const uint256maHGz6u = await CourtFarming_HTStakeekBp2ci.unstake.call(uintaRG8Sl, boolD5wYa6m, {from: accounts[0]});
//		const addressW4gFOfq = await CourtFarming_HTStakeekBp2ci.setCourtStake.call(addressPEVaRov, {from: accounts[0]});

		assert.equal(uint256rrCXi3j, BigInt("0"))
		await expect(CourtFarming_HTStakeekBp2ci.unstake.call(uintyVEfThZ, boolhICjnD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeUpwRliS = await CourtFarming_HTStake.new({from: "0x0000000000000000000000000000000000000001"});
		const uintQy1QjZ4 = BigInt("1700")
		const uintKnLHdcd = BigInt("991")
		const uintuoMvBZO = BigInt("399")
		const uintqmvpDF = BigInt("611")
		const uintrM8EJsU = BigInt("1882")
		const uintlBx1J8z = BigInt("964")
		const uint256ZWLYNpG = await CourtFarming_HTStakeUpwRliS.incvRewardInfo.call({from: accounts[0]});
		const boolr5Dz4q = await CourtFarming_HTStakeUpwRliS.stakeIncvRewards.call(uintQy1QjZ4, {from: accounts[5]});
		const uint256Y9srnVU = await CourtFarming_HTStakeUpwRliS.expectedRewardsToday.call(uintKnLHdcd, {from: "0x0000000000000000000000000000000000000001"});
		const boolvMszNRQ = await CourtFarming_HTStakeUpwRliS.stakeIncvRewards.call(uintuoMvBZO, {from: accounts[1]});
		await CourtFarming_HTStakeUpwRliS.changeStakeParameters.call(uintlBx1J8z, uintrM8EJsU, uintqmvpDF, {from: accounts[3]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeLNQlwhK = await CourtFarming_HTStake.new({from: accounts[0]});
		const addressvhHphHA = accounts[1]
		const uint2567n5hFY = await CourtFarming_HTStakeLNQlwhK.incvRewardInfo.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Zc5L7b7 = await CourtFarming_HTStakeLNQlwhK.lastUpdateBlock.call({from: accounts[5]});
		const addressQmpOcPa = await CourtFarming_HTStakeLNQlwhK.updateReward.call(addressvhHphHA, {from: accounts[0]});

		assert.equal(uint256Zc5L7b7, BigInt("1706"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeam2SYsC = await CourtFarming_HTStake.new({from: accounts[4]});
		const addressCXT4Vvz = accounts[2]
		const uint256cXGneDY = await CourtFarming_HTStakeam2SYsC.incvRewardInfo.call({from: accounts[5]});
		const uint256MgUQZXk = await CourtFarming_HTStakeam2SYsC.getCurrentTime.call({from: accounts[2]});
		const addressTgaciFY = await CourtFarming_HTStakeam2SYsC.updateReward.call(addressCXT4Vvz, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256MgUQZXk, BigInt("1630201379"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeekBp2ci = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintEc7qdgh = BigInt("1501")
		const uintnbmfffF = BigInt("1853")
		const uintBfwOr29 = BigInt("1103")
		const boolhICjnD = false
		const uintCPFb18L = BigInt("963")
		const boolD5wYa6m = false
		const uintxgxBlT = BigInt("839")
		const addressL6T0n4i = accounts[2]
		const uint256rrCXi3j = await CourtFarming_HTStakeekBp2ci.totalStaked.call({from: accounts[5]});
//		await CourtFarming_HTStakeekBp2ci.changeStakeParameters.call(uintBfwOr29, uintnbmfffF, uintEc7qdgh, {from: accounts[4]});
//		const uint256ZBFI1g = await CourtFarming_HTStakeekBp2ci.unstake.call(uintCPFb18L, boolhICjnD, {from: accounts[1]});
//		const uint256mAvNZUD = await CourtFarming_HTStakeekBp2ci.incvRewardClaim.call({from: accounts[5]});
//		const uint256maHGz6u = await CourtFarming_HTStakeekBp2ci.unstake.call(uintxgxBlT, boolD5wYa6m, {from: accounts[0]});
//		const addressW4gFOfq = await CourtFarming_HTStakeekBp2ci.setCourtStake.call(addressL6T0n4i, {from: accounts[0]});

		assert.equal(uint256rrCXi3j, BigInt("0"))
		await expect(CourtFarming_HTStakeekBp2ci.changeStakeParameters.call(uintBfwOr29, uintnbmfffF, uintEc7qdgh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakelKMPw7e = await CourtFarming_HTStake.new({from: accounts[5]});
		const addressZY6TYcR = accounts[3]
		const uintKkQ4kCp = BigInt("810")
		const addresstOMOReU = accounts[0]
		const addressujug8Gs = await CourtFarming_HTStakelKMPw7e.updateReward.call(addressZY6TYcR, {from: accounts[0]});
		const boolShGivqA = await CourtFarming_HTStakelKMPw7e.stakeIncvRewards.call(uintKkQ4kCp, {from: accounts[5]});
		const addressKDCx1Ic = await CourtFarming_HTStakelKMPw7e.updateReward.call(addresstOMOReU, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolShGivqA, false)
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakelKMPw7e = await CourtFarming_HTStake.new({from: accounts[5]});
		const address19GpE7 = accounts[3]
		const uintguBCN4g = BigInt("284")
		const addressP1a7mV8 = accounts[0]
		const uintNL3wcgs = BigInt("1213")
		const uintV4ZCjB = BigInt("724")
		const uintyIVBD21 = BigInt("1651")
		const addressujug8Gs = await CourtFarming_HTStakelKMPw7e.updateReward.call(address19GpE7, {from: accounts[0]});
		const boolShGivqA = await CourtFarming_HTStakelKMPw7e.stakeIncvRewards.call(uintguBCN4g, {from: accounts[5]});
		const uint256XUE6xSb = await CourtFarming_HTStakelKMPw7e.incvRewardInfo.call({from: accounts[0]});
		const uint256mzuXAS4 = await CourtFarming_HTStakelKMPw7e.lastUpdateBlock.call({from: "0x0000000000000000000000000000000000000001"});
		const addressKDCx1Ic = await CourtFarming_HTStakelKMPw7e.updateReward.call(addressP1a7mV8, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256VFECzqn = await CourtFarming_HTStakelKMPw7e._stakeParametrsCalculation.call(uintyIVBD21, uintV4ZCjB, uintNL3wcgs, {from: accounts[1]});

		assert.equal(boolShGivqA, false)
		assert.equal(uint256mzuXAS4, BigInt("1706"))
		await expect(CourtFarming_HTStakelKMPw7e._stakeParametrsCalculation.call(uintyIVBD21, uintV4ZCjB, uintNL3wcgs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStake3aCQ7t = await CourtFarming_HTStake.new({from: accounts[5]});
		const addressQ8A3Hc5 = accounts[0]
		const boolxJeaPw = true
		const uintuFCEo7G = BigInt("336")
		const uintlDZ3xza = BigInt("1767")
		const uintwQDmJM = BigInt("737")
		const uintMY1cxyZ = BigInt("255")
		const uint256QyCK92D = await CourtFarming_HTStake3aCQ7t.balanceOf.call(addressQ8A3Hc5, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256F6LIA9h = await CourtFarming_HTStake3aCQ7t.unstake.call(uintuFCEo7G, boolxJeaPw, {from: accounts[2]});
//		await CourtFarming_HTStake3aCQ7t.changeStakeParameters.call(uintMY1cxyZ, uintwQDmJM, uintlDZ3xza, {from: accounts[3]});

		assert.equal(uint256QyCK92D, BigInt("0"))
		await expect(CourtFarming_HTStake3aCQ7t.unstake.call(uintuFCEo7G, boolxJeaPw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeLNQlwhK = await CourtFarming_HTStake.new({from: accounts[0]});
		const addressInDek2e = "0x0000000000000000000000000000000000000001"
		const addressVf1uh0 = accounts[1]
		const uint2567n5hFY = await CourtFarming_HTStakeLNQlwhK.incvRewardInfo.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Zc5L7b7 = await CourtFarming_HTStakeLNQlwhK.lastUpdateBlock.call({from: accounts[5]});
		const uint256NEZpSyy = await CourtFarming_HTStakeLNQlwhK.rewards.call(addressInDek2e, {from: "0x0000000000000000000000000000000000000001"});
		const addressQmpOcPa = await CourtFarming_HTStakeLNQlwhK.updateReward.call(addressVf1uh0, {from: accounts[0]});

		assert.equal(uint256Zc5L7b7, BigInt("1706"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeGcYjQO = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintT5Ydbkd = BigInt("887")
		const uintu236zyT = BigInt("901")
		const uintI4JHGhn = BigInt("600")
		const uintZLTgKCy = BigInt("160")
		const uintzlGuGE = BigInt("239")
		const uint256sHfJbcj = await CourtFarming_HTStakeGcYjQO.expectedRewardsToday.call(uintT5Ydbkd, {from: accounts[4]});
//		const uint256QXXNcfz = await CourtFarming_HTStakeGcYjQO._stakeParametrsCalculation.call(uintZLTgKCy, uintI4JHGhn, uintu236zyT, {from: accounts[3]});
//		const uint256EfRstDx = await CourtFarming_HTStakeGcYjQO.incvRewardClaim.call({from: accounts[5]});
//		const uint256P6fAbE3 = await CourtFarming_HTStakeGcYjQO.stake.call(uintzlGuGE, {from: accounts[4]});

		await expect(CourtFarming_HTStakeGcYjQO._stakeParametrsCalculation.call(uintZLTgKCy, uintI4JHGhn, uintu236zyT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStaken4WYPa = await CourtFarming_HTStake.new({from: accounts[5]});
		const uintriL2sMB = BigInt("319")
		const uintPv4XSnM = BigInt("292")
		const uintrSJaM89 = BigInt("188")
		const uintXfpaAsb = BigInt("616")
		const uint256d9y9dFQ = await CourtFarming_HTStaken4WYPa.incvRewardClaim.call({from: accounts[0]});
//		const uint256LEuNn8G = await CourtFarming_HTStaken4WYPa.stake.call(uintriL2sMB, {from: accounts[4]});
//		const uint256wJzkFFW = await CourtFarming_HTStaken4WYPa._stakeParametrsCalculation.call(uintXfpaAsb, uintrSJaM89, uintPv4XSnM, {from: accounts[3]});

		assert.equal(uint256d9y9dFQ, BigInt("0"))
		await expect(CourtFarming_HTStaken4WYPa.stake.call(uintriL2sMB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStaken4WYPa = await CourtFarming_HTStake.new({from: accounts[5]});
		const uintBY5eUy3 = BigInt("0")
		const uintJRYNLZT = BigInt("1474")
		const uintT6DvCeo = BigInt("949")
		const uint256deqxLnq = await CourtFarming_HTStaken4WYPa.stake.call(uintBY5eUy3, {from: accounts[3]});
//		const uint256LEuNn8G = await CourtFarming_HTStaken4WYPa.stake.call(uintJRYNLZT, {from: accounts[4]});
//		const boolwWyHMu = await CourtFarming_HTStaken4WYPa.stakeIncvRewards.call(uintT6DvCeo, {from: accounts[4]});

		await expect(CourtFarming_HTStaken4WYPa.stake.call(uintJRYNLZT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStaken4WYPa = await CourtFarming_HTStake.new({from: accounts[5]});
		const addressYJezde0 = accounts[4]
		const uintCb99TeL = BigInt("292")
		const uintiPSOUSw = BigInt("545")
		const uintOMwWu2I = BigInt("616")
		const uint256d9y9dFQ = await CourtFarming_HTStaken4WYPa.incvRewardClaim.call({from: accounts[0]});
//		const address8QgY9m = await CourtFarming_HTStaken4WYPa.setCourtStake.call(addressYJezde0, {from: accounts[5]});
//		const uint256wJzkFFW = await CourtFarming_HTStaken4WYPa._stakeParametrsCalculation.call(uintOMwWu2I, uintiPSOUSw, uintCb99TeL, {from: accounts[3]});

		assert.equal(uint256d9y9dFQ, BigInt("0"))
		await expect(CourtFarming_HTStaken4WYPa.setCourtStake.call(addressYJezde0, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeZhKlyS7 = await CourtFarming_HTStake.new({from: accounts[4]});
		const addressdhgz8Eu = accounts[3]
		const uintf7TDf3 = BigInt("1799")
		const uintpkFg89 = BigInt("695")
		const uinttAvCVHN = BigInt("1810")
		const addressodD8rgj = accounts[4]
		const uintR8HGldj = BigInt("1413")
		const uintJpbWc04 = BigInt("104")
		const uinta7bIDeH = BigInt("1947")
		const addresszyFjFT = await CourtFarming_HTStakeZhKlyS7.getBeneficiaryInfo.call(addressdhgz8Eu, {from: accounts[1]});
//		const uint256nXqR1Sj = await CourtFarming_HTStakeZhKlyS7._stakeParametrsCalculation.call(uinttAvCVHN, uintpkFg89, uintf7TDf3, {from: accounts[3]});
//		const uint256j4pElhk = await CourtFarming_HTStakeZhKlyS7.incvRewardClaim.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressqmPSu0 = await CourtFarming_HTStakeZhKlyS7.updateReward.call(addressodD8rgj, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256sT0c2P8 = await CourtFarming_HTStakeZhKlyS7._stakeParametrsCalculation.call(uinta7bIDeH, uintJpbWc04, uintR8HGldj, {from: accounts[0]});

		await expect(CourtFarming_HTStakeZhKlyS7._stakeParametrsCalculation.call(uinttAvCVHN, uintpkFg89, uintf7TDf3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStaken4WYPa = await CourtFarming_HTStake.new({from: accounts[5]});
		const uinthuB3Sfu = BigInt("1489")
		const uintYOVyUCO = BigInt("817")
		const uintsJYgzJ = BigInt("52")
		const uintFP8VtHs = BigInt("1873")
		const uintcZdNjGP = BigInt("292")
		const uintw8reBpF = BigInt("188")
		const uintTFL53z = BigInt("616")
//		await CourtFarming_HTStaken4WYPa.changeStakeParameters.call(uintsJYgzJ, uintYOVyUCO, uinthuB3Sfu, {from: accounts[5]});
//		const uint256PLWc7nr = await CourtFarming_HTStaken4WYPa.totalStaked.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256eWdurK = await CourtFarming_HTStaken4WYPa.stake.call(uintFP8VtHs, {from: accounts[3]});
//		const uint256wJzkFFW = await CourtFarming_HTStaken4WYPa._stakeParametrsCalculation.call(uintTFL53z, uintw8reBpF, uintcZdNjGP, {from: accounts[3]});

		await expect(CourtFarming_HTStaken4WYPa.changeStakeParameters.call(uintsJYgzJ, uintYOVyUCO, uinthuB3Sfu, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakexdl0qj8 = await CourtFarming_HTStake.new({from: accounts[5]});
		const boolyOfFPZ3 = false
		const uintzGzbCHv = BigInt("0")
		const uint256laPGs45 = await CourtFarming_HTStakexdl0qj8.unstake.call(uintzGzbCHv, boolyOfFPZ3, {from: accounts[3]});
		const uint256X5iI9CA = await CourtFarming_HTStakexdl0qj8.incvRewardClaim.call({from: accounts[4]});

		assert.equal(uint256X5iI9CA, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakexdl0qj8 = await CourtFarming_HTStake.new({from: accounts[5]});
		const uintPZ8t3QY = BigInt("0")
		const addressyDR8V0Q = accounts[1]
		const uintc6SY9kI = BigInt("1711")
		const addressTbjpeqQ = accounts[6]
		const uintKZI0we8 = BigInt("1878")
		const uintwiPbuh = BigInt("775")
		const uintVlGJKn7 = BigInt("342")
		const uintdCf3SeS = BigInt("808")
		const uintT2dgzlc = BigInt("1040")
		const uintyXot837 = BigInt("1498")
		const uintGkZyZxe = BigInt("49")
		const boolf29ezS = await CourtFarming_HTStakexdl0qj8.stakeIncvRewards.call(uintPZ8t3QY, {from: accounts[3]});
		const uint256WBfRvr = await CourtFarming_HTStakexdl0qj8.incvRewardClaim.call({from: accounts[4]});
		const addressOEBVdOl = await CourtFarming_HTStakexdl0qj8.getBeneficiaryInfo.call(addressyDR8V0Q, {from: accounts[0]});
		const uint256ABmjBIX = await CourtFarming_HTStakexdl0qj8.getCurrentTime.call({from: accounts[1]});
		const uint256qNYTfLn = await CourtFarming_HTStakexdl0qj8.blockNumber.call({from: accounts[3]});
		const boolSrp5J61 = await CourtFarming_HTStakexdl0qj8.stakeIncvRewards.call(uintc6SY9kI, {from: accounts[0]});
		const uint256qkRPzQZ = await CourtFarming_HTStakexdl0qj8.incvRewardInfo.call({from: accounts[2]});
		const uint256sRivlF1 = await CourtFarming_HTStakexdl0qj8.rewards.call(addressTbjpeqQ, {from: "0x0000000000000000000000000000000000000001"});
//		await CourtFarming_HTStakexdl0qj8.changeStakeParameters.call(uintVlGJKn7, uintwiPbuh, uintKZI0we8, {from: accounts[2]});
//		const uint256Xz20UQh = await CourtFarming_HTStakexdl0qj8._stakeParametrsCalculation.call(uintyXot837, uintT2dgzlc, uintdCf3SeS, {from: accounts[1]});
//		const uint256qSZzIU = await CourtFarming_HTStakexdl0qj8.stake.call(uintGkZyZxe, {from: accounts[5]});

		assert.equal(boolSrp5J61, false)
		assert.equal(boolf29ezS, false)
		assert.equal(uint256ABmjBIX, BigInt("1630201376"))
		assert.equal(uint256WBfRvr, BigInt("0"))
		assert.equal(uint256qNYTfLn, BigInt("1706"))
		await expect(CourtFarming_HTStakexdl0qj8.changeStakeParameters.call(uintVlGJKn7, uintwiPbuh, uintKZI0we8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})