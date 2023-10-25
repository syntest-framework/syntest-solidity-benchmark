const CourtFarming_HTStake = artifacts.require("CourtFarming_HTStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_HTStake', (accounts) => {
	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakemkbAPPV = await CourtFarming_HTStake.new({from: "0x0000000000000000000000000000000000000001"});
		const uintxXihXFZ = BigInt("727")
		const uintayIBBow = BigInt("506")
		const uintCcX4SsI = BigInt("244")
		const uintGiKQCP = BigInt("231")
		const addressJBHGBcC = accounts[1]
		const uintKgeCcWh = BigInt("1762")
		const uint82Ue7e = BigInt("1908")
		const uintXl897o7 = BigInt("1191")
		const booltYNUQke = await CourtFarming_HTStakemkbAPPV.stakeIncvRewards.call(uintxXihXFZ, {from: accounts[3]});
		const uint256Je4GxdL = await CourtFarming_HTStakemkbAPPV._stakeParametrsCalculation.call(uintGiKQCP, uintCcX4SsI, uintayIBBow, {from: accounts[1]});
		const uint256dPXxLI1 = await CourtFarming_HTStakemkbAPPV.getCurrentTime.call({from: accounts[3]});
		const addresszgTokiC = await CourtFarming_HTStakemkbAPPV.updateReward.call(addressJBHGBcC, {from: accounts[5]});
		await CourtFarming_HTStakemkbAPPV.changeStakeParameters.call(uintXl897o7, uint82Ue7e, uintKgeCcWh, {from: accounts[3]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeT0ADE8Z = await CourtFarming_HTStake.new({from: accounts[5]});
		const uintgZHc4oH = BigInt("1810")
//		const uint256T9l851G = await CourtFarming_HTStakeT0ADE8Z.stake.call(uintgZHc4oH, {from: accounts[1]});
//		const uint256LY5WAU = await CourtFarming_HTStakeT0ADE8Z.lastUpdateBlock.call({from: accounts[2]});
//		const uint256Io2fqpx = await CourtFarming_HTStakeT0ADE8Z.totalStaked.call({from: accounts[3]});

		await expect(CourtFarming_HTStakeT0ADE8Z.stake.call(uintgZHc4oH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeWlRljio = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintxrGg3li = BigInt("601")
		const uintiBdX7vR = BigInt("766")
		const uint256A0vxsqQ = await CourtFarming_HTStakeWlRljio.blockNumber.call({from: accounts[3]});
		const uint256griBiiA = await CourtFarming_HTStakeWlRljio.incvRewardInfo.call({from: accounts[1]});
//		const uint256qFd8APe = await CourtFarming_HTStakeWlRljio.stake.call(uintxrGg3li, {from: accounts[0]});
//		const boolUyu64Wa = await CourtFarming_HTStakeWlRljio.stakeIncvRewards.call(uintiBdX7vR, {from: accounts[3]});
//		const uint256V9q2Foa = await CourtFarming_HTStakeWlRljio.totalStaked.call({from: accounts[1]});

		assert.equal(uint256A0vxsqQ, BigInt("1839"))
		await expect(CourtFarming_HTStakeWlRljio.stake.call(uintxrGg3li, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeTEwi4eJ = await CourtFarming_HTStake.new({from: accounts[3]});
		const addressKskG1FN = accounts[0]
		const boolRKJwCNf = false
		const uintCwNbyVP = BigInt("1510")
		const addressX9JjlYi = accounts[3]
		const uint256Pf6PCC8 = await CourtFarming_HTStakeTEwi4eJ.incvRewardInfo.call({from: accounts[4]});
		const uint256K1SgNkJ = await CourtFarming_HTStakeTEwi4eJ.rewards.call(addressKskG1FN, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256ZSTcbpr = await CourtFarming_HTStakeTEwi4eJ.unstake.call(uintCwNbyVP, boolRKJwCNf, {from: accounts[3]});
//		const uint256rln9dPR = await CourtFarming_HTStakeTEwi4eJ.getCurrentTime.call({from: accounts[3]});
//		const uint256iI3xWXQ = await CourtFarming_HTStakeTEwi4eJ.balanceOf.call(addressX9JjlYi, {from: accounts[2]});

		await expect(CourtFarming_HTStakeTEwi4eJ.unstake.call(uintCwNbyVP, boolRKJwCNf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStaketRrxax1 = await CourtFarming_HTStake.new({from: accounts[4]});
		const addresskjLfkKz = accounts[1]
		const addressUdhKv4K = accounts[0]
//		const addressMWB1iHF = await CourtFarming_HTStaketRrxax1.setCourtStake.call(addresskjLfkKz, {from: accounts[1]});
//		const addressAirNM35 = await CourtFarming_HTStaketRrxax1.updateReward.call(addressUdhKv4K, {from: accounts[1]});

		await expect(CourtFarming_HTStaketRrxax1.setCourtStake.call(addresskjLfkKz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakevFTULHi = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintgUkOuHp = BigInt("771")
		const uintUpEiI8w = BigInt("1412")
		const uinthkU5cB = BigInt("1237")
		const addressJXqf4XE = accounts[1]
		const uint256Bc19Q8H = await CourtFarming_HTStakevFTULHi.totalStaked.call({from: accounts[0]});
//		const uint256ai1Y7v5 = await CourtFarming_HTStakevFTULHi._stakeParametrsCalculation.call(uinthkU5cB, uintUpEiI8w, uintgUkOuHp, {from: accounts[1]});
//		const uint256Q0unOFB = await CourtFarming_HTStakevFTULHi.balanceOf.call(addressJXqf4XE, {from: accounts[1]});

		assert.equal(uint256Bc19Q8H, BigInt("0"))
		await expect(CourtFarming_HTStakevFTULHi._stakeParametrsCalculation.call(uinthkU5cB, uintUpEiI8w, uintgUkOuHp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakezJ3vCdm = await CourtFarming_HTStake.new({from: accounts[1]});
		const uints8KLA5M = BigInt("2003")
		const addressGPTvJQ7 = accounts[3]
		const uint256ykodXj = await CourtFarming_HTStakezJ3vCdm.expectedRewardsToday.call(uints8KLA5M, {from: accounts[1]});
		const uint256CgA43HG = await CourtFarming_HTStakezJ3vCdm.rewards.call(addressGPTvJQ7, {from: accounts[1]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeGjjL7Cm = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintD7FUUaD = BigInt("1995")
		const uint256qNnF8sl = await CourtFarming_HTStakeGjjL7Cm.incvRewardClaim.call({from: accounts[3]});
		const uint256kj2dfNC = await CourtFarming_HTStakeGjjL7Cm.incvRewardInfo.call({from: accounts[5]});
//		const uint256AKmY6J8 = await CourtFarming_HTStakeGjjL7Cm.stake.call(uintD7FUUaD, {from: accounts[3]});

		assert.equal(uint256qNnF8sl, BigInt("0"))
		await expect(CourtFarming_HTStakeGjjL7Cm.stake.call(uintD7FUUaD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakezJ3vCdm = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressqh43pO0 = accounts[4]
		const addressvFYjxye = accounts[3]
		const uintEihtz5s = BigInt("2003")
		const uint256WBEf6oB = await CourtFarming_HTStakezJ3vCdm.balanceOf.call(addressqh43pO0, {from: accounts[0]});
		const addresskk72i8B = await CourtFarming_HTStakezJ3vCdm.updateReward.call(addressvFYjxye, {from: accounts[4]});
		const uint256ykodXj = await CourtFarming_HTStakezJ3vCdm.expectedRewardsToday.call(uintEihtz5s, {from: accounts[1]});

		assert.equal(uint256WBEf6oB, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStaketRrxax1 = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintQNYAKL = BigInt("1773")
		const uintkQuTFLi = BigInt("1247")
		const uintuMFR9q = BigInt("653")
		const addressJqNhsIM = accounts[2]
		const uint256FRip00t = await CourtFarming_HTStaketRrxax1.lastUpdateBlock.call({from: accounts[2]});
//		await CourtFarming_HTStaketRrxax1.changeStakeParameters.call(uintuMFR9q, uintkQuTFLi, uintQNYAKL, {from: accounts[1]});
//		const addressAirNM35 = await CourtFarming_HTStaketRrxax1.updateReward.call(addressJqNhsIM, {from: accounts[1]});

		assert.equal(uint256FRip00t, BigInt("1839"))
		await expect(CourtFarming_HTStaketRrxax1.changeStakeParameters.call(uintuMFR9q, uintkQuTFLi, uintQNYAKL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakegVc6rWj = await CourtFarming_HTStake.new({from: accounts[2]});
		const uintMbEOudK = BigInt("599")
		const boolfNMcsNt = true
		const uintarezLU6 = BigInt("641")
		const uintjy2kF2a = BigInt("841")
		const uintJdmjtc = BigInt("401")
		const uintgAsKnBE = BigInt("1813")
		const uintzxSDHP = BigInt("826")
		const uint64dWcX = BigInt("402")
		const uintoAyp9jr = BigInt("630")
		const addressgaOip4B = accounts[3]
		const boolleOZirp = await CourtFarming_HTStakegVc6rWj.stakeIncvRewards.call(uintMbEOudK, {from: accounts[3]});
//		const uint256wDTplTA = await CourtFarming_HTStakegVc6rWj.unstake.call(uintarezLU6, boolfNMcsNt, {from: accounts[3]});
//		const uint256a927sYc = await CourtFarming_HTStakegVc6rWj._stakeParametrsCalculation.call(uintgAsKnBE, uintJdmjtc, uintjy2kF2a, {from: accounts[5]});
//		await CourtFarming_HTStakegVc6rWj.changeStakeParameters.call(uintoAyp9jr, uint64dWcX, uintzxSDHP, {from: accounts[0]});
//		const addresscdWdalS = await CourtFarming_HTStakegVc6rWj.setCourtStake.call(addressgaOip4B, {from: accounts[2]});

		assert.equal(boolleOZirp, false)
		await expect(CourtFarming_HTStakegVc6rWj.unstake.call(uintarezLU6, boolfNMcsNt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakegVc6rWj = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressWl4lXj = accounts[3]
//		const addresscdWdalS = await CourtFarming_HTStakegVc6rWj.setCourtStake.call(addressWl4lXj, {from: accounts[2]});

		await expect(CourtFarming_HTStakegVc6rWj.setCourtStake.call(addressWl4lXj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeNfOPCqR = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintxEBliqE = BigInt("918")
		const uintO4JdT6 = BigInt("1079")
		const uintLmu5Qa7 = BigInt("30")
		const uintEcjUKdP = BigInt("467")
		const uint256BXB5CZ = await CourtFarming_HTStakeNfOPCqR.totalStaked.call({from: "0x0000000000000000000000000000000000000001"});
//		await CourtFarming_HTStakeNfOPCqR.changeStakeParameters.call(uintLmu5Qa7, uintO4JdT6, uintxEBliqE, {from: accounts[1]});
//		const uint256vlySZv = await CourtFarming_HTStakeNfOPCqR.incvRewardInfo.call({from: accounts[0]});
//		const uint256Zl9Y4d = await CourtFarming_HTStakeNfOPCqR.expectedRewardsToday.call(uintEcjUKdP, {from: accounts[1]});
//		const uint256lC8MzC = await CourtFarming_HTStakeNfOPCqR.incvRewardClaim.call({from: accounts[0]});

		assert.equal(uint256BXB5CZ, BigInt("0"))
		await expect(CourtFarming_HTStakeNfOPCqR.changeStakeParameters.call(uintLmu5Qa7, uintO4JdT6, uintxEBliqE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakezJ3vCdm = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintY28GZ3N = BigInt("2003")
		const addressflFQuPH = accounts[4]
		const addressKVF80wh = accounts[2]
		const uint256REqwhVw = await CourtFarming_HTStakezJ3vCdm.lastUpdateBlock.call({from: accounts[3]});
		const uint256ykodXj = await CourtFarming_HTStakezJ3vCdm.expectedRewardsToday.call(uintY28GZ3N, {from: accounts[1]});
		const uint256CgA43HG = await CourtFarming_HTStakezJ3vCdm.rewards.call(addressflFQuPH, {from: accounts[1]});
		const addressvsA7ql6 = await CourtFarming_HTStakezJ3vCdm.getBeneficiaryInfo.call(addressKVF80wh, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256REqwhVw, BigInt("1839"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeGjjL7Cm = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintzC9tRGd = BigInt("0")
		const uint256YeeT5qt = await CourtFarming_HTStakeGjjL7Cm.totalStaked.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256WWX8Z6O = await CourtFarming_HTStakeGjjL7Cm.incvRewardInfo.call({from: accounts[3]});
		const uint256AKmY6J8 = await CourtFarming_HTStakeGjjL7Cm.stake.call(uintzC9tRGd, {from: accounts[3]});

		assert.equal(uint256YeeT5qt, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeGjjL7Cm = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintmlXdVJD = BigInt("742")
		const addressR8rgPo0 = accounts[1]
		const uinteTy0dNO = BigInt("0")
		const boolpWwmwoo = await CourtFarming_HTStakeGjjL7Cm.stakeIncvRewards.call(uintmlXdVJD, {from: accounts[2]});
		const uint256Pg4oOPm = await CourtFarming_HTStakeGjjL7Cm.balanceOf.call(addressR8rgPo0, {from: accounts[4]});
		const uint256VaHeGAz = await CourtFarming_HTStakeGjjL7Cm.lastUpdateBlock.call({from: accounts[4]});
		const boolMyO0Kw2 = await CourtFarming_HTStakeGjjL7Cm.stakeIncvRewards.call(uinteTy0dNO, {from: accounts[4]});

		assert.equal(boolMyO0Kw2, false)
		assert.equal(boolpWwmwoo, false)
		assert.equal(uint256Pg4oOPm, BigInt("0"))
		assert.equal(uint256VaHeGAz, BigInt("1839"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakezJ3vCdm = await CourtFarming_HTStake.new({from: accounts[1]});
		const boolodMTOss = true
		const uintJOH5ao = BigInt("0")
		const uint256MzVJqV0 = await CourtFarming_HTStakezJ3vCdm.unstake.call(uintJOH5ao, boolodMTOss, {from: accounts[2]});
	});
})