const CourtFarming_RoomLPStake = artifacts.require("CourtFarming_RoomLPStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_RoomLPStake', (accounts) => {
	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakebxU0e5 = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uintHiNqvKd = BigInt("1818")
		const addressFZSVPG1 = accounts[0]
//		const uint256OjP44Nd = await CourtFarming_RoomLPStakebxU0e5.stake.call(uintHiNqvKd, {from: accounts[0]});
//		const uint256t5y5GvL = await CourtFarming_RoomLPStakebxU0e5.totalStaked.call({from: accounts[1]});
//		const uint256wDdL9X0 = await CourtFarming_RoomLPStakebxU0e5.incvRewardClaim.call({from: accounts[1]});
//		const uint256MsgvJpz = await CourtFarming_RoomLPStakebxU0e5.rewards.call(addressFZSVPG1, {from: accounts[0]});
//		const uint256EETnyke = await CourtFarming_RoomLPStakebxU0e5.totalStaked.call({from: accounts[2]});

		await expect(CourtFarming_RoomLPStakebxU0e5.stake.call(uintHiNqvKd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakebhtxIFe = await CourtFarming_RoomLPStake.new({from: "0x0000000000000000000000000000000000000001"});
		const boolKvJ4mEn = false
		const uintMhIK9BL = BigInt("726")
		const addressUuIT7Wv = accounts[4]
		const uint256WdWceKb = await CourtFarming_RoomLPStakebhtxIFe.unstake.call(uintMhIK9BL, boolKvJ4mEn, {from: accounts[1]});
		const uint256owzNSEG = await CourtFarming_RoomLPStakebhtxIFe.getCurrentTime.call({from: accounts[1]});
		const uint256LYp5cT0 = await CourtFarming_RoomLPStakebhtxIFe.rewards.call(addressUuIT7Wv, {from: accounts[5]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakefvmpmk6 = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addressVETxE9B = accounts[0]
		const addressfBsrXqH = accounts[4]
		const boolxblrSo = false
		const uintCbm1DIZ = BigInt("2036")
		const addresszVQg3Z2 = accounts[1]
//		const addressILwETHz = await CourtFarming_RoomLPStakefvmpmk6.setCourtStake.call(addressVETxE9B, {from: accounts[2]});
//		const uint256SFY1jEx = await CourtFarming_RoomLPStakefvmpmk6.rewards.call(addressfBsrXqH, {from: accounts[0]});
//		const uint256y96HbD = await CourtFarming_RoomLPStakefvmpmk6.totalStaked.call({from: accounts[2]});
//		const uint256yUOnVKA = await CourtFarming_RoomLPStakefvmpmk6.unstake.call(uintCbm1DIZ, boolxblrSo, {from: accounts[4]});
//		const uint256ftq616 = await CourtFarming_RoomLPStakefvmpmk6.totalStaked.call({from: accounts[4]});
//		const addressAcvB64 = await CourtFarming_RoomLPStakefvmpmk6.updateReward.call(addresszVQg3Z2, {from: accounts[1]});

		await expect(CourtFarming_RoomLPStakefvmpmk6.setCourtStake.call(addressVETxE9B, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakevJ1iNhS = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const addressr8Uri3Y = accounts[4]
		const addressfS80TOR = accounts[4]
		const addressgqOzg8P = await CourtFarming_RoomLPStakevJ1iNhS.updateReward.call(addressr8Uri3Y, {from: accounts[0]});
		const addressNIImhAH = await CourtFarming_RoomLPStakevJ1iNhS.getBeneficiaryInfo.call(addressfS80TOR, {from: accounts[1]});
		const uint256yw57on = await CourtFarming_RoomLPStakevJ1iNhS.blockNumber.call({from: accounts[1]});
		const uint256mFZc1YY = await CourtFarming_RoomLPStakevJ1iNhS.totalStaked.call({from: accounts[0]});
		const uint256lU8UbmL = await CourtFarming_RoomLPStakevJ1iNhS.blockNumber.call({from: accounts[4]});

		assert.equal(uint256lU8UbmL, BigInt("1754"))
		assert.equal(uint256mFZc1YY, BigInt("0"))
		assert.equal(uint256yw57on, BigInt("1754"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakexhHmosg = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressmqrL1HK = "0x0000000000000000000000000000000000000001"
		const addressC4FyU8 = accounts[2]
		const uint256TNBDWZf = await CourtFarming_RoomLPStakexhHmosg.lastUpdateBlock.call({from: accounts[4]});
		const addressFw9H90n = await CourtFarming_RoomLPStakexhHmosg.updateReward.call(addressmqrL1HK, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ggiFPD = await CourtFarming_RoomLPStakexhHmosg.balanceOf.call(addressC4FyU8, {from: accounts[2]});
		const uint256NvDqNON = await CourtFarming_RoomLPStakexhHmosg.incvRewardClaim.call({from: accounts[4]});

		assert.equal(uint256NvDqNON, BigInt("0"))
		assert.equal(uint256TNBDWZf, BigInt("1754"))
		assert.equal(uint256ggiFPD, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeB20HPf9 = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const boolnZI2Naa = true
		const uintXJ3OyW9 = BigInt("732")
		const addressBLnvbj = accounts[3]
		const uintS9oMIJA = BigInt("1858")
		const addressWNaVuKm = accounts[4]
//		const uint256so4kHDJ = await CourtFarming_RoomLPStakeB20HPf9.unstake.call(uintXJ3OyW9, boolnZI2Naa, {from: accounts[0]});
//		const uint256hjTpaxI = await CourtFarming_RoomLPStakeB20HPf9.incvRewardInfo.call({from: accounts[0]});
//		const addressvu59Xm1 = await CourtFarming_RoomLPStakeB20HPf9.updateReward.call(addressBLnvbj, {from: accounts[0]});
//		const boolOX7wED9 = await CourtFarming_RoomLPStakeB20HPf9.stakeIncvRewards.call(uintS9oMIJA, {from: accounts[4]});
//		const addressVyAAOLZ = await CourtFarming_RoomLPStakeB20HPf9.updateReward.call(addressWNaVuKm, {from: accounts[2]});
//		const uint256gwZDUUV = await CourtFarming_RoomLPStakeB20HPf9.blockNumber.call({from: accounts[4]});

		await expect(CourtFarming_RoomLPStakeB20HPf9.unstake.call(uintXJ3OyW9, boolnZI2Naa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStake1YFnnv = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const addressKJESHJO = accounts[5]
		const address8MF1y4 = accounts[2]
		const addressTUkaHU3 = "0x0000000000000000000000000000000000000001"
		const uintJ6UVdrb = BigInt("1374")
		const addressgtxKqcY = await CourtFarming_RoomLPStake1YFnnv.getBeneficiaryInfo.call(addressKJESHJO, {from: accounts[4]});
		const addressHBdoyi1 = await CourtFarming_RoomLPStake1YFnnv.getBeneficiaryInfo.call(address8MF1y4, {from: accounts[0]});
		const addressILz6jBW = await CourtFarming_RoomLPStake1YFnnv.getBeneficiaryInfo.call(addressTUkaHU3, {from: accounts[3]});
		const boolTlwwP4d = await CourtFarming_RoomLPStake1YFnnv.stakeIncvRewards.call(uintJ6UVdrb, {from: accounts[0]});

		assert.equal(boolTlwwP4d, false)
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakevJ1iNhS = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const addressOwAYY0V = accounts[4]
		const uintseEFy0S = BigInt("1159")
		const addresscR033GY = accounts[4]
		const uintRFZAvrY = BigInt("1633")
		const addressgqOzg8P = await CourtFarming_RoomLPStakevJ1iNhS.updateReward.call(addressOwAYY0V, {from: accounts[0]});
		const uint256fxY9o8g = await CourtFarming_RoomLPStakevJ1iNhS.expectedRewardsToday.call(uintseEFy0S, {from: "0x0000000000000000000000000000000000000001"});
		const addressNIImhAH = await CourtFarming_RoomLPStakevJ1iNhS.getBeneficiaryInfo.call(addresscR033GY, {from: accounts[1]});
		const uint256yw57on = await CourtFarming_RoomLPStakevJ1iNhS.blockNumber.call({from: accounts[1]});
		const uint256mFZc1YY = await CourtFarming_RoomLPStakevJ1iNhS.totalStaked.call({from: accounts[0]});
//		const uint256EQss6uM = await CourtFarming_RoomLPStakevJ1iNhS.stake.call(uintRFZAvrY, {from: accounts[2]});
//		const uint256lU8UbmL = await CourtFarming_RoomLPStakevJ1iNhS.blockNumber.call({from: accounts[4]});

		assert.equal(uint256mFZc1YY, BigInt("0"))
		assert.equal(uint256yw57on, BigInt("1754"))
		await expect(CourtFarming_RoomLPStakevJ1iNhS.stake.call(uintRFZAvrY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakexhHmosg = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressfNPn00g = "0x0000000000000000000000000000000000000001"
		const addressV9ZFzBA = accounts[2]
		const addressadSiKsg = accounts[3]
		const addressFw9H90n = await CourtFarming_RoomLPStakexhHmosg.updateReward.call(addressfNPn00g, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ggiFPD = await CourtFarming_RoomLPStakexhHmosg.balanceOf.call(addressV9ZFzBA, {from: accounts[2]});
//		const addressaOJd47k = await CourtFarming_RoomLPStakexhHmosg.setCourtStake.call(addressadSiKsg, {from: accounts[0]});
//		const uint256NvDqNON = await CourtFarming_RoomLPStakexhHmosg.incvRewardClaim.call({from: accounts[4]});

		assert.equal(uint256ggiFPD, BigInt("0"))
		await expect(CourtFarming_RoomLPStakexhHmosg.setCourtStake.call(addressadSiKsg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeZechODm = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const uintzOVWhoJ = BigInt("1752")
		const uint256aFula47 = await CourtFarming_RoomLPStakeZechODm.expectedRewardsToday.call(uintzOVWhoJ, {from: accounts[0]});
		const uint256FMbh4br = await CourtFarming_RoomLPStakeZechODm.incvRewardInfo.call({from: accounts[4]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeZechODm = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const addresszM5e0I6 = accounts[0]
		const uintAYBSwFF = BigInt("1885")
		const uintvX2oinq = BigInt("959")
		const uintGnLaQTT = BigInt("134")
		const uintgOBZYr5 = BigInt("794")
		const uint256veE6BUM = await CourtFarming_RoomLPStakeZechODm.rewards.call(addresszM5e0I6, {from: "0x0000000000000000000000000000000000000001"});
//		await CourtFarming_RoomLPStakeZechODm.changeStakeParameters.call(uintGnLaQTT, uintvX2oinq, uintAYBSwFF, {from: accounts[3]});
//		const uint256nD6XzZh = await CourtFarming_RoomLPStakeZechODm.incvRewardInfo.call({from: accounts[1]});
//		const boolhOEuzNL = await CourtFarming_RoomLPStakeZechODm.stakeIncvRewards.call(uintgOBZYr5, {from: accounts[3]});
//		const uint256V7srPk4 = await CourtFarming_RoomLPStakeZechODm.blockNumber.call({from: accounts[3]});
//		const uint256FMbh4br = await CourtFarming_RoomLPStakeZechODm.incvRewardInfo.call({from: accounts[4]});

		await expect(CourtFarming_RoomLPStakeZechODm.changeStakeParameters.call(uintGnLaQTT, uintvX2oinq, uintAYBSwFF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakexhHmosg = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressvG5BTcJ = "0x00000000000000000000000000000000000000-1"
		const uintKKpwt0e = BigInt("160")
		const uintyzkqAo = BigInt("516")
//		const addressFw9H90n = await CourtFarming_RoomLPStakexhHmosg.updateReward.call(addressvG5BTcJ, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256vxEfcsR = await CourtFarming_RoomLPStakexhHmosg.stake.call(uintKKpwt0e, {from: accounts[2]});
//		const uint256C1NwRAf = await CourtFarming_RoomLPStakexhHmosg.expectedRewardsToday.call(uintyzkqAo, {from: accounts[3]});

		await expect(CourtFarming_RoomLPStakexhHmosg.updateReward.call(addressvG5BTcJ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeNMM4vO8 = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uintR2ecKbs = BigInt("1139")
		const uintmePfRdz = BigInt("1389")
		const uintmjGupU = BigInt("450")
		const uintCDSw1e0 = BigInt("1636")
		const uintYxwz4la = BigInt("326")
		const uinttMrIxOc = BigInt("752")
		const uint256DRXCJnY = await CourtFarming_RoomLPStakeNMM4vO8.getCurrentTime.call({from: accounts[3]});
//		await CourtFarming_RoomLPStakeNMM4vO8.changeStakeParameters.call(uintmjGupU, uintmePfRdz, uintR2ecKbs, {from: accounts[0]});
//		const boolKGHTQfo = await CourtFarming_RoomLPStakeNMM4vO8.stakeIncvRewards.call(uintCDSw1e0, {from: accounts[0]});
//		const uint256IScNYS = await CourtFarming_RoomLPStakeNMM4vO8.stake.call(uintYxwz4la, {from: accounts[2]});
//		const uint256iFEbwMZ = await CourtFarming_RoomLPStakeNMM4vO8.expectedRewardsToday.call(uinttMrIxOc, {from: accounts[1]});

		assert.equal(uint256DRXCJnY, BigInt("1630201592"))
		await expect(CourtFarming_RoomLPStakeNMM4vO8.changeStakeParameters.call(uintmjGupU, uintmePfRdz, uintR2ecKbs, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeZechODm = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const uintSQaea0R = BigInt("1403")
		const uintxtpGXU = BigInt("0")
		const boolswFWY9J = await CourtFarming_RoomLPStakeZechODm.stakeIncvRewards.call(uintSQaea0R, {from: accounts[5]});
		const boolUEYcYV1 = await CourtFarming_RoomLPStakeZechODm.stakeIncvRewards.call(uintxtpGXU, {from: accounts[1]});

		assert.equal(boolUEYcYV1, false)
		assert.equal(boolswFWY9J, false)
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeZechODm = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const addressflNdu17 = accounts[3]
		const addressfkibCSu = accounts[0]
		const addressvcC3XRk = accounts[3]
		const uintHj5Bw46 = BigInt("0")
		const uint256vicEr8L = await CourtFarming_RoomLPStakeZechODm.rewards.call(addressflNdu17, {from: accounts[3]});
		const uint256RCa8BU8 = await CourtFarming_RoomLPStakeZechODm.incvRewardClaim.call({from: accounts[3]});
		const uint256GPelsyg = await CourtFarming_RoomLPStakeZechODm.balanceOf.call(addressfkibCSu, {from: accounts[4]});
		const addressYyCoE64 = await CourtFarming_RoomLPStakeZechODm.getBeneficiaryInfo.call(addressvcC3XRk, {from: accounts[5]});
		const uint256AsUX5vT = await CourtFarming_RoomLPStakeZechODm.stake.call(uintHj5Bw46, {from: accounts[2]});

		assert.equal(uint256GPelsyg, BigInt("0"))
		assert.equal(uint256RCa8BU8, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakekbPO9tq = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const boolsea1TK4 = false
		const uintPAJBiv = BigInt("0")
		const uint256kshJ7BY = await CourtFarming_RoomLPStakekbPO9tq.unstake.call(uintPAJBiv, boolsea1TK4, {from: accounts[2]});
	});
})