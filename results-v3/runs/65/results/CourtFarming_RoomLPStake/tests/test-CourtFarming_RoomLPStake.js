const CourtFarming_RoomLPStake = artifacts.require("CourtFarming_RoomLPStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_RoomLPStake', (accounts) => {
	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeN7KoFXv = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const addressqyXnUKT = accounts[4]
		const uintNOYxRGw = BigInt("1409")
		const uint256yd2T7Rs = await CourtFarming_RoomLPStakeN7KoFXv.getCurrentTime.call({from: accounts[2]});
		const uint256OKgvLDq = await CourtFarming_RoomLPStakeN7KoFXv.balanceOf.call(addressqyXnUKT, {from: accounts[0]});
		const uint256tGoHqd6 = await CourtFarming_RoomLPStakeN7KoFXv.lastUpdateBlock.call({from: accounts[3]});
		const boolvsd3yjW = await CourtFarming_RoomLPStakeN7KoFXv.stakeIncvRewards.call(uintNOYxRGw, {from: accounts[4]});

		assert.equal(boolvsd3yjW, false)
		assert.equal(uint256OKgvLDq, BigInt("0"))
		assert.equal(uint256tGoHqd6, BigInt("1223"))
		assert.equal(uint256yd2T7Rs, BigInt("1630199710"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakewMCFPk = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uint24DmgR = BigInt("1792")
		const uint256B5hVdT = await CourtFarming_RoomLPStakewMCFPk.incvRewardClaim.call({from: accounts[3]});
		const uint256Ybby0qS = await CourtFarming_RoomLPStakewMCFPk.incvRewardClaim.call({from: accounts[2]});
		const boolyigHhgx = await CourtFarming_RoomLPStakewMCFPk.stakeIncvRewards.call(uint24DmgR, {from: accounts[3]});

		assert.equal(boolyigHhgx, false)
		assert.equal(uint256B5hVdT, BigInt("0"))
		assert.equal(uint256Ybby0qS, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeRmeUFMN = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addresspRPN9Up = accounts[2]
		const uint256rf4VNE = await CourtFarming_RoomLPStakeRmeUFMN.totalStaked.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256QWysBeb = await CourtFarming_RoomLPStakeRmeUFMN.getCurrentTime.call({from: accounts[4]});
		const addressFF6eGMt = await CourtFarming_RoomLPStakeRmeUFMN.setCourtStake.call(addresspRPN9Up, {from: accounts[3]});

		assert.equal(uint256QWysBeb, BigInt("1630199725"))
		assert.equal(uint256rf4VNE, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeRmeUFMN.setCourtStake.call(addresspRPN9Up, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeCjLICM = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressCxwPaN1 = accounts[1]
		const addressgkiBL4g = accounts[1]
		const addressiMsNyeG = accounts[4]
		const uint256NYIgjFy = await CourtFarming_RoomLPStakeCjLICM.getCurrentTime.call({from: accounts[4]});
		const addressqz41Ft4 = await CourtFarming_RoomLPStakeCjLICM.updateReward.call(addressCxwPaN1, {from: "0x0000000000000000000000000000000000000001"});
		const uint256RFbhfr = await CourtFarming_RoomLPStakeCjLICM.incvRewardInfo.call({from: accounts[0]});
		const addressus1hO3o = await CourtFarming_RoomLPStakeCjLICM.setCourtStake.call(addressgkiBL4g, {from: accounts[4]});
		const addressdGq838 = await CourtFarming_RoomLPStakeCjLICM.getBeneficiaryInfo.call(addressiMsNyeG, {from: accounts[0]});

		assert.equal(uint256NYIgjFy, BigInt("1630199726"))
		await expect(CourtFarming_RoomLPStakeCjLICM.setCourtStake.call(addressgkiBL4g, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakejsRkFC1 = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const addressEiFuwXF = accounts[0]
		const addressIVt4HNC = accounts[2]
		const uintBDCS52q = BigInt("329")
		const uint256uUEqRLp = await CourtFarming_RoomLPStakejsRkFC1.totalStaked.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256aqNeyFB = await CourtFarming_RoomLPStakejsRkFC1.balanceOf.call(addressEiFuwXF, {from: accounts[4]});
		const uint256UYjCREA = await CourtFarming_RoomLPStakejsRkFC1.balanceOf.call(addressIVt4HNC, {from: "0x0000000000000000000000000000000000000001"});
		const uint256gPT2A2d = await CourtFarming_RoomLPStakejsRkFC1.expectedRewardsToday.call(uintBDCS52q, {from: accounts[2]});

		assert.equal(uint256UYjCREA, BigInt("0"))
		assert.equal(uint256aqNeyFB, BigInt("0"))
		assert.equal(uint256uUEqRLp, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakekqN4JIi = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uinthwgZ3H6 = BigInt("2013")
		const boolFZaGddH = true
		const uintVmN7Jzl = BigInt("822")
		const uint256RCPNqeM = await CourtFarming_RoomLPStakekqN4JIi.incvRewardClaim.call({from: accounts[0]});
		const uint256syRmmBf = await CourtFarming_RoomLPStakekqN4JIi.lastUpdateBlock.call({from: accounts[5]});
		const uint256BHI38Z = await CourtFarming_RoomLPStakekqN4JIi.expectedRewardsToday.call(uinthwgZ3H6, {from: accounts[0]});
		const uint256Bag73sA = await CourtFarming_RoomLPStakekqN4JIi.unstake.call(uintVmN7Jzl, boolFZaGddH, {from: accounts[0]});
		const uint256mCkNJCy = await CourtFarming_RoomLPStakekqN4JIi.incvRewardClaim.call({from: accounts[1]});

		assert.equal(uint256RCPNqeM, BigInt("0"))
		assert.equal(uint256syRmmBf, BigInt("1223"))
		await expect(CourtFarming_RoomLPStakekqN4JIi.unstake.call(uintVmN7Jzl, boolFZaGddH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakewMCFPk = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uinthknJDN = BigInt("570")
		const uintxXoSdJZ = BigInt("1807")
		const uint256B5hVdT = await CourtFarming_RoomLPStakewMCFPk.incvRewardClaim.call({from: accounts[3]});
		const uint256gi9vqN1 = await CourtFarming_RoomLPStakewMCFPk.stake.call(uinthknJDN, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Ybby0qS = await CourtFarming_RoomLPStakewMCFPk.incvRewardClaim.call({from: accounts[2]});
		const uint256uXtoE1a = await CourtFarming_RoomLPStakewMCFPk.totalStaked.call({from: accounts[0]});
		const boolyigHhgx = await CourtFarming_RoomLPStakewMCFPk.stakeIncvRewards.call(uintxXoSdJZ, {from: accounts[3]});

		assert.equal(uint256B5hVdT, BigInt("0"))
		await expect(CourtFarming_RoomLPStakewMCFPk.stake.call(uinthknJDN, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakegVbWLo0 = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uintFpsZsff = BigInt("1647")
		const uintEAFPHLQ = BigInt("979")
		const uintPZW7cIu = BigInt("296")
		const uintlRJamL7 = BigInt("1204")
		const addressnb7tjhV = accounts[1]
		const uintUvQogGy = BigInt("1450")
		await CourtFarming_RoomLPStakegVbWLo0.changeStakeParameters.call(uintPZW7cIu, uintEAFPHLQ, uintFpsZsff, {from: accounts[3]});
		const boolwsIzobx = await CourtFarming_RoomLPStakegVbWLo0.stakeIncvRewards.call(uintlRJamL7, {from: accounts[2]});
		const addressYRzBcBf = await CourtFarming_RoomLPStakegVbWLo0.updateReward.call(addressnb7tjhV, {from: accounts[1]});
		const uint256ZGx8fki = await CourtFarming_RoomLPStakegVbWLo0.stake.call(uintUvQogGy, {from: accounts[2]});
		const uint256RYWj4kx = await CourtFarming_RoomLPStakegVbWLo0.totalStaked.call({from: accounts[4]});

		await expect(CourtFarming_RoomLPStakegVbWLo0.changeStakeParameters.call(uintPZW7cIu, uintEAFPHLQ, uintFpsZsff, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeN7KoFXv = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uintgwli3Jg = BigInt("858")
		const addressVgpRjtK = accounts[0]
		const uintl8RWwJq = BigInt("1409")
		const uint256yd2T7Rs = await CourtFarming_RoomLPStakeN7KoFXv.getCurrentTime.call({from: accounts[2]});
		const boolx4POkE4 = await CourtFarming_RoomLPStakeN7KoFXv.stakeIncvRewards.call(uintgwli3Jg, {from: "0x0000000000000000000000000000000000000001"});
		const addresstOZzD7L = await CourtFarming_RoomLPStakeN7KoFXv.getBeneficiaryInfo.call(addressVgpRjtK, {from: accounts[3]});
		const uint256tGoHqd6 = await CourtFarming_RoomLPStakeN7KoFXv.lastUpdateBlock.call({from: accounts[3]});
		const boolvsd3yjW = await CourtFarming_RoomLPStakeN7KoFXv.stakeIncvRewards.call(uintl8RWwJq, {from: accounts[4]});

		assert.equal(boolvsd3yjW, false)
		assert.equal(boolx4POkE4, false)
		assert.equal(uint256tGoHqd6, BigInt("1223"))
		assert.equal(uint256yd2T7Rs, BigInt("1630199714"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeYvDVmb1 = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uintoYe6bOH = BigInt("1911")
		const uinthAn0v9t = BigInt("443")
		const uintdDvdbZJ = BigInt("811")
		const addresshgnl64n = "0x0000000000000000000000000000000000000001"
		await CourtFarming_RoomLPStakeYvDVmb1.changeStakeParameters.call(uintdDvdbZJ, uinthAn0v9t, uintoYe6bOH, {from: accounts[3]});
		const uint256Kd6qjk1 = await CourtFarming_RoomLPStakeYvDVmb1.blockNumber.call({from: accounts[4]});
		const addressIVkQHva = await CourtFarming_RoomLPStakeYvDVmb1.getBeneficiaryInfo.call(addresshgnl64n, {from: accounts[4]});
		const uint256FmBLqaz = await CourtFarming_RoomLPStakeYvDVmb1.incvRewardClaim.call({from: accounts[3]});

		await expect(CourtFarming_RoomLPStakeYvDVmb1.changeStakeParameters.call(uintdDvdbZJ, uinthAn0v9t, uintoYe6bOH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeYHeXJc = await CourtFarming_RoomLPStake.new({from: "0x0000000000000000000000000000000000000001"});
		const addresscfn6vKn = accounts[0]
		const addressHwhXgco = accounts[5]
		const address7EqLg7 = await CourtFarming_RoomLPStakeYHeXJc.updateReward.call(addresscfn6vKn, {from: accounts[2]});
		const uint256tySMzer = await CourtFarming_RoomLPStakeYHeXJc.rewards.call(addressHwhXgco, {from: accounts[0]});
		const uint256K97EIPY = await CourtFarming_RoomLPStakeYHeXJc.blockNumber.call({from: accounts[3]});
		const uint256nPM4Thi = await CourtFarming_RoomLPStakeYHeXJc.incvRewardInfo.call({from: accounts[5]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeAAvutP = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const boolx78xJj = false
		const uintiY8iRL9 = BigInt("0")
		const uintCbTAWG = BigInt("827")
		const uint256on3hxW7 = await CourtFarming_RoomLPStakeAAvutP.unstake.call(uintiY8iRL9, boolx78xJj, {from: accounts[1]});
		const boolEAJ7zd0 = await CourtFarming_RoomLPStakeAAvutP.stakeIncvRewards.call(uintCbTAWG, {from: accounts[2]});

		assert.equal(boolEAJ7zd0, false)
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakewMCFPk = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintmPtOzcB = BigInt("1662")
		const uintReITpzI = BigInt("1779")
		const uintf8wBY6l = BigInt("0")
		const uint256B5hVdT = await CourtFarming_RoomLPStakewMCFPk.incvRewardClaim.call({from: accounts[3]});
		const uint256LWzRgoU = await CourtFarming_RoomLPStakewMCFPk.totalStaked.call({from: accounts[0]});
		const booldfrEoKi = await CourtFarming_RoomLPStakewMCFPk.stakeIncvRewards.call(uintmPtOzcB, {from: accounts[2]});
		const uint256EUVs5Wf = await CourtFarming_RoomLPStakewMCFPk.lastUpdateBlock.call({from: accounts[1]});
		const uint256Ybby0qS = await CourtFarming_RoomLPStakewMCFPk.incvRewardClaim.call({from: accounts[2]});
		const boolyigHhgx = await CourtFarming_RoomLPStakewMCFPk.stakeIncvRewards.call(uintReITpzI, {from: accounts[3]});
		const uint256lYe2NMs = await CourtFarming_RoomLPStakewMCFPk.stake.call(uintf8wBY6l, {from: accounts[4]});

		assert.equal(booldfrEoKi, false)
		assert.equal(boolyigHhgx, false)
		assert.equal(uint256B5hVdT, BigInt("0"))
		assert.equal(uint256EUVs5Wf, BigInt("1223"))
		assert.equal(uint256LWzRgoU, BigInt("0"))
		assert.equal(uint256Ybby0qS, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakexoNvNv4 = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uintdeKDKJv = BigInt("582")
		const uintbxZuMvC = BigInt("0")
		const uinteTbORqJ = BigInt("1709")
		const uintw0QetBW = BigInt("743")
		const uintfNbzzww = BigInt("221")
		const boolUTLymdP = await CourtFarming_RoomLPStakexoNvNv4.stakeIncvRewards.call(uintdeKDKJv, {from: "0x0000000000000000000000000000000000000001"});
		const boolDND97wX = await CourtFarming_RoomLPStakexoNvNv4.stakeIncvRewards.call(uintbxZuMvC, {from: accounts[4]});
		const uint256OoS1Owa = await CourtFarming_RoomLPStakexoNvNv4.expectedRewardsToday.call(uinteTbORqJ, {from: accounts[4]});
		const uint256NNiPkMB = await CourtFarming_RoomLPStakexoNvNv4.stake.call(uintw0QetBW, {from: accounts[3]});
		const uint256lhdGDx6 = await CourtFarming_RoomLPStakexoNvNv4.stake.call(uintfNbzzww, {from: accounts[4]});

		assert.equal(boolDND97wX, false)
		assert.equal(boolUTLymdP, false)
		await expect(CourtFarming_RoomLPStakexoNvNv4.stake.call(uintw0QetBW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})