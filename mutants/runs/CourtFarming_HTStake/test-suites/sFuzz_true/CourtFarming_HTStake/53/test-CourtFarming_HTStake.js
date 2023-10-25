const CourtFarming_HTStake = artifacts.require("CourtFarming_HTStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_HTStake', (accounts) => {
	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeyWPFEjw = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintmrMS98O = BigInt("240")
		const uint40gznC = BigInt("1334")
		const uinteq6C9Xv = BigInt("340")
		const uintzKysyNI = BigInt("396")
		const uintozi6yJf = BigInt("799")
		const boolHz2ASby = await CourtFarming_HTStakeyWPFEjw.stakeIncvRewards.call(uintmrMS98O, {from: accounts[2]});
		const uint256Z5xrqdC = await CourtFarming_HTStakeyWPFEjw.getCurrentTime.call({from: accounts[1]});
		const uint256nR12dFo = await CourtFarming_HTStakeyWPFEjw.stake.call(uint40gznC, {from: accounts[4]});
		await CourtFarming_HTStakeyWPFEjw.changeStakeParameters.call(uintozi6yJf, uintzKysyNI, uinteq6C9Xv, {from: accounts[4]});

		assert.equal(boolHz2ASby, false)
		assert.equal(uint256Z5xrqdC, BigInt("1630201459"))
		await expect(CourtFarming_HTStakeyWPFEjw.stake.call(uint40gznC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeR0qBfto = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintBtB38Xi = BigInt("797")
		const uintSmn4n5W = BigInt("776")
		const boolPNl396l = await CourtFarming_HTStakeR0qBfto.stakeIncvRewards.call(uintBtB38Xi, {from: accounts[4]});
		const uint256IaKBOyM = await CourtFarming_HTStakeR0qBfto.incvRewardClaim.call({from: accounts[0]});
		const boolTsokVeQ = await CourtFarming_HTStakeR0qBfto.stakeIncvRewards.call(uintSmn4n5W, {from: accounts[3]});

		assert.equal(boolPNl396l, false)
		assert.equal(boolTsokVeQ, false)
		assert.equal(uint256IaKBOyM, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeCa6Hx5o = await CourtFarming_HTStake.new({from: accounts[5]});
		const addresstDkWOAT = accounts[0]
		const addressstlPCAG = accounts[0]
		const addressq914Uax = accounts[1]
		const uintv4XA6u6 = BigInt("1346")
		const addresskmPhSpS = await CourtFarming_HTStakeCa6Hx5o.updateReward.call(addresstDkWOAT, {from: accounts[3]});
		const addressLURxI0 = await CourtFarming_HTStakeCa6Hx5o.updateReward.call(addressstlPCAG, {from: accounts[2]});
		const uint256cBI8iZ = await CourtFarming_HTStakeCa6Hx5o.rewards.call(addressq914Uax, {from: accounts[2]});
		const uint256WZaORt = await CourtFarming_HTStakeCa6Hx5o.getCurrentTime.call({from: accounts[4]});
		const uint256IGuVYpP = await CourtFarming_HTStakeCa6Hx5o.stake.call(uintv4XA6u6, {from: accounts[2]});
		const uint256ffiLkeG = await CourtFarming_HTStakeCa6Hx5o.blockNumber.call({from: accounts[0]});

		assert.equal(uint256WZaORt, BigInt("1630201470"))
		await expect(CourtFarming_HTStakeCa6Hx5o.stake.call(uintv4XA6u6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeGJkbPwS = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintYUjFC1G = BigInt("1965")
		const uintD0YrgzS = BigInt("25")
		const uintSN2RCQC = BigInt("1540")
		const boolQsNeiMB = false
		const uintod6zHds = BigInt("269")
		const uintwa0ua4 = BigInt("1255")
		const uint2565hK69g = await CourtFarming_HTStakeGJkbPwS._stakeParametrsCalculation.call(uintSN2RCQC, uintD0YrgzS, uintYUjFC1G, {from: accounts[3]});
		const uint256vLRzdyX = await CourtFarming_HTStakeGJkbPwS.unstake.call(uintod6zHds, boolQsNeiMB, {from: accounts[1]});
		const uint256Jk4RvJI = await CourtFarming_HTStakeGJkbPwS.stake.call(uintwa0ua4, {from: accounts[3]});
		const uint256q6O46nr = await CourtFarming_HTStakeGJkbPwS.blockNumber.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(CourtFarming_HTStakeGJkbPwS._stakeParametrsCalculation.call(uintSN2RCQC, uintD0YrgzS, uintYUjFC1G, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeeFWCQQB = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintSAggz5V = BigInt("511")
		const uintWffIjls = BigInt("146")
		const addresspbuSEL = accounts[4]
		const uintHJwx30I = BigInt("1309")
		const uint256oxSrlUO = await CourtFarming_HTStakeeFWCQQB.expectedRewardsToday.call(uintSAggz5V, {from: accounts[4]});
		const uint256fj39xp1 = await CourtFarming_HTStakeeFWCQQB.getCurrentTime.call({from: accounts[0]});
		const uint256YiHFQQv = await CourtFarming_HTStakeeFWCQQB.totalStaked.call({from: accounts[5]});
		const uint256dqy4Qg4 = await CourtFarming_HTStakeeFWCQQB.stake.call(uintWffIjls, {from: accounts[0]});
		const addressG9ov1OJ = await CourtFarming_HTStakeeFWCQQB.updateReward.call(addresspbuSEL, {from: accounts[0]});
		const uint256TeoVfqD = await CourtFarming_HTStakeeFWCQQB.expectedRewardsToday.call(uintHJwx30I, {from: accounts[2]});

		assert.equal(uint256YiHFQQv, BigInt("0"))
		assert.equal(uint256fj39xp1, BigInt("1630201464"))
		await expect(CourtFarming_HTStakeeFWCQQB.stake.call(uintWffIjls, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakemDq3wfE = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintO85H7Hd = BigInt("336")
		const uintxcJXPy4 = BigInt("1800")
		const uintPyfFHm = BigInt("1421")
		const uintcYnTxJh = BigInt("505")
		const uintFabi3OO = BigInt("500")
		const uintlZfTJzs = BigInt("791")
		const uint1b6NRY = BigInt("595")
		const addressEpmQnU3 = accounts[1]
		const uintoPS4UEe = BigInt("1245")
		const uintnG9303c = BigInt("543")
		const uintKbHEJTv = BigInt("1700")
		const booldjsulAe = true
		const uintttVe65r = BigInt("85")
		const uint256pBbKwHx = await CourtFarming_HTStakemDq3wfE.expectedRewardsToday.call(uintO85H7Hd, {from: accounts[0]});
		await CourtFarming_HTStakemDq3wfE.changeStakeParameters.call(uintcYnTxJh, uintPyfFHm, uintxcJXPy4, {from: accounts[0]});
		const uint256x7BiDOl = await CourtFarming_HTStakemDq3wfE._stakeParametrsCalculation.call(uint1b6NRY, uintlZfTJzs, uintFabi3OO, {from: accounts[1]});
		const uint256hsPlByw = await CourtFarming_HTStakemDq3wfE.rewards.call(addressEpmQnU3, {from: accounts[4]});
		await CourtFarming_HTStakemDq3wfE.changeStakeParameters.call(uintKbHEJTv, uintnG9303c, uintoPS4UEe, {from: accounts[0]});
		const uint256H9Et4j5 = await CourtFarming_HTStakemDq3wfE.unstake.call(uintttVe65r, booldjsulAe, {from: accounts[5]});

		await expect(CourtFarming_HTStakemDq3wfE.changeStakeParameters.call(uintcYnTxJh, uintPyfFHm, uintxcJXPy4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakerpmhBO5 = await CourtFarming_HTStake.new({from: "0x0000000000000000000000000000000000000001"});
		const addressbCXCiIT = accounts[3]
		const addressIAm1JiA = accounts[2]
		const uintTTcI7QS = BigInt("1941")
		const uint256GLFbCS = await CourtFarming_HTStakerpmhBO5.rewards.call(addressbCXCiIT, {from: accounts[1]});
		const uint256gZjBmr1 = await CourtFarming_HTStakerpmhBO5.balanceOf.call(addressIAm1JiA, {from: accounts[4]});
		const uint256oLAsKwZ = await CourtFarming_HTStakerpmhBO5.blockNumber.call({from: accounts[0]});
		const uint256l1pwAWX = await CourtFarming_HTStakerpmhBO5.incvRewardClaim.call({from: accounts[3]});
		const uint256yYYJHLh = await CourtFarming_HTStakerpmhBO5.totalStaked.call({from: accounts[4]});
		const uint256YPvo1IR = await CourtFarming_HTStakerpmhBO5.stake.call(uintTTcI7QS, {from: accounts[0]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakePSwDiqF = await CourtFarming_HTStake.new({from: accounts[3]});
		const addresseytlz6d = accounts[3]
		const bool4M9Dre = false
		const uintpBnDL2I = BigInt("111")
		const addressfD0mmdX = await CourtFarming_HTStakePSwDiqF.setCourtStake.call(addresseytlz6d, {from: accounts[0]});
		const uint256YW8BnlR = await CourtFarming_HTStakePSwDiqF.lastUpdateBlock.call({from: accounts[4]});
		const uint256HmQSVzT = await CourtFarming_HTStakePSwDiqF.unstake.call(uintpBnDL2I, bool4M9Dre, {from: accounts[0]});
		const uint256RQZ6NQD = await CourtFarming_HTStakePSwDiqF.lastUpdateBlock.call({from: accounts[3]});

		await expect(CourtFarming_HTStakePSwDiqF.setCourtStake.call(addresseytlz6d, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeCa6Hx5o = await CourtFarming_HTStake.new({from: accounts[5]});
		const addresszVbzbzA = accounts[0]
		const boolryX3kj9 = false
		const uinttwoctl = BigInt("527")
		const addressZXTtqni = accounts[0]
		const uintpk6vGHX = BigInt("1346")
		const addresskmPhSpS = await CourtFarming_HTStakeCa6Hx5o.updateReward.call(addresszVbzbzA, {from: accounts[3]});
		const uint256qO5eZj9 = await CourtFarming_HTStakeCa6Hx5o.unstake.call(uinttwoctl, boolryX3kj9, {from: accounts[2]});
		const addressLURxI0 = await CourtFarming_HTStakeCa6Hx5o.updateReward.call(addressZXTtqni, {from: accounts[2]});
		const uint256WZaORt = await CourtFarming_HTStakeCa6Hx5o.getCurrentTime.call({from: accounts[4]});
		const uint256IGuVYpP = await CourtFarming_HTStakeCa6Hx5o.stake.call(uintpk6vGHX, {from: accounts[2]});
		const uint256LAtUgSn = await CourtFarming_HTStakeCa6Hx5o.lastUpdateBlock.call({from: accounts[4]});
		const uint256ffiLkeG = await CourtFarming_HTStakeCa6Hx5o.blockNumber.call({from: accounts[0]});

		await expect(CourtFarming_HTStakeCa6Hx5o.unstake.call(uinttwoctl, boolryX3kj9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakez3Ov9mc = await CourtFarming_HTStake.new({from: accounts[0]});
		const addressHS3JC1J = "0x0000000000000000000000000000000000000001"
		const uint256MRxXqFk = await CourtFarming_HTStakez3Ov9mc.balanceOf.call(addressHS3JC1J, {from: "0x0000000000000000000000000000000000000001"});
		const uint256tis0JbI = await CourtFarming_HTStakez3Ov9mc.blockNumber.call({from: accounts[1]});

		assert.equal(uint256MRxXqFk, BigInt("0"))
		assert.equal(uint256tis0JbI, BigInt("1795"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeEvWy7e = await CourtFarming_HTStake.new({from: accounts[0]});
		const addressgcnxSir = accounts[1]
		const addressJHCOpKK = accounts[1]
		const addressXnllYUF = accounts[0]
		const addressDp4tE7K = accounts[1]
		const uint256JoEPHNe = await CourtFarming_HTStakeEvWy7e.rewards.call(addressgcnxSir, {from: accounts[4]});
		const uint256sdrIPKR = await CourtFarming_HTStakeEvWy7e.rewards.call(addressJHCOpKK, {from: accounts[1]});
		const addressXKbwnqO = await CourtFarming_HTStakeEvWy7e.getBeneficiaryInfo.call(addressXnllYUF, {from: accounts[0]});
		const addresseu78Asj = await CourtFarming_HTStakeEvWy7e.setCourtStake.call(addressDp4tE7K, {from: accounts[1]});

		await expect(CourtFarming_HTStakeEvWy7e.setCourtStake.call(addressDp4tE7K, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeeFWCQQB = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintePlb3Jv = BigInt("511")
		const uintKloZLC = BigInt("38")
		const uinthZ0AXT = BigInt("147")
		const addresszFq8CeZ = accounts[4]
		const addressWq3ecsG = accounts[4]
		const uintvI9cBBd = BigInt("1309")
		const uint256oxSrlUO = await CourtFarming_HTStakeeFWCQQB.expectedRewardsToday.call(uintePlb3Jv, {from: accounts[4]});
		const uint256fj39xp1 = await CourtFarming_HTStakeeFWCQQB.getCurrentTime.call({from: accounts[0]});
		const uint256YiHFQQv = await CourtFarming_HTStakeeFWCQQB.totalStaked.call({from: accounts[5]});
		const boolhDYPeRF = await CourtFarming_HTStakeeFWCQQB.stakeIncvRewards.call(uintKloZLC, {from: accounts[1]});
		const uint256TnwNr44 = await CourtFarming_HTStakeeFWCQQB.lastUpdateBlock.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256dqy4Qg4 = await CourtFarming_HTStakeeFWCQQB.stake.call(uinthZ0AXT, {from: accounts[0]});
		const addressP0rdFt = await CourtFarming_HTStakeeFWCQQB.setCourtStake.call(addresszFq8CeZ, {from: accounts[3]});
		const uint256T9DHWI = await CourtFarming_HTStakeeFWCQQB.getCurrentTime.call({from: accounts[2]});
		const addressG9ov1OJ = await CourtFarming_HTStakeeFWCQQB.updateReward.call(addressWq3ecsG, {from: accounts[0]});
		const uint256TeoVfqD = await CourtFarming_HTStakeeFWCQQB.expectedRewardsToday.call(uintvI9cBBd, {from: accounts[2]});

		assert.equal(boolhDYPeRF, false)
		assert.equal(uint256TnwNr44, BigInt("1795"))
		assert.equal(uint256YiHFQQv, BigInt("0"))
		assert.equal(uint256fj39xp1, BigInt("1630201465"))
		await expect(CourtFarming_HTStakeeFWCQQB.stake.call(uinthZ0AXT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeEdYKe3t = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressExEAj6N = accounts[1]
		const uint256JoYPMyz = await CourtFarming_HTStakeEdYKe3t.totalStaked.call({from: accounts[1]});
		const uint256jsWFdM = await CourtFarming_HTStakeEdYKe3t.incvRewardClaim.call({from: accounts[0]});
		const uint256mjVdfPc = await CourtFarming_HTStakeEdYKe3t.incvRewardInfo.call({from: accounts[2]});
		const addressGNgZ9rv = await CourtFarming_HTStakeEdYKe3t.setCourtStake.call(addressExEAj6N, {from: accounts[2]});
		const uint256bwpk88N = await CourtFarming_HTStakeEdYKe3t.incvRewardInfo.call({from: accounts[1]});

		assert.equal(uint256JoYPMyz, BigInt("0"))
		assert.equal(uint256jsWFdM, BigInt("0"))
		await expect(CourtFarming_HTStakeEdYKe3t.setCourtStake.call(addressExEAj6N, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeR0qBfto = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintAfS5tJ4 = BigInt("797")
		const addressITFFmb4 = accounts[5]
		const uintqsD7wGn = BigInt("399")
		const uintay8Nie = BigInt("581")
		const uintHLYHi8z = BigInt("856")
		const uintSe7txBO = BigInt("776")
		const boolPNl396l = await CourtFarming_HTStakeR0qBfto.stakeIncvRewards.call(uintAfS5tJ4, {from: accounts[4]});
		const uint256IaKBOyM = await CourtFarming_HTStakeR0qBfto.incvRewardClaim.call({from: accounts[0]});
		const addressNrxK0iu = await CourtFarming_HTStakeR0qBfto.updateReward.call(addressITFFmb4, {from: accounts[0]});
		const uint256SIZuFcQ = await CourtFarming_HTStakeR0qBfto.incvRewardClaim.call({from: accounts[3]});
		await CourtFarming_HTStakeR0qBfto.changeStakeParameters.call(uintHLYHi8z, uintay8Nie, uintqsD7wGn, {from: accounts[1]});
		const boolTsokVeQ = await CourtFarming_HTStakeR0qBfto.stakeIncvRewards.call(uintSe7txBO, {from: accounts[3]});

		assert.equal(boolPNl396l, false)
		assert.equal(uint256IaKBOyM, BigInt("0"))
		assert.equal(uint256SIZuFcQ, BigInt("0"))
		await expect(CourtFarming_HTStakeR0qBfto.changeStakeParameters.call(uintHLYHi8z, uintay8Nie, uintqsD7wGn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStake2IGsvh = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintoNlThN1 = BigInt("1293")
		const addressL5Rp5mZ = accounts[0]
		const uint256wzbFXkt = await CourtFarming_HTStake2IGsvh.expectedRewardsToday.call(uintoNlThN1, {from: accounts[4]});
		const uint256tVU52yw = await CourtFarming_HTStake2IGsvh.totalStaked.call({from: accounts[1]});
		const address0Iw6I1 = await CourtFarming_HTStake2IGsvh.setCourtStake.call(addressL5Rp5mZ, {from: accounts[0]});

		assert.equal(uint256tVU52yw, BigInt("0"))
		await expect(CourtFarming_HTStake2IGsvh.setCourtStake.call(addressL5Rp5mZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeEvWy7e = await CourtFarming_HTStake.new({from: accounts[0]});
		const addressbvJmZ7c = accounts[5]
		const uintELVZyoy = BigInt("710")
		const uintnHuhop = BigInt("1137")
		const uintDbDx0Uy = BigInt("786")
		const uintAqSJmBq = BigInt("0")
		const boolyqhDx7Q = true
		const uintGRcHUaO = BigInt("63")
		const uintqLWtO1p = BigInt("1605")
		const addresslW3aVdk = await CourtFarming_HTStakeEvWy7e.getBeneficiaryInfo.call(addressbvJmZ7c, {from: accounts[3]});
		await CourtFarming_HTStakeEvWy7e.changeStakeParameters.call(uintDbDx0Uy, uintnHuhop, uintELVZyoy, {from: accounts[0]});
		const uint256gcssGeo = await CourtFarming_HTStakeEvWy7e.stake.call(uintAqSJmBq, {from: accounts[1]});
		const uint256hP3aqS0 = await CourtFarming_HTStakeEvWy7e.unstake.call(uintGRcHUaO, boolyqhDx7Q, {from: accounts[5]});
		const uint256l30g1Kb = await CourtFarming_HTStakeEvWy7e.expectedRewardsToday.call(uintqLWtO1p, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CourtFarming_HTStakeEvWy7e.changeStakeParameters.call(uintDbDx0Uy, uintnHuhop, uintELVZyoy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeeFWCQQB = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintDB8jMqU = BigInt("2024")
		const uintofusxlD = BigInt("0")
		const boolGVXAoMk = false
		const uintxMyL9tv = BigInt("502")
		const uintqYwWDLr = BigInt("482")
		const boolT8LHYEP = true
		const uintas2Iv6d = BigInt("1822")
		const addressV0vTWuB = accounts[6]
		const boolPDmchGk = true
		const uintZLcmk46 = BigInt("1827")
		const boolMuBFS9C = await CourtFarming_HTStakeeFWCQQB.stakeIncvRewards.call(uintDB8jMqU, {from: "0x0000000000000000000000000000000000000001"});
		const boolhDYPeRF = await CourtFarming_HTStakeeFWCQQB.stakeIncvRewards.call(uintofusxlD, {from: accounts[1]});
		const uint256be3d7Ll = await CourtFarming_HTStakeeFWCQQB.unstake.call(uintxMyL9tv, boolGVXAoMk, {from: accounts[0]});
		const uint256rU3gPE5 = await CourtFarming_HTStakeeFWCQQB.expectedRewardsToday.call(uintqYwWDLr, {from: accounts[2]});
		const uint256ExA8QGv = await CourtFarming_HTStakeeFWCQQB.unstake.call(uintas2Iv6d, boolT8LHYEP, {from: accounts[5]});
		const addressP0rdFt = await CourtFarming_HTStakeeFWCQQB.setCourtStake.call(addressV0vTWuB, {from: accounts[3]});
		const uint256kfHlXVt = await CourtFarming_HTStakeeFWCQQB.unstake.call(uintZLcmk46, boolPDmchGk, {from: accounts[3]});
		const uint256T9DHWI = await CourtFarming_HTStakeeFWCQQB.getCurrentTime.call({from: accounts[2]});

		assert.equal(boolMuBFS9C, false)
		assert.equal(boolhDYPeRF, false)
		await expect(CourtFarming_HTStakeeFWCQQB.unstake.call(uintxMyL9tv, boolGVXAoMk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeN44OLtW = await CourtFarming_HTStake.new({from: accounts[3]});
		const addressq8mHSAq = accounts[1]
		const addressqpMQRV = accounts[2]
		const boolftpDJaX = false
		const uintq1DSLns = BigInt("0")
		const uint256QXORuXb = await CourtFarming_HTStakeN44OLtW.incvRewardClaim.call({from: accounts[4]});
		const addressoaoD9co = await CourtFarming_HTStakeN44OLtW.updateReward.call(addressq8mHSAq, {from: accounts[3]});
		const addresspJEdf9v = await CourtFarming_HTStakeN44OLtW.getBeneficiaryInfo.call(addressqpMQRV, {from: accounts[1]});
		const uint256QlQi7Y = await CourtFarming_HTStakeN44OLtW.unstake.call(uintq1DSLns, boolftpDJaX, {from: accounts[4]});

		assert.equal(uint256QXORuXb, BigInt("0"))
	});
})