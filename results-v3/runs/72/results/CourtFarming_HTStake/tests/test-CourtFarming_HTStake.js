const CourtFarming_HTStake = artifacts.require("CourtFarming_HTStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_HTStake', (accounts) => {
	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakew5B1zcj = await CourtFarming_HTStake.new({from: accounts[3]});
		const uinthSc87r = BigInt("432")
		const uint4Gcyhg = BigInt("1276")
		const uintRBF0GnX = BigInt("289")
		const addressTqIIKS5 = accounts[2]
		const uint256FQLsdUp = await CourtFarming_HTStakew5B1zcj._stakeParametrsCalculation.call(uintRBF0GnX, uint4Gcyhg, uinthSc87r, {from: accounts[0]});
		const uint256b4sA0Iz = await CourtFarming_HTStakew5B1zcj.incvRewardInfo.call({from: accounts[3]});
		const addressCKccVQx = await CourtFarming_HTStakew5B1zcj.getBeneficiaryInfo.call(addressTqIIKS5, {from: accounts[4]});

		await expect(CourtFarming_HTStakew5B1zcj._stakeParametrsCalculation.call(uintRBF0GnX, uint4Gcyhg, uinthSc87r, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeTK8cbl6 = await CourtFarming_HTStake.new({from: accounts[5]});
		const uintPmctN7E = BigInt("306")
		const uintjySgWuS = BigInt("180")
		const uintR0y7FlR = BigInt("1352")
		const addressPgvaVYu = accounts[2]
		const uintb7Ph57r = BigInt("1452")
		const uintAjf1jKA = BigInt("160")
		const uint256a08qdi = await CourtFarming_HTStakeTK8cbl6.lastUpdateBlock.call({from: accounts[4]});
		const uint256AxDgcxu = await CourtFarming_HTStakeTK8cbl6._stakeParametrsCalculation.call(uintR0y7FlR, uintjySgWuS, uintPmctN7E, {from: accounts[1]});
		const addressJljCHJ = await CourtFarming_HTStakeTK8cbl6.updateReward.call(addressPgvaVYu, {from: accounts[3]});
		const uint256pwBBMyZ = await CourtFarming_HTStakeTK8cbl6.stake.call(uintb7Ph57r, {from: accounts[5]});
		const uint256M2QuZU = await CourtFarming_HTStakeTK8cbl6.expectedRewardsToday.call(uintAjf1jKA, {from: accounts[4]});

		assert.equal(uint256a08qdi, BigInt("1628"))
		await expect(CourtFarming_HTStakeTK8cbl6._stakeParametrsCalculation.call(uintR0y7FlR, uintjySgWuS, uintPmctN7E, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeWaWR5ja = await CourtFarming_HTStake.new({from: accounts[1]});
		const uinty3BjNmX = BigInt("917")
		const uintk2sOyjs = BigInt("1711")
		const bool9BwIg1 = false
		const uintAVVonDp = BigInt("1334")
		const addressKEAaVbZ = accounts[0]
		const uint256xkwyW0V = await CourtFarming_HTStakeWaWR5ja.expectedRewardsToday.call(uinty3BjNmX, {from: accounts[4]});
		const uint256Or0SQiV = await CourtFarming_HTStakeWaWR5ja.expectedRewardsToday.call(uintk2sOyjs, {from: accounts[1]});
		const uint256KoCep5s = await CourtFarming_HTStakeWaWR5ja.unstake.call(uintAVVonDp, bool9BwIg1, {from: accounts[0]});
		const uint256yWr8Lcy = await CourtFarming_HTStakeWaWR5ja.totalStaked.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256rJc59by = await CourtFarming_HTStakeWaWR5ja.balanceOf.call(addressKEAaVbZ, {from: accounts[1]});

		await expect(CourtFarming_HTStakeWaWR5ja.unstake.call(uintAVVonDp, bool9BwIg1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeWTzCW76 = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintvBiuJCg = BigInt("557")
		const uintNab6nM0 = BigInt("639")
		const uintnftJujZ = BigInt("73")
		const uint256mFvcWEi = await CourtFarming_HTStakeWTzCW76.getCurrentTime.call({from: accounts[2]});
		const uint256SPdjNsu = await CourtFarming_HTStakeWTzCW76.incvRewardClaim.call({from: accounts[0]});
		const uint256v0dZ1ce = await CourtFarming_HTStakeWTzCW76.getCurrentTime.call({from: "0x0000000000000000000000000000000000000001"});
		await CourtFarming_HTStakeWTzCW76.changeStakeParameters.call(uintnftJujZ, uintNab6nM0, uintvBiuJCg, {from: accounts[1]});

		assert.equal(uint256SPdjNsu, BigInt("0"))
		assert.equal(uint256mFvcWEi, BigInt("1630201222"))
		assert.equal(uint256v0dZ1ce, BigInt("1630201222"))
		await expect(CourtFarming_HTStakeWTzCW76.changeStakeParameters.call(uintnftJujZ, uintNab6nM0, uintvBiuJCg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeMMWvrtO = await CourtFarming_HTStake.new({from: accounts[4]});
		const addresstlUqT3W = accounts[3]
		const uint256ogPvTMA = await CourtFarming_HTStakeMMWvrtO.incvRewardInfo.call({from: accounts[5]});
		const uint256DtdgMmE = await CourtFarming_HTStakeMMWvrtO.getCurrentTime.call({from: accounts[4]});
		const uint256EEnclw = await CourtFarming_HTStakeMMWvrtO.rewards.call(addresstlUqT3W, {from: accounts[5]});

		assert.equal(uint256DtdgMmE, BigInt("1630201212"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeWZGc3nb = await CourtFarming_HTStake.new({from: accounts[5]});
		const addressUsVSad = accounts[1]
		const addressHNALXkp = accounts[2]
		const addressTm6CSVO = await CourtFarming_HTStakeWZGc3nb.setCourtStake.call(addressUsVSad, {from: accounts[3]});
		const uint256tHGFN8g = await CourtFarming_HTStakeWZGc3nb.getCurrentTime.call({from: accounts[5]});
		const addressdjQZd1i = await CourtFarming_HTStakeWZGc3nb.updateReward.call(addressHNALXkp, {from: accounts[5]});

		await expect(CourtFarming_HTStakeWZGc3nb.setCourtStake.call(addressUsVSad, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeJZaq9H3 = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressTOtR4yN = "0x0000000000000000000000000000000000000001"
		const uintcb5UFl8 = BigInt("759")
		const uintA4u7jCV = BigInt("403")
		const uintOXi0x6p = BigInt("1779")
		const uintNiKWIKw = BigInt("658")
		const uint256ebDZtS = await CourtFarming_HTStakeJZaq9H3.balanceOf.call(addressTOtR4yN, {from: accounts[2]});
		await CourtFarming_HTStakeJZaq9H3.changeStakeParameters.call(uintOXi0x6p, uintA4u7jCV, uintcb5UFl8, {from: accounts[2]});
		const boolTRAeDla = await CourtFarming_HTStakeJZaq9H3.stakeIncvRewards.call(uintNiKWIKw, {from: accounts[5]});

		assert.equal(uint256ebDZtS, BigInt("0"))
		await expect(CourtFarming_HTStakeJZaq9H3.changeStakeParameters.call(uintOXi0x6p, uintA4u7jCV, uintcb5UFl8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeWTzCW76 = await CourtFarming_HTStake.new({from: accounts[0]});
		const addressh5sPVt = accounts[1]
		const uintPcIa0IK = BigInt("557")
		const uintu0L6B5Y = BigInt("639")
		const uintMVfPzph = BigInt("73")
		const uint256mFvcWEi = await CourtFarming_HTStakeWTzCW76.getCurrentTime.call({from: accounts[2]});
		const uint256SPdjNsu = await CourtFarming_HTStakeWTzCW76.incvRewardClaim.call({from: accounts[0]});
		const addressSIlpNFH = await CourtFarming_HTStakeWTzCW76.setCourtStake.call(addressh5sPVt, {from: accounts[0]});
		const uint256v0dZ1ce = await CourtFarming_HTStakeWTzCW76.getCurrentTime.call({from: "0x0000000000000000000000000000000000000001"});
		await CourtFarming_HTStakeWTzCW76.changeStakeParameters.call(uintMVfPzph, uintu0L6B5Y, uintPcIa0IK, {from: accounts[1]});
		const uint256jYYyMHv = await CourtFarming_HTStakeWTzCW76.lastUpdateBlock.call({from: accounts[0]});

		assert.equal(uint256SPdjNsu, BigInt("0"))
		assert.equal(uint256mFvcWEi, BigInt("1630201225"))
		await expect(CourtFarming_HTStakeWTzCW76.setCourtStake.call(addressh5sPVt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeOzSMuow = await CourtFarming_HTStake.new({from: accounts[2]});
		const uintKQhIUHG = BigInt("287")
		const uintXLA5br = BigInt("103")
		const uintybcFUfU = BigInt("865")
		const addressR6MgcFb = accounts[4]
		const uint256iebciP = await CourtFarming_HTStakeOzSMuow.blockNumber.call({from: accounts[0]});
		const uint256Mhho4z4 = await CourtFarming_HTStakeOzSMuow.totalStaked.call({from: accounts[5]});
		await CourtFarming_HTStakeOzSMuow.changeStakeParameters.call(uintybcFUfU, uintXLA5br, uintKQhIUHG, {from: accounts[2]});
		const uint256LwQxnol = await CourtFarming_HTStakeOzSMuow.balanceOf.call(addressR6MgcFb, {from: accounts[2]});

		assert.equal(uint256Mhho4z4, BigInt("0"))
		assert.equal(uint256iebciP, BigInt("1628"))
		await expect(CourtFarming_HTStakeOzSMuow.changeStakeParameters.call(uintybcFUfU, uintXLA5br, uintKQhIUHG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakehQHOA83 = await CourtFarming_HTStake.new({from: accounts[2]});
		const addresslI4Bxs3 = accounts[5]
		const uintElHRgc = BigInt("1064")
		const addresseppBmV = accounts[1]
		const uint256blbLBQ = await CourtFarming_HTStakehQHOA83.rewards.call(addresslI4Bxs3, {from: accounts[3]});
		const uint256MNu9wll = await CourtFarming_HTStakehQHOA83.stake.call(uintElHRgc, {from: accounts[4]});
		const uint256t5AMJTP = await CourtFarming_HTStakehQHOA83.getCurrentTime.call({from: accounts[4]});
		const address0InVW8 = await CourtFarming_HTStakehQHOA83.setCourtStake.call(addresseppBmV, {from: accounts[3]});
		const uint256pfgg4O = await CourtFarming_HTStakehQHOA83.blockNumber.call({from: accounts[2]});

		await expect(CourtFarming_HTStakehQHOA83.stake.call(uintElHRgc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeo2WX0Yo = await CourtFarming_HTStake.new({from: "0x0000000000000000000000000000000000000001"});
		const uintPo2O1AR = BigInt("1559")
		const uintVXOR65m = BigInt("1216")
		const uintbIFz94C = BigInt("798")
		const uintWuw2FL = BigInt("1708")
		const booluewwq2a = await CourtFarming_HTStakeo2WX0Yo.stakeIncvRewards.call(uintPo2O1AR, {from: accounts[3]});
		const uint256tfTxiU = await CourtFarming_HTStakeo2WX0Yo.totalStaked.call({from: accounts[3]});
		const uint256SQlW1Jo = await CourtFarming_HTStakeo2WX0Yo._stakeParametrsCalculation.call(uintWuw2FL, uintbIFz94C, uintVXOR65m, {from: accounts[1]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeMMWvrtO = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintinBnMcD = BigInt("632")
		const addressGQ28e8f = accounts[3]
		const addresscpiCs8c = accounts[3]
		const addressPjYLYd2 = accounts[4]
		const addressuoY8Mq1 = accounts[3]
		const uint256jL7hX6 = await CourtFarming_HTStakeMMWvrtO.incvRewardClaim.call({from: accounts[2]});
		const boolbfwCVha = await CourtFarming_HTStakeMMWvrtO.stakeIncvRewards.call(uintinBnMcD, {from: accounts[2]});
		const addressJgZbqf0 = await CourtFarming_HTStakeMMWvrtO.getBeneficiaryInfo.call(addressGQ28e8f, {from: accounts[5]});
		const addressmpQ0s1z = await CourtFarming_HTStakeMMWvrtO.setCourtStake.call(addresscpiCs8c, {from: accounts[0]});
		const uint256b4D9lI = await CourtFarming_HTStakeMMWvrtO.blockNumber.call({from: accounts[2]});
		const addressvHK237k = await CourtFarming_HTStakeMMWvrtO.updateReward.call(addressPjYLYd2, {from: accounts[2]});
		const uint256EEnclw = await CourtFarming_HTStakeMMWvrtO.rewards.call(addressuoY8Mq1, {from: accounts[5]});
		const uint256sOzKZP = await CourtFarming_HTStakeMMWvrtO.getCurrentTime.call({from: accounts[0]});
		const uint256hN5ehgy = await CourtFarming_HTStakeMMWvrtO.incvRewardClaim.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolbfwCVha, false)
		assert.equal(uint256jL7hX6, BigInt("0"))
		await expect(CourtFarming_HTStakeMMWvrtO.setCourtStake.call(addresscpiCs8c, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeMMWvrtO = await CourtFarming_HTStake.new({from: accounts[4]});
		const boolQ9jhpOI = true
		const uintLhMd9ms = BigInt("0")
		const uint256hfgOCDA = await CourtFarming_HTStakeMMWvrtO.incvRewardClaim.call({from: accounts[2]});
		const uint256yuxVb4o = await CourtFarming_HTStakeMMWvrtO.unstake.call(uintLhMd9ms, boolQ9jhpOI, {from: accounts[1]});

		assert.equal(uint256hfgOCDA, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeMMWvrtO = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintdMRJoSW = BigInt("0")
		const uint256wHjm0zP = await CourtFarming_HTStakeMMWvrtO.blockNumber.call({from: accounts[2]});
		const uint256tQyUGOu = await CourtFarming_HTStakeMMWvrtO.totalStaked.call({from: accounts[2]});
		const uint256ogPvTMA = await CourtFarming_HTStakeMMWvrtO.incvRewardInfo.call({from: accounts[5]});
		const uint256FINN18Z = await CourtFarming_HTStakeMMWvrtO.stake.call(uintdMRJoSW, {from: accounts[1]});
		const uint256UAtBZi0 = await CourtFarming_HTStakeMMWvrtO.totalStaked.call({from: accounts[1]});

		assert.equal(uint256UAtBZi0, BigInt("0"))
		assert.equal(uint256tQyUGOu, BigInt("0"))
		assert.equal(uint256wHjm0zP, BigInt("1628"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeMMWvrtO = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintfNiwyo = BigInt("0")
		const addressEIihDCD = accounts[2]
		const addresso6D9xpp = accounts[2]
		const uintIRUoL8t = BigInt("70")
		const uintVyF7AWF = BigInt("593")
		const uintyFHRVU1 = BigInt("2018")
		const addressFCRl6l = accounts[5]
		const uintvcE5sZX = BigInt("1460")
		const addressEFebsRH = accounts[2]
		const boolCChpK9d = await CourtFarming_HTStakeMMWvrtO.stakeIncvRewards.call(uintfNiwyo, {from: accounts[4]});
		const uint256qDTwAak = await CourtFarming_HTStakeMMWvrtO.balanceOf.call(addressEIihDCD, {from: accounts[3]});
		const uint256RWUAw1U = await CourtFarming_HTStakeMMWvrtO.blockNumber.call({from: accounts[0]});
		const addresshhpz1WA = await CourtFarming_HTStakeMMWvrtO.updateReward.call(addresso6D9xpp, {from: accounts[4]});
		const uint256I9U5Uqp = await CourtFarming_HTStakeMMWvrtO.incvRewardInfo.call({from: accounts[4]});
		await CourtFarming_HTStakeMMWvrtO.changeStakeParameters.call(uintyFHRVU1, uintVyF7AWF, uintIRUoL8t, {from: accounts[4]});
		const addressJpGg7CK = await CourtFarming_HTStakeMMWvrtO.getBeneficiaryInfo.call(addressFCRl6l, {from: accounts[1]});
		const boollUO3Uv9 = await CourtFarming_HTStakeMMWvrtO.stakeIncvRewards.call(uintvcE5sZX, {from: accounts[3]});
		const addressMEPxnPE = await CourtFarming_HTStakeMMWvrtO.getBeneficiaryInfo.call(addressEFebsRH, {from: accounts[3]});
		const uint256ddFObmw = await CourtFarming_HTStakeMMWvrtO.lastUpdateBlock.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolCChpK9d, false)
		assert.equal(uint256RWUAw1U, BigInt("1628"))
		assert.equal(uint256qDTwAak, BigInt("0"))
		await expect(CourtFarming_HTStakeMMWvrtO.changeStakeParameters.call(uintyFHRVU1, uintVyF7AWF, uintIRUoL8t, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})